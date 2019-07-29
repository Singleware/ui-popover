"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Element_1;
Object.defineProperty(exports, "__esModule", { value: true });
"use strict";
/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const JSX = require("@singleware/jsx");
const Control = require("@singleware/ui-control");
const Styles = require("./styles");
/**
 * Popover element.
 */
let Element = Element_1 = class Element extends Control.Element {
    /**
     * Default constructor.
     */
    constructor() {
        super();
        /**
         * Element styles.
         */
        this.styles = new Styles.Local();
        /**
         * Input slot element.
         */
        this.inputSlot = JSX.create("slot", { name: "input", class: "input", onClick: this.toggleHandler.bind(this) });
        /**
         * Panel slot element.
         */
        this.panelSlot = JSX.create("slot", { name: "panel", class: "panel", onClick: this.preventHandler.bind(this) });
        /**
         * Popover layout element.
         */
        this.popoverLayout = (JSX.create("label", { class: "popover" },
            this.inputSlot,
            this.panelSlot));
        /**
         * Popover styles element.
         */
        this.popoverStyles = JSX.create("style", { type: "text/css" }, this.styles.toString());
        Element_1.globalInitialization();
        JSX.append(this.attachShadow({ mode: 'closed' }), this.popoverStyles, this.popoverLayout);
    }
    /**
     * Opens the panel element.
     */
    openPanel() {
        Element_1.globalInstances.add(Class.resolve(this));
        this.updatePropertyState('opened', true);
    }
    /**
     * Closes the panel element.
     */
    closePanel() {
        Element_1.globalInstances.delete(Class.resolve(this));
        this.updatePropertyState('opened', false);
    }
    /**
     * Toggles the panel element, event handler.
     */
    toggleHandler() {
        Element_1.globalCurrent = Class.resolve(this);
        if (!this.opened && !this.readOnly && !this.disabled) {
            if (this.dispatchEvent(new Event('open', { bubbles: true, cancelable: true }))) {
                this.openPanel();
            }
        }
        else {
            if (this.dispatchEvent(new Event('close', { bubbles: true, cancelable: true }))) {
                this.closePanel();
            }
        }
    }
    /**
     * Prevent panel closing, event handler.
     */
    preventHandler() {
        if (!this.dismiss) {
            Element_1.globalCurrent = Class.resolve(this);
        }
    }
    /**
     * Global closing prevent, event handler.
     * @param event Event instance.
     */
    static globalPreventHandler(event) {
        if (!event.defaultPrevented) {
            for (const element of this.globalInstances) {
                if (this.globalCurrent !== element && element.dismiss) {
                    element.closePanel();
                }
            }
            this.globalCurrent = void 0;
        }
    }
    /**
     * Initializes all the global settings.
     */
    static globalInitialization() {
        if (!this.globalSetup) {
            globalThis.addEventListener('click', this.globalPreventHandler.bind(this));
            this.globalSetup = true;
        }
    }
    /**
     * Determines whether the slotted input element is empty or not.
     */
    get empty() {
        return this.getRequiredChildProperty(this.inputSlot, 'empty');
    }
    /**
     * Gets the element opened state.
     */
    get opened() {
        return this.hasAttribute('opened');
    }
    /**
     * Gets the slotted input element name.
     */
    get name() {
        return this.getRequiredChildProperty(this.inputSlot, 'name');
    }
    /**
     * Sets the slotted input element name.
     */
    set name(name) {
        this.setRequiredChildProperty(this.inputSlot, 'name', name);
    }
    /**
     * Gets the slotted input element value.
     */
    get value() {
        return this.getRequiredChildProperty(this.inputSlot, 'value');
    }
    /**
     * Sets the slotted input element value.
     */
    set value(value) {
        this.setRequiredChildProperty(this.inputSlot, 'value', value);
    }
    /**
     * Gets the default value from the slotted input element.
     */
    get defaultValue() {
        return this.getRequiredChildProperty(this.inputSlot, 'defaultValue');
    }
    /**
     * Sets the default value from the slotted input element.
     */
    set defaultValue(value) {
        this.setRequiredChildProperty(this.inputSlot, 'defaultValue', value);
    }
    /**
     * Gets the element required state.
     */
    get required() {
        return this.hasAttribute('required');
    }
    /**
     * Sets the element required state.
     */
    set required(state) {
        this.updatePropertyState('required', this.setRequiredChildProperty(this.inputSlot, 'required', state) && state);
    }
    /**
     * Gets the element read-only state.
     */
    get readOnly() {
        return this.hasAttribute('readonly');
    }
    /**
     * Sets the element read-only state.
     */
    set readOnly(state) {
        this.updatePropertyState('readonly', this.setRequiredChildProperty(this.inputSlot, 'readonly', state) && state);
    }
    /**
     * Gets the element disabled state.
     */
    get disabled() {
        return this.hasAttribute('disabled');
    }
    /**
     * Sets the element disabled state.
     */
    set disabled(state) {
        this.updatePropertyState('disabled', this.setRequiredChildProperty(this.inputSlot, 'disabled', state) && state);
    }
    /**
     * Gets the element dismiss state.
     */
    get dismiss() {
        return this.hasAttribute('dismiss');
    }
    /**
     * Sets the element dismiss state.
     */
    set dismiss(state) {
        if (state) {
            Element_1.globalInstances.add(Class.resolve(this));
            this.updatePropertyState('dismiss', true);
        }
        else {
            Element_1.globalInstances.delete(Class.resolve(this));
            this.updatePropertyState('dismiss', false);
        }
    }
    /**
     * Gets the panel element placement.
     */
    get placement() {
        return this.getAttribute('placement') || 'bottom';
    }
    /**
     * Sets the panel element placement.
     */
    set placement(value) {
        this.updatePropertyState('placement', value);
    }
    /**
     * Gets the panel element alignment.
     */
    get alignment() {
        return this.getAttribute('alignment') || 'middle';
    }
    /**
     * Sets the panel element alignment.
     */
    set alignment(value) {
        this.updatePropertyState('alignment', value);
    }
    /**
     * Moves the focus to the slotted input element.
     */
    focus() {
        this.callRequiredChildMethod(this.inputSlot, 'focus', []);
    }
    /**
     * Resets the value from the slotted input element to its initial value.
     */
    reset() {
        this.callRequiredChildMethod(this.inputSlot, 'reset', []);
    }
    /**
     * Opens the panel.
     * @returns Returns true when the panel was opened, false otherwise.
     */
    open() {
        if (!this.opened && !this.readOnly && !this.disabled) {
            return this.openPanel(), true;
        }
        return false;
    }
    /**
     * Closes the panel.
     * @returns Returns true when the panel was closed, false otherwise.
     */
    close() {
        if (this.opened) {
            return this.closePanel(), true;
        }
        return false;
    }
    /**
     * Toggles the panel.
     */
    toggle() {
        if (!this.opened && !this.readOnly && !this.disabled) {
            this.openPanel();
        }
        else {
            this.closePanel();
        }
    }
    /**
     * Checks the slotted input element validity.
     * @returns Returns true when the element is valid, false otherwise.
     */
    checkValidity() {
        return this.callRequiredChildMethod(this.inputSlot, 'checkValidity', []) !== false;
    }
    /**
     * Sets the custom validity for the slotted input element.
     * @param error Custom error message.
     */
    setCustomValidity(error) {
        this.callRequiredChildMethod(this.inputSlot, 'setCustomValidity', [error]);
    }
};
/**
 * Determines whether the global setup was initialized or not.
 */
Element.globalSetup = false;
/**
 * Global set of element instances.
 */
Element.globalInstances = new Set();
__decorate([
    Class.Private()
], Element.prototype, "styles", void 0);
__decorate([
    Class.Private()
], Element.prototype, "inputSlot", void 0);
__decorate([
    Class.Private()
], Element.prototype, "panelSlot", void 0);
__decorate([
    Class.Private()
], Element.prototype, "popoverLayout", void 0);
__decorate([
    Class.Private()
], Element.prototype, "popoverStyles", void 0);
__decorate([
    Class.Private()
], Element.prototype, "openPanel", null);
__decorate([
    Class.Private()
], Element.prototype, "closePanel", null);
__decorate([
    Class.Private()
], Element.prototype, "toggleHandler", null);
__decorate([
    Class.Private()
], Element.prototype, "preventHandler", null);
__decorate([
    Class.Public()
], Element.prototype, "empty", null);
__decorate([
    Class.Public()
], Element.prototype, "opened", null);
__decorate([
    Class.Public()
], Element.prototype, "name", null);
__decorate([
    Class.Public()
], Element.prototype, "value", null);
__decorate([
    Class.Public()
], Element.prototype, "defaultValue", null);
__decorate([
    Class.Public()
], Element.prototype, "required", null);
__decorate([
    Class.Public()
], Element.prototype, "readOnly", null);
__decorate([
    Class.Public()
], Element.prototype, "disabled", null);
__decorate([
    Class.Public()
], Element.prototype, "dismiss", null);
__decorate([
    Class.Public()
], Element.prototype, "placement", null);
__decorate([
    Class.Public()
], Element.prototype, "alignment", null);
__decorate([
    Class.Public()
], Element.prototype, "focus", null);
__decorate([
    Class.Public()
], Element.prototype, "reset", null);
__decorate([
    Class.Public()
], Element.prototype, "open", null);
__decorate([
    Class.Public()
], Element.prototype, "close", null);
__decorate([
    Class.Public()
], Element.prototype, "toggle", null);
__decorate([
    Class.Public()
], Element.prototype, "checkValidity", null);
__decorate([
    Class.Public()
], Element.prototype, "setCustomValidity", null);
__decorate([
    Class.Private()
], Element, "globalSetup", void 0);
__decorate([
    Class.Private()
], Element, "globalInstances", void 0);
__decorate([
    Class.Private()
], Element, "globalCurrent", void 0);
__decorate([
    Class.Private()
], Element, "globalPreventHandler", null);
__decorate([
    Class.Private()
], Element, "globalInitialization", null);
Element = Element_1 = __decorate([
    JSX.Describe('swe-popover'),
    Class.Describe()
], Element);
exports.Element = Element;
