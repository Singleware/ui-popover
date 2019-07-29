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
const OSS = require("@singleware/oss");
/**
 * Local popover, stylesheet class.
 */
let Local = class Local extends OSS.Stylesheet {
    /**
     * Default constructor.
     */
    constructor() {
        super();
        /**
         * Popover styles.
         */
        this.element = this.select(':host>label');
        /**
         * Slotted input styles.
         */
        this.slottedInput = this.select(':host slot[name="input"]::slotted(*)');
        /**
         * Slotted content styles.
         */
        this.slottedContent = this.select(':host slot[name="content"]::slotted(*)');
        /**
         * Content styles.
         */
        this.content = this.select(':host slot[name="content"]');
        /**
         * Hidden content styles.
         */
        this.hiddenContent = this.select(':host(:not([open])) slot[name="content"]');
        /**
         * Top content styles.
         */
        this.topContent = this.select(':host([placement="top"]) slot[name="content"]');
        /**
         * Right content styles.
         */
        this.rightContent = this.select(':host([placement="right"]) slot[name="content"]');
        /**
         * Bottom content styles.
         */
        this.bottomContent = this.select(':host([placement="bottom"]) slot[name="content"]', ':host(:not([placement])) slot[name="content"]');
        /**
         * Left content styles.
         */
        this.leftContent = this.select(':host([placement="left"]) slot[name="content"]');
        /**
         * Start left and right content styles.
         */
        this.startLeftRightContent = this.select(':host([placement="left"][alignment="start"]) slot[name="content"]', ':host([placement="right"][alignment="start"]) slot[name="content"]', ':host([placement="left"]:not(alignment)) slot[name="content"]', ':host([placement="right"]:not(alignment)) slot[name="content"]');
        /**
         * Middle left and right content styles.
         */
        this.middleLeftRightContent = this.select(':host([alignment="middle"][placement="left"]) slot[name="content"]', ':host([alignment="middle"][placement="right"]) slot[name="content"]');
        /**
         * End left and right content styles.
         */
        this.endLeftRightContent = this.select(':host([alignment="end"][placement="left"]) slot[name="content"]', ':host([alignment="end"][placement="right"]) slot[name="content"]');
        /**
         * Start top and bottom content styles.
         */
        this.startTopBottomContent = this.select(':host([placement="top"][alignment="start"]) slot[name="content"]', ':host([placement="bottom"][alignment="start"]) slot[name="content"]', ':host([placement="top"]:not(alignment)) slot[name="content"]', ':host([placement="bottom"]:not(alignment)) slot[name="content"]', ':host(:not([placement]):not(alignment)) slot[name="content"]');
        /**
         * Middle top and bottom content styles.
         */
        this.middleTopBottomContent = this.select(':host([alignment="middle"][placement="top"]) slot[name="content"]', ':host([alignment="middle"][placement="bottom"]) slot[name="content"]', ':host([alignment="middle"]:not([placement])) slot[name="content"]');
        /**
         * End top and bottom content styles.
         */
        this.endTopBottomContent = this.select(':host([alignment="end"][placement="top"]) slot[name="content"]', ':host([alignment="end"][placement="bottom"]) slot[name="content"]', ':host([alignment="end"]:not([placement])) slot[name="content"]');
        this.element.display = 'flex';
        this.element.position = 'relative';
        this.element.flexDirection = 'column';
        this.element.position = 'relative';
        this.slottedInput.textAlign = 'left';
        this.slottedInput.width = '100%';
        this.slottedContent.borderRadius = 'var(--swe-popover-content-border-radius, var(--swe-border-radius, .25rem))';
        this.slottedContent.borderWidth = 'var(--swe-popover-content-border-size, var(--swe-border-size, .0625rem))';
        this.slottedContent.borderColor = 'var(--swe-popover-content-border-color, var(--swe-border-color, hsl(0, 0%, 80%)))';
        this.slottedContent.borderStyle = 'solid';
        this.content.display = 'block';
        this.content.position = 'absolute';
        this.content.zIndex = 1;
        this.hiddenContent.display = 'none';
        this.hiddenContent.zIndex = 0;
        this.topContent.bottom = '100%';
        this.rightContent.left = '100%';
        this.bottomContent.top = '100%';
        this.leftContent.right = '100%';
        this.startLeftRightContent.top = '0';
        this.middleLeftRightContent.transform = 'translateY(-50%)';
        this.middleLeftRightContent.top = '50%';
        this.endLeftRightContent.transform = 'translateY(-100%)';
        this.endLeftRightContent.top = '100%';
        this.startTopBottomContent.left = '0';
        this.middleTopBottomContent.transform = 'translateX(-50%)';
        this.middleTopBottomContent.left = '50%';
        this.endTopBottomContent.transform = 'translateX(-100%)';
        this.endTopBottomContent.left = '100%';
    }
};
__decorate([
    Class.Private()
], Local.prototype, "element", void 0);
__decorate([
    Class.Private()
], Local.prototype, "slottedInput", void 0);
__decorate([
    Class.Private()
], Local.prototype, "slottedContent", void 0);
__decorate([
    Class.Private()
], Local.prototype, "content", void 0);
__decorate([
    Class.Private()
], Local.prototype, "hiddenContent", void 0);
__decorate([
    Class.Private()
], Local.prototype, "topContent", void 0);
__decorate([
    Class.Private()
], Local.prototype, "rightContent", void 0);
__decorate([
    Class.Private()
], Local.prototype, "bottomContent", void 0);
__decorate([
    Class.Private()
], Local.prototype, "leftContent", void 0);
__decorate([
    Class.Private()
], Local.prototype, "startLeftRightContent", void 0);
__decorate([
    Class.Private()
], Local.prototype, "middleLeftRightContent", void 0);
__decorate([
    Class.Private()
], Local.prototype, "endLeftRightContent", void 0);
__decorate([
    Class.Private()
], Local.prototype, "startTopBottomContent", void 0);
__decorate([
    Class.Private()
], Local.prototype, "middleTopBottomContent", void 0);
__decorate([
    Class.Private()
], Local.prototype, "endTopBottomContent", void 0);
Local = __decorate([
    Class.Describe()
], Local);
exports.Local = Local;
