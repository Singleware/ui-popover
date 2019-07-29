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
        this.inputSlot = JSX.create("slot", { name: "input", onClick: this.toggleHandler.bind(this) });
        /**
         * Content slot element.
         */
        this.contentSlot = JSX.create("slot", { name: "content", onClick: this.preventHandler.bind(this) });
        /**
         * Popover layout element.
         */
        this.popoverLayout = (JSX.create("label", null,
            this.inputSlot,
            this.contentSlot));
        /**
         * Popover styles element.
         */
        this.popoverStyles = JSX.create("style", { type: "text/css" }, this.styles.toString());
        Element_1.globalInitialization();
        JSX.append(this.attachShadow({ mode: 'closed' }), this.popoverStyles, this.popoverLayout);
    }
    /**
     * Shows the content element.
     */
    showContent() {
        Element_1.globalInstances.add(Class.resolve(this));
        this.updatePropertyState('open', true);
    }
    /**
     * Notifies the action and try to show the content element.
     * @returns Returns true when the content element was shown, false otherwise.
     */
    notifyAndShowContent() {
        if (this.dispatchEvent(new Event('show', { bubbles: true, cancelable: true }))) {
            return this.showContent(), true;
        }
        return false;
    }
    /**
     * Hides the content element.
     */
    hideContent() {
        Element_1.globalInstances.delete(Class.resolve(this));
        this.updatePropertyState('open', false);
    }
    /**
     * Notifies the action and try to hide the content element.
     * @returns Returns true when the content element was hidden, false otherwise.
     */
    notifyAndHideContent() {
        if (this.dispatchEvent(new Event('hide', { bubbles: true, cancelable: true }))) {
            return this.hideContent(), true;
        }
        return false;
    }
    /**
     * Toggles the content element, event handler.
     */
    toggleHandler() {
        Element_1.globalCurrent = Class.resolve(this);
        if (!this.open && !this.readOnly && !this.disabled) {
            this.notifyAndShowContent();
        }
        else {
            this.notifyAndHideContent();
        }
    }
    /**
     * Prevent content closing, event handler.
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
                    element.notifyAndHideContent();
                }
            }
            this.globalCurrent = void 0;
        }
    }
    /**
     * Initializes all the global settings.
     */
    static globalInitialization() {
        if (!this.globalInstances) {
            this.globalInstances = new Set();
            globalThis.addEventListener('click', this.globalPreventHandler.bind(this));
        }
        if (!globalThis.document.head.contains(Element_1.globalStyles)) {
            JSX.append(globalThis.document.head, Element_1.globalStyles);
        }
    }
    /**
     * Determines whether the slotted input element is empty or not.
     */
    get empty() {
        return this.getRequiredChildProperty(this.inputSlot, 'empty');
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
        this.setRequiredChildProperty(this.inputSlot, 'readonly', state);
        this.updatePropertyState('readonly', state);
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
        this.setRequiredChildProperty(this.inputSlot, 'disabled', state);
        this.updatePropertyState('disabled', state);
    }
    /**
     * Gets the element open state.
     */
    get open() {
        return this.hasAttribute('open');
    }
    /**
     * Sets the element open state.
     */
    set open(state) {
        this.updatePropertyState('open', state);
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
     * Gets the content element placement.
     */
    get placement() {
        return this.getAttribute('placement') || 'bottom';
    }
    /**
     * Sets the content element placement.
     */
    set placement(value) {
        this.updatePropertyState('placement', value);
    }
    /**
     * Gets the content element alignment.
     */
    get alignment() {
        return this.getAttribute('alignment') || 'middle';
    }
    /**
     * Sets the content element alignment.
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
     * Shows the content.
     * @returns Returns true when the content was shown, false otherwise.
     */
    show() {
        if (!this.open && !this.readOnly && !this.disabled) {
            return this.showContent(), true;
        }
        return false;
    }
    /**
     * Hides the content.
     * @returns Returns true when the content was hidden, false otherwise.
     */
    hide() {
        if (this.open) {
            return this.hideContent(), true;
        }
        return false;
    }
    /**
     * Toggles the content.
     */
    toggle() {
        if (!this.open && !this.readOnly && !this.disabled) {
            this.showContent();
        }
        else {
            this.hideContent();
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
 * Global element styles.
 */
Element.globalStyles = JSX.create("style", { type: "text/css" }, new Styles.Global().toString());
__decorate([
    Class.Private()
], Element.prototype, "styles", void 0);
__decorate([
    Class.Private()
], Element.prototype, "inputSlot", void 0);
__decorate([
    Class.Private()
], Element.prototype, "contentSlot", void 0);
__decorate([
    Class.Private()
], Element.prototype, "popoverLayout", void 0);
__decorate([
    Class.Private()
], Element.prototype, "popoverStyles", void 0);
__decorate([
    Class.Private()
], Element.prototype, "showContent", null);
__decorate([
    Class.Private()
], Element.prototype, "notifyAndShowContent", null);
__decorate([
    Class.Private()
], Element.prototype, "hideContent", null);
__decorate([
    Class.Private()
], Element.prototype, "notifyAndHideContent", null);
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
], Element.prototype, "open", null);
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
], Element.prototype, "show", null);
__decorate([
    Class.Public()
], Element.prototype, "hide", null);
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
], Element, "globalStyles", void 0);
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
