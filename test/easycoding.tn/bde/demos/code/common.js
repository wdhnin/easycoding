/**
 * Blockly Apps: Common code
 *
 * Copyright 2013 Google Inc.
 * http://blockly.googlecode.com/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Common support code for Blockly apps.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

var BlocklyApps = {};

/**
 * User's language (e.g. "en").
 * @type string=
 */
BlocklyApps.LANG = 'en';


/**
 * Extracts a parameter from the URL.
 * If the parameter is absent default_value is returned.
 * @param {string} name The name of the parameter.
 * @param {string} defaultValue Value to return if paramater not found.
 * @return {string} The parameter value or the default value if not found.
 */
BlocklyApps.getStringParamFromUrl = function(name, defaultValue) {
    var val =
        window.location.search.match(new RegExp('[?&]' + name + '=([^&]+)'));
    return val ? decodeURIComponent(val[1].replace(/\+/g, '%20')) : defaultValue;
};

/**
 * Extracts a numeric parameter from the URL.
 * If the parameter is absent or less than min_value, min_value is
 * returned.  If it is greater than max_value, max_value is returned.
 * @param {string} name The name of the parameter.
 * @param {number} minValue The minimum legal value.
 * @param {number} maxValue The maximum legal value.
 * @return {number} A number in the range [min_value, max_value].
 */
BlocklyApps.getNumberParamFromUrl = function(name, minValue, maxValue) {
    var val = Number(BlocklyApps.getStringParamFromUrl(name, 'NaN'));
    return isNaN(val) ? minValue : Math.min(Math.max(minValue, val), maxValue);
};

/**
 * Common startup tasks for all apps.
 */
BlocklyApps.init = function() {
    // Set the page title with the content of the H1 title.
    document.title = document.getElementById('title').textContent;

    // Disable the link button if page isn't backed by App Engine storage.
    var linkButton = document.getElementById('linkButton');
    if ('BlocklyStorage' in window) {
        BlocklyStorage['HTTPREQUEST_ERROR'] = 'There was a problem with the request.';
        BlocklyStorage['LINK_ALERT'] = 'Share your blocks with this link:\n\n%1';
        BlocklyStorage['HASH_ERROR'] = 'Sorry, "%1" doesn\'t correspond with any saved program.';
        BlocklyStorage['XML_ERROR'] =
            'Could not load your saved file.  Perhaps it was created with a different version of Blockly?';
        // Swap out the BlocklyStorage's alert() for a nicer dialog.
        BlocklyStorage.alert = BlocklyApps.storageAlert;
        BlocklyApps.bindClick('linkButton', BlocklyStorage.link);
    } else if (linkButton) {
        linkButton.className = 'disabled';
    }

    if (document.getElementById('codeButton')) {
        BlocklyApps.bindClick('codeButton', BlocklyApps.showCode);
    }

    // Fixes viewport for small screens.
    var viewport = document.querySelector('meta[name="viewport"]');
    if (viewport && screen.availWidth < 725) {
        viewport.setAttribute('content',
            'width=725, initial-scale=.35, user-scalable=no');
    }
};

/**
 * Initialize Blockly for a readonly iframe.  Called on page load.
 * XML argument may be generated from the console with:
 * encodeURIComponent(Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(Blockly.mainWorkspace)).slice(5, -6))
 */
BlocklyApps.initReadonly = function() {
    Blockly.inject(document.getElementById('blockly'), {
        path: '../../',
        readOnly: true,
        rtl: BlocklyApps.isRtl(),
        scrollbars: false
    });

    // Add the blocks.
    var xml = BlocklyApps.getStringParamFromUrl('xml', '');
    xml = Blockly.Xml.textToDom('<xml>' + xml + '</xml>');
    Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xml);
};

/**
 * Load blocks saved on App Engine Storage or in session/local storage.
 * @param {string} defaultXml Text representation of default blocks.
 */
BlocklyApps.loadBlocks = function(defaultXml) {
    try {
        var loadOnce = window.sessionStorage.loadOnceBlocks;
    } catch (e) {
        // Firefox sometimes throws a SecurityError when accessing sessionStorage.
        // Restarting Firefox fixes this, so it looks like a bug.
        var loadOnce = null;
    }
    if ('BlocklyStorage' in window && window.location.hash.length > 1) {
        // An href with #key trigers an AJAX call to retrieve saved blocks.
        BlocklyStorage.retrieveXml(window.location.hash.substring(1));
    } else if (loadOnce) {
        // Language switching stores the blocks during the reload.
        delete window.sessionStorage.loadOnceBlocks;
        var xml = Blockly.Xml.textToDom(loadOnce);
        Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xml);
    } else if (defaultXml) {
        // Load the editor with default starting blocks.
        var xml = Blockly.Xml.textToDom(defaultXml);
        Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xml);
    } else if ('BlocklyStorage' in window) {
        // Restore saved blocks in a separate thread so that subsequent
        // initialization is not affected from a failed load.
        window.setTimeout(BlocklyStorage.restoreBlocks, 0);
    }
};

/**
 * Highlight the block (or clear highlighting).
 * @param {?string} id ID of block that triggered this action.
 */
BlocklyApps.highlight = function(id) {
    if (id) {
        var m = id.match(/^block_id_(\d+)$/);
        if (m) {
            id = m[1];
        }
    }
    Blockly.mainWorkspace.highlightBlock(id);
};

/**
 * If the user has executed too many actions, we're probably in an infinite
 * loop.  Sadly I wasn't able to solve the Halting Problem.
 * @param {?string} opt_id ID of loop block to highlight.
 * @throws {Infinity} Throws an error to terminate the user's program.
 */
BlocklyApps.checkTimeout = function(opt_id) {
    if (opt_id) {
        BlocklyApps.log.push([null, opt_id]);
    }
    if (BlocklyApps.ticks-- < 0) {
        throw Infinity;
    }
};

/**
 * Is the dialog currently onscreen?
 * @private
 */
BlocklyApps.isDialogVisible_ = false;

/**
 * A closing dialog should animate towards this element.
 * @type Element
 * @private
 */
BlocklyApps.dialogOrigin_ = null;

/**
 * A function to call when a dialog closes.
 * @type Function
 * @private
 */
BlocklyApps.dialogDispose_ = null;

/**
 * Show the dialog pop-up.
 * @param {!Element} content DOM element to display in the dialog.
 * @param {Element} origin Animate the dialog opening/closing from/to this
 *     DOM element.  If null, don't show any animations for opening or closing.
 * @param {boolean} animate Animate the dialog opening (if origin not null).
 * @param {boolean} modal If true, grey out background and prevent interaction.
 * @param {!Object} style A dictionary of style rules for the dialog.
 * @param {Function} disposeFunc An optional function to call when the dialog
 *     closes.  Normally used for unhooking events.
 */
BlocklyApps.showDialog = function(content, origin, animate, modal, style,
    disposeFunc) {
    if (BlocklyApps.isDialogVisible_) {

        BlocklyApps.hideDialog(false);
    }
    BlocklyApps.isDialogVisible_ = true;
    BlocklyApps.dialogOrigin_ = origin;
    BlocklyApps.dialogDispose_ = disposeFunc;
    var dialog = document.getElementById('dialog');
    var shadow = document.getElementById('dialogShadow');
    var border = document.getElementById('dialogBorder');

    // Copy all the specified styles to the dialog.
    for (var name in style) {
        dialog.style[name] = style[name];
    }
    if (modal) {
        shadow.style.visibility = 'visible';
        shadow.style.opacity = 0.3;
        var header = document.createElement('div');
        header.id = 'dialogHeader';
        dialog.appendChild(header);
        BlocklyApps.dialogMouseDownWrapper_ =
            Blockly.bindEvent_(header, 'mousedown', null,
                BlocklyApps.dialogMouseDown_);
    }
    dialog.appendChild(content);
    content.className = content.className.replace('dialogHiddenContent', '');

    function endResult() {
        // Check that the dialog wasn't closed during opening.
        if (BlocklyApps.isDialogVisible_) {
            dialog.style.visibility = 'visible';
            dialog.style.zIndex = 1;
            border.style.visibility = 'hidden';
        }
    }
    if (animate && origin) {
        BlocklyApps.matchBorder_(origin, false, 0.2);
        BlocklyApps.matchBorder_(dialog, true, 0.8);
        // In 175ms show the dialog and hide the animated border.
        window.setTimeout(endResult, 175);
    } else {
        // No animation.  Just set the final state.
        endResult();
    }
};

/**
 * Horizontal start coordinate of dialog drag.
 */
BlocklyApps.dialogStartX_ = 0;

/**
 * Vertical start coordinate of dialog drag.
 */
BlocklyApps.dialogStartY_ = 0;

/**
 * Handle start of drag of dialog.
 * @param {!Event} e Mouse down event.
 * @private
 */
BlocklyApps.dialogMouseDown_ = function(e) {
    BlocklyApps.dialogUnbindDragEvents_();
    if (Blockly.isRightButton(e)) {
        // Right-click.
        return;
    }
    // Left click (or middle click).
    // Record the starting offset between the current location and the mouse.
    var dialog = document.getElementById('dialog');
    BlocklyApps.dialogStartX_ = dialog.offsetLeft - e.clientX;
    BlocklyApps.dialogStartY_ = dialog.offsetTop - e.clientY;

    BlocklyApps.dialogMouseUpWrapper_ = Blockly.bindEvent_(document,
        'mouseup', null, BlocklyApps.dialogUnbindDragEvents_);
    BlocklyApps.dialogMouseMoveWrapper_ = Blockly.bindEvent_(document,
        'mousemove', null, BlocklyApps.dialogMouseMove_);
    // This event has been handled.  No need to bubble up to the document.
    e.stopPropagation();
};

/**
 * Drag the dialog to follow the mouse.
 * @param {!Event} e Mouse move event.
 * @private
 */
BlocklyApps.dialogMouseMove_ = function(e) {
    var dialog = document.getElementById('dialog');
    var dialogLeft = BlocklyApps.dialogStartX_ + e.clientX;
    var dialogTop = BlocklyApps.dialogStartY_ + e.clientY;
    dialogTop = Math.max(dialogTop, 0);
    dialogTop = Math.min(dialogTop, window.innerHeight - dialog.offsetHeight);
    dialogLeft = Math.max(dialogLeft, 0);
    dialogLeft = Math.min(dialogLeft, window.innerWidth - dialog.offsetWidth);
    dialog.style.left = dialogLeft + 'px';
    dialog.style.top = dialogTop + 'px';
};

/**
 * Stop binding to the global mouseup and mousemove events.
 * @private
 */
BlocklyApps.dialogUnbindDragEvents_ = function() {
    if (BlocklyApps.dialogMouseUpWrapper_) {
        Blockly.unbindEvent_(BlocklyApps.dialogMouseUpWrapper_);
        BlocklyApps.dialogMouseUpWrapper_ = null;
    }
    if (BlocklyApps.dialogMouseMoveWrapper_) {
        Blockly.unbindEvent_(BlocklyApps.dialogMouseMoveWrapper_);
        BlocklyApps.dialogMouseMoveWrapper_ = null;
    }
};

/**
 * Hide the dialog pop-up.
 * @param {boolean} opt_animate Animate the dialog closing.  Defaults to true.
 *     Requires that origin was not null when dialog was opened.
 */
BlocklyApps.hideDialog = function(opt_animate) {
    if (!BlocklyApps.isDialogVisible_) {
        return;
    }
    BlocklyApps.dialogUnbindDragEvents_();
    if (BlocklyApps.dialogMouseDownWrapper_) {
        Blockly.unbindEvent_(BlocklyApps.dialogMouseDownWrapper_);
        BlocklyApps.dialogMouseDownWrapper_ = null;
    }

    BlocklyApps.isDialogVisible_ = false;
    BlocklyApps.dialogDispose_ && BlocklyApps.dialogDispose_();
    BlocklyApps.dialogDispose_ = null;
    var origin = (opt_animate === false) ? null : BlocklyApps.dialogOrigin_;
    var dialog = document.getElementById('dialog');
    var shadow = document.getElementById('dialogShadow');
    var border = document.getElementById('dialogBorder');

    shadow.style.opacity = 0;

    function endResult() {
        shadow.style.visibility = 'hidden';
        border.style.visibility = 'hidden';
    }
    if (origin) {
        BlocklyApps.matchBorder_(dialog, false, 0.8);
        BlocklyApps.matchBorder_(origin, true, 0.2);
        // In 175ms hide both the shadow and the animated border.
        window.setTimeout(endResult, 175);
    } else {
        // No animation.  Just set the final state.
        endResult();
    }
    dialog.style.visibility = 'hidden';
    dialog.style.zIndex = -1;
    var header = document.getElementById('dialogHeader');
    if (header) {
        header.parentNode.removeChild(header);
    }
    while (dialog.firstChild) {
        var content = dialog.firstChild;
        content.className += ' dialogHiddenContent';
        document.body.appendChild(content);
    }
};

/**
 * Match the animated border to the a element's size and location.
 * @param {!Element} element Element to match.
 * @param {boolean} animate Animate to the new location.
 * @param {number} opacity Opacity of border.
 * @private
 */
BlocklyApps.matchBorder_ = function(element, animate, opacity) {
    if (!element) {
        return;
    }
    var border = document.getElementById('dialogBorder');
    var bBox = BlocklyApps.getBBox_(element);

    function change() {
        border.style.width = bBox.width + 'px';
        border.style.height = bBox.height + 'px';
        border.style.left = bBox.x + 'px';
        border.style.top = bBox.y + 'px';
        border.style.opacity = opacity;
    }
    if (animate) {
        border.className = 'dialogAnimate';
        window.setTimeout(change, 1);
    } else {
        border.className = '';
        change();
    }
    border.style.visibility = 'visible';
};

/**
 * Compute the absolute coordinates and dimensions of an HTML or SVG element.
 * @param {!Element} element Element to match.
 * @return {!Object} Contains height, width, x, and y properties.
 * @private
 */
BlocklyApps.getBBox_ = function(element) {
    if (element.getBBox) {
        // SVG element.
        var bBox = element.getBBox();
        var height = bBox.height;
        var width = bBox.width;
        var xy = Blockly.getAbsoluteXY_(element);
        var x = xy.x;
        var y = xy.y;
    } else {
        // HTML element.
        var height = element.offsetHeight;
        var width = element.offsetWidth;
        var x = 0;
        var y = 0;
        do {
            x += element.offsetLeft;
            y += element.offsetTop;
            element = element.offsetParent;
        } while (element);
    }
    return {
        height: height,
        width: width,
        x: x,
        y: y
    };
};

/**
 * Display a storage-related modal dialog.
 * @param {string} message Text to alert.
 */
BlocklyApps.storageAlert = function(message) {
    var container = document.getElementById('containerStorage');
    container.textContent = '';
    var lines = message.split('\n');
    for (var i = 0; i < lines.length; i++) {
        var p = document.createElement('p');
        p.appendChild(document.createTextNode(lines[i]));
        container.appendChild(p);
    }

    var content = document.getElementById('dialogStorage');
    var origin = document.getElementById('linkButton');
    var style = {
        width: '50%',
        left: '25%',
        top: '5em'
    };
    BlocklyApps.showDialog(content, origin, true, true, style,
        BlocklyApps.stopDialogKeyDown());
    BlocklyApps.startDialogKeyDown();
};

/**
 * Convert the user's code to raw JavaScript.
 * @param {string} code Generated code.
 * @return {string} The code without serial numbers and timeout checks.
 */
BlocklyApps.stripCode = function(code) {
    // Strip out serial numbers.
    code = code.replace(/(,\s*)?'block_id_\d+'\)/g, ')');
    // Remove timeouts.
    var regex = new RegExp(Blockly.JavaScript.INFINITE_LOOP_TRAP
        .replace('(%1)', '\\((\'\\d+\')?\\)'), 'g');
    return code.replace(regex, '');
};

/**
 * Show the user's code in raw JavaScript.
 * @param {!Event} e Mouse or touch event.
 */
BlocklyApps.showCode = function(e) {
    var origin = e.target;
    var code = Blockly.JavaScript.workspaceToCode();
    code = BlocklyApps.stripCode(code);
    var pre = document.getElementById('containerCode');
    pre.textContent = code;
    if (typeof prettyPrintOne == 'function') {
        code = pre.innerHTML;
        code = prettyPrintOne(code, 'js');
        pre.innerHTML = code;
    }

    var content = document.getElementById('dialogCode');
    var style = {
        width: '40%',
        left: '30%',
        top: '5em'
    };
    BlocklyApps.showDialog(content, origin, true, true, style,
        BlocklyApps.stopDialogKeyDown);
    BlocklyApps.startDialogKeyDown();
};

/**
 * If the user preses enter, escape, or space, hide the dialog.
 * @param {!Event} e Keyboard event.
 * @private
 */
BlocklyApps.dialogKeyDown_ = function(e) {
    if (BlocklyApps.isDialogVisible_) {
        if (e.keyCode == 13 ||
            e.keyCode == 27 ||
            e.keyCode == 32) {
            BlocklyApps.hideDialog(true);
            e.stopPropagation();
            e.preventDefault();
        }
    }
};

/**
 * Start listening for BlocklyApps.dialogKeyDown_.
 */
BlocklyApps.startDialogKeyDown = function() {
    document.body.addEventListener('keydown',
        BlocklyApps.dialogKeyDown_, true);
};

/**
 * Stop listening for BlocklyApps.dialogKeyDown_.
 */
BlocklyApps.stopDialogKeyDown = function() {
    document.body.removeEventListener('keydown',
        BlocklyApps.dialogKeyDown_, true);
};

/**
 * Gets the message with the given key from the document.
 * @param {string} key The key of the document element.
 * @return {string} The textContent of the specified element,
 *     or an error message if the element was not found.
 */
BlocklyApps.getMsg = function(key) {
    var msg = BlocklyApps.getMsgOrNull(key);
    return msg === null ? '[Unknown message: ' + key + ']' : msg;
};

/**
 * Gets the message with the given key from the document.
 * @param {string} key The key of the document element.
 * @return {string} The textContent of the specified element,
 *     or null if the element was not found.
 */
BlocklyApps.getMsgOrNull = function(key) {
    var element = document.getElementById(key);
    if (element) {
        var text = element.textContent;
        // Convert newline sequences.
        text = text.replace(/\\n/g, '\n');
        return text;
    } else {
        return null;
    }
};

/**
 * On touch enabled browsers, add touch-friendly variants of event handlers
 * for elements such as buttons whose event handlers are specified in the
 * markup. For example, ontouchend is treated as equivalent to onclick.
 */
BlocklyApps.addTouchEvents = function() {
    // Do nothing if the browser doesn't support touch.
    if (!('ontouchstart' in document.documentElement)) {
        return;
    }
    // Treat ontouchend as equivalent to onclick for buttons.
    var buttons = document.getElementsByTagName('button');
    for (var i = 0, button; button = buttons[i]; i++) {
        if (!button.ontouchend) {
            button.ontouchend = button.onclick;
        }
    }
};

// Add events for touch devices when the window is done loading.
window.addEventListener('load', BlocklyApps.addTouchEvents, false);

/**
 * Bind a function to a button's click event.
 * On touch enabled browsers, ontouchend is treated as equivalent to onclick.
 * @param {string} id ID of button element.
 * @param {!Function} func Event handler to bind.
 */
BlocklyApps.bindClick = function(id, func) {
    var el = document.getElementById(id);
    el.addEventListener('click', func, true);
    el.addEventListener('touchend', func, true);
};