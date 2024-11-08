/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
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
 * @fileoverview Loop blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.loops');

goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.loops.HUE = 120;

Blockly.Blocks['while_do'] = {
    init: function() {
        this.setColour(190);
        this.setHelpUrl('http://www.example.com/');
        this.appendStatementInput("STATNAME")
            .appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
        this.appendValueInput("CONDI")
            .setCheck('Boolean')
            .appendField(Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('');
    }
};

Blockly.Blocks['do_while'] = {
    init: function() {
        this.setColour(190);
        this.setHelpUrl('http://www.example.com/');
        this.appendValueInput("CONDI")
            .setCheck('Boolean')
            .appendField(Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE);
        this.appendStatementInput("STATNAME")
            .appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('');
    }
};

Blockly.Blocks['cont_break'] = {
    init: function() {
        this.setColour(190);
        this.setHelpUrl('http://www.example.com/');
        this.appendDummyInput()
            .appendField(Blockly.Msg.Break);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('');
    }
};

Blockly.Blocks['controls_repeat_y'] = {
    /**
     * Block for repeat n times (external number).
     * @this Blockly.Block
     */
    init: function() {
        this.setHelpUrl(Blockly.Msg.CONTROLS_REPEAT_HELPURL);
        this.setColour(190);
        this.interpolateMsg(Blockly.Msg.CONTROLS_REPEAT_TITLE, ['TIMES', 'Number', Blockly.ALIGN_RIGHT],
            Blockly.ALIGN_RIGHT);
        this.appendStatementInput('DO')
            .appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.CONTROLS_REPEAT_TOOLTIP);
    }
};

Blockly.Blocks['controls_for'] = {
    /**
     * Block for 'for' loop.
     * @this Blockly.Block
     */
    init: function() {
        this.jsonInit({
            "message0": Blockly.Msg.CONTROLS_FOR_TITLE,
            "args0": [{
                    "type": "field_variable",
                    "name": "VAR",
                    "variable": null
                },
                {
                    "type": "input_value",
                    "name": "FROM",
                    "check": "Number",
                    "align": "RIGHT"
                },
                {
                    "type": "input_value",
                    "name": "TO",
                    "check": "Number",
                    "align": "RIGHT"
                },
                {
                    "type": "input_value",
                    "name": "BY",
                    "check": "Number",
                    "align": "RIGHT"
                }
            ],
            "inputsInline": true,
            "previousStatement": null,
            "nextStatement": null,
            "colour": 190,
            "helpUrl": Blockly.Msg.CONTROLS_FOR_HELPURL
        });
        this.appendStatementInput('DO')
            .appendField(Blockly.Msg.CONTROLS_FOR_INPUT_DO);
        // Assign 'this' to a variable for use in the tooltip closure below.
        var thisBlock = this;
        this.setTooltip(function() {
            return Blockly.Msg.CONTROLS_FOR_TOOLTIP.replace('%1',
                thisBlock.getFieldValue('VAR'));
        });
    },
    /**
     * Return all variables referenced by this block.
     * @return {!Array.<string>} List of variable names.
     * @this Blockly.Block
     */
    getVars: function() {
        return [this.getFieldValue('VAR')];
    },
    /**
     * Notification that a variable is renaming.
     * If the name matches one of this block's variables, rename it.
     * @param {string} oldName Previous name of variable.
     * @param {string} newName Renamed variable.
     * @this Blockly.Block
     */
    renameVar: function(oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
            this.setFieldValue(newName, 'VAR');
        }
    },
    /**
     * Add menu option to create getter block for loop variable.
     * @param {!Array} options List of menu options to add to.
     * @this Blockly.Block
     */
    customContextMenu: function(options) {
        if (!this.isCollapsed()) {
            var option = {
                enabled: true
            };
            var name = this.getFieldValue('VAR');
            option.text = Blockly.Msg.VARIABLES_SET_CREATE_GET.replace('%1', name);
            var xmlField = goog.dom.createDom('field', null, name);
            xmlField.setAttribute('name', 'VAR');
            var xmlBlock = goog.dom.createDom('block', null, xmlField);
            xmlBlock.setAttribute('type', 'variables_get');
            option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
            options.push(option);
        }
    }
};

Blockly.Blocks['controls_repeat_x'] = {
    /**
     * Block for repeat n times (external number).
     * @this Blockly.Block
     */
    init: function() {
        this.jsonInit({
            "message0": Blockly.Msg.CONTROLS_REPEAT_TITLE,
            "args0": [{
                "type": "input_value",
                "name": "TIMES",
                "check": "Number"
            }],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 190,
            "tooltip": Blockly.Msg.CONTROLS_REPEAT_TOOLTIP,
            "helpUrl": Blockly.Msg.CONTROLS_REPEAT_HELPURL
        });
        this.appendStatementInput('DO')
            .appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
    }
};

Blockly.Blocks['cont_continue'] = {
    init: function() {
        this.setColour(190);
        this.setHelpUrl('https://www.arduino.cc/en/Reference/Continue');
        this.appendDummyInput()
            .appendField(Blockly.Msg.continue);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('');
    }
};

Blockly.Blocks['cont_returnnull'] = {
    init: function() {
        this.setColour(190);
        this.setHelpUrl('https://www.arduino.cc/en/Reference/Return');
        this.appendDummyInput()
            .appendField(Blockly.Msg.returnnull);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('');
    }
};