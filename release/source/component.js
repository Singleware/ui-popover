"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const JSX = require("@singleware/jsx");
const Control = require("@singleware/ui-control");
/**
 * Popover component class.
 */
let Component = class Component extends Control.Component {
    /**
     * Default constructor.
     * @param properties Initial properties.
     * @param children Initial children.
     */
    constructor(properties, children) {
        super(properties, children);
        /**
         * Element instance.
         */
        this.skeleton = (JSX.create("swe-popover", { class: this.properties.class, slot: this.properties.slot, name: this.properties.name, value: this.properties.value, defaultValue: this.properties.defaultValue, required: this.properties.required, readOnly: this.properties.readOnly, disabled: this.properties.disabled, dismiss: this.properties.dismiss, open: this.properties.open, placement: this.properties.placement, alignment: this.properties.alignment }, this.children));
        this.initialize();
    }
    /**
     * Initializes the component.
     */
    initialize() {
        if (this.properties.onShow) {
            this.skeleton.addEventListener('show', this.properties.onShow.bind(this));
        }
        if (this.properties.onHide) {
            this.skeleton.addEventListener('hide', this.properties.onHide.bind(this));
        }
    }
    /**
     * Gets the element.
     */
    get element() {
        return this.skeleton;
    }
    /**
     * Gets the empty state of the element.
     */
    get empty() {
        return this.skeleton.empty;
    }
    /**
     * Gets the element name.
     */
    get name() {
        return this.skeleton.name;
    }
    /**
     * Sets the element name.
     */
    set name(name) {
        this.skeleton.name = name;
    }
    /**
     * Gets the element value.
     */
    get value() {
        return this.skeleton.value;
    }
    /**
     * Sets the element value.
     */
    set value(value) {
        this.skeleton.value = value;
    }
    /**
     * Gets the default value of the element.
     */
    get defaultValue() {
        return this.skeleton.defaultValue;
    }
    /**
     * Sets the default value of the element.
     */
    set defaultValue(value) {
        this.skeleton.defaultValue = value;
    }
    /**
     * Gets the required state of the element.
     */
    get required() {
        return this.skeleton.required;
    }
    /**
     * Sets the required state of the element.
     */
    set required(state) {
        this.skeleton.required = state;
    }
    /**
     * Gets the read-only state of the element.
     */
    get readOnly() {
        return this.skeleton.readOnly;
    }
    /**
     * Sets the read-only state of the element.
     */
    set readOnly(state) {
        this.skeleton.readOnly = state;
    }
    /**
     * Gets the disabled state of the element.
     */
    get disabled() {
        return this.skeleton.disabled;
    }
    /**
     * Sets the disabled state of the element.
     */
    set disabled(state) {
        this.skeleton.disabled = state;
    }
    /**
     * Gets the open state.
     */
    get open() {
        return this.skeleton.open;
    }
    /**
     * Sets the open state.
     */
    set open(state) {
        this.skeleton.open = state;
    }
    /**
     * Gets the dismiss state.
     */
    get dismiss() {
        return this.skeleton.dismiss;
    }
    /**
     * Sets the dismiss state.
     */
    set dismiss(state) {
        this.skeleton.dismiss = state;
    }
    /**
     * Gets the content element placement.
     */
    get placement() {
        return this.skeleton.placement;
    }
    /**
     * Sets the content element placement.
     */
    set placement(value) {
        this.skeleton.placement = value;
    }
    /**
     * Gets the content element alignment.
     */
    get alignment() {
        return this.skeleton.alignment;
    }
    /**
     * Sets the content element alignment.
     */
    set alignment(value) {
        this.skeleton.alignment = value;
    }
    /**
     * Move the focus to this element.
     */
    focus() {
        this.skeleton.focus();
    }
    /**
     * Reset the element value to its initial value.
     */
    reset() {
        this.skeleton.reset();
    }
    /**
     * Shows the content.
     * @returns Returns true when the content was shown, false otherwise.
     */
    show() {
        return this.skeleton.show();
    }
    /**
     * Hides the content.
     * @returns Returns true when the content was hidden, false otherwise.
     */
    hide() {
        return this.skeleton.hide();
    }
    /**
     * Toggles the content.
     */
    toggle() {
        this.skeleton.toggle();
    }
    /**
     * Checks the element validity.
     * @returns Returns true when the element is valid, false otherwise.
     */
    checkValidity() {
        return this.skeleton.checkValidity();
    }
    /**
     * Set the element custom validity error message.
     * @param error Custom error message.
     */
    setCustomValidity(error) {
        this.skeleton.setCustomValidity(error);
    }
};
__decorate([
    Class.Private()
], Component.prototype, "skeleton", void 0);
__decorate([
    Class.Private()
], Component.prototype, "initialize", null);
__decorate([
    Class.Public()
], Component.prototype, "element", null);
__decorate([
    Class.Public()
], Component.prototype, "empty", null);
__decorate([
    Class.Public()
], Component.prototype, "name", null);
__decorate([
    Class.Public()
], Component.prototype, "value", null);
__decorate([
    Class.Public()
], Component.prototype, "defaultValue", null);
__decorate([
    Class.Public()
], Component.prototype, "required", null);
__decorate([
    Class.Public()
], Component.prototype, "readOnly", null);
__decorate([
    Class.Public()
], Component.prototype, "disabled", null);
__decorate([
    Class.Public()
], Component.prototype, "open", null);
__decorate([
    Class.Public()
], Component.prototype, "dismiss", null);
__decorate([
    Class.Public()
], Component.prototype, "placement", null);
__decorate([
    Class.Public()
], Component.prototype, "alignment", null);
__decorate([
    Class.Public()
], Component.prototype, "focus", null);
__decorate([
    Class.Public()
], Component.prototype, "reset", null);
__decorate([
    Class.Public()
], Component.prototype, "show", null);
__decorate([
    Class.Public()
], Component.prototype, "hide", null);
__decorate([
    Class.Public()
], Component.prototype, "toggle", null);
__decorate([
    Class.Public()
], Component.prototype, "checkValidity", null);
__decorate([
    Class.Public()
], Component.prototype, "setCustomValidity", null);
Component = __decorate([
    Class.Describe()
], Component);
exports.Component = Component;
