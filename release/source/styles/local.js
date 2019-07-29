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
 * Popover local stylesheet class.
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
        this.element = this.select(':host>.popover');
        /**
         * Slotted input styles.
         */
        this.slottedInput = this.select(':host>.popover>.input::slotted(*)');
        /**
         * Slotted panel styles.
         */
        this.slottedPanel = this.select(':host>.popover>.panel::slotted(*)');
        /**
         * Panel styles.
         */
        this.panel = this.select(':host>.popover>.panel');
        /**
         * Hidden panel styles.
         */
        this.hiddenPanel = this.select(':host(:not([opened]))>.popover>.panel');
        /**
         * Top panel styles.
         */
        this.topPanel = this.select(':host([placement="top"])>.popover>.panel');
        /**
         * Right panel styles.
         */
        this.rightPanel = this.select(':host([placement="right"])>.popover>.panel');
        /**
         * Bottom panel styles.
         */
        this.bottomPanel = this.select(':host([placement="bottom"])>.popover>.panel', ':host(:not([placement]))>.popover>.panel');
        /**
         * Left panel styles.
         */
        this.leftPanel = this.select(':host([placement="left"])>.popover>.panel');
        /**
         * Start left and right panel styles.
         */
        this.startLeftRightPanel = this.select(':host([placement="left"][alignment="start"])>.popover>.panel', ':host([placement="right"][alignment="start"])>.popover>.panel', ':host([placement="left"]:not(alignment))>.popover>.panel', ':host([placement="right"]:not(alignment))>.popover>.panel');
        /**
         * Middle left and right panel styles.
         */
        this.middleLeftRightPanel = this.select(':host([alignment="middle"][placement="left"])>.popover>.panel', ':host([alignment="middle"][placement="right"])>.popover>.panel');
        /**
         * End left and right panel styles.
         */
        this.endLeftRightPanel = this.select(':host([alignment="end"][placement="left"])>.popover>.panel', ':host([alignment="end"][placement="right"])>.popover>.panel');
        /**
         * Start top and bottom panel styles.
         */
        this.startTopBottomPanel = this.select(':host([placement="top"][alignment="start"])>.popover>.panel', ':host([placement="bottom"][alignment="start"])>.popover>.panel', ':host([placement="top"]:not(alignment))>.popover>.panel', ':host([placement="bottom"]:not(alignment))>.popover>.panel', ':host(:not([placement]):not(alignment))>.popover>.panel');
        /**
         * Middle top and bottom panel styles.
         */
        this.middleTopBottomPanel = this.select(':host([alignment="middle"][placement="top"])>.popover>.panel', ':host([alignment="middle"][placement="bottom"])>.popover>.panel', ':host([alignment="middle"]:not([placement]))>.popover>.panel');
        /**
         * End top and bottom panel styles.
         */
        this.endTopBottomPanel = this.select(':host([alignment="end"][placement="top"])>.popover>.panel', ':host([alignment="end"][placement="bottom"])>.popover>.panel', ':host([alignment="end"]:not([placement]))>.popover>.panel');
        this.element.display = 'flex';
        this.element.position = 'relative';
        this.element.flexDirection = 'column';
        this.element.position = 'relative';
        this.element.height = 'inherit';
        this.element.width = 'inherit';
        this.slottedInput.textAlign = 'left';
        this.slottedInput.width = '100%';
        this.slottedPanel.border = 'var(--swe-popover-border-size, 0.0625rem) solid var(--swe-popover-border-color, hsl(0, 0%, 90%))';
        this.panel.display = 'block';
        this.panel.position = 'absolute';
        this.panel.zIndex = 1;
        this.hiddenPanel.display = 'none';
        this.hiddenPanel.zIndex = 0;
        this.topPanel.bottom = '100%';
        this.rightPanel.left = '100%';
        this.bottomPanel.top = '100%';
        this.leftPanel.right = '100%';
        this.startLeftRightPanel.top = '0';
        this.middleLeftRightPanel.transform = 'translateY(-50%)';
        this.middleLeftRightPanel.top = '50%';
        this.endLeftRightPanel.transform = 'translateY(-100%)';
        this.endLeftRightPanel.top = '100%';
        this.startTopBottomPanel.left = '0';
        this.middleTopBottomPanel.transform = 'translateX(-50%)';
        this.middleTopBottomPanel.left = '50%';
        this.endTopBottomPanel.transform = 'translateX(-100%)';
        this.endTopBottomPanel.left = '100%';
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
], Local.prototype, "slottedPanel", void 0);
__decorate([
    Class.Private()
], Local.prototype, "panel", void 0);
__decorate([
    Class.Private()
], Local.prototype, "hiddenPanel", void 0);
__decorate([
    Class.Private()
], Local.prototype, "topPanel", void 0);
__decorate([
    Class.Private()
], Local.prototype, "rightPanel", void 0);
__decorate([
    Class.Private()
], Local.prototype, "bottomPanel", void 0);
__decorate([
    Class.Private()
], Local.prototype, "leftPanel", void 0);
__decorate([
    Class.Private()
], Local.prototype, "startLeftRightPanel", void 0);
__decorate([
    Class.Private()
], Local.prototype, "middleLeftRightPanel", void 0);
__decorate([
    Class.Private()
], Local.prototype, "endLeftRightPanel", void 0);
__decorate([
    Class.Private()
], Local.prototype, "startTopBottomPanel", void 0);
__decorate([
    Class.Private()
], Local.prototype, "middleTopBottomPanel", void 0);
__decorate([
    Class.Private()
], Local.prototype, "endTopBottomPanel", void 0);
Local = __decorate([
    Class.Describe()
], Local);
exports.Local = Local;
