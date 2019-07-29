/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as OSS from '@singleware/oss';

/**
 * Popover local stylesheet class.
 */
@Class.Describe()
export class Local extends OSS.Stylesheet {
  /**
   * Popover styles.
   */
  @Class.Private()
  private element = this.select(':host>.popover');

  /**
   * Slotted input styles.
   */
  @Class.Private()
  private slottedInput = this.select(':host>.popover>.input::slotted(*)');

  /**
   * Slotted panel styles.
   */
  @Class.Private()
  private slottedPanel = this.select(':host>.popover>.panel::slotted(*)');

  /**
   * Panel styles.
   */
  @Class.Private()
  private panel = this.select(':host>.popover>.panel');

  /**
   * Hidden panel styles.
   */
  @Class.Private()
  private hiddenPanel = this.select(':host(:not([opened]))>.popover>.panel');

  /**
   * Top panel styles.
   */
  @Class.Private()
  private topPanel = this.select(':host([placement="top"])>.popover>.panel');

  /**
   * Right panel styles.
   */
  @Class.Private()
  private rightPanel = this.select(':host([placement="right"])>.popover>.panel');

  /**
   * Bottom panel styles.
   */
  @Class.Private()
  private bottomPanel = this.select(':host([placement="bottom"])>.popover>.panel', ':host(:not([placement]))>.popover>.panel');

  /**
   * Left panel styles.
   */
  @Class.Private()
  private leftPanel = this.select(':host([placement="left"])>.popover>.panel');

  /**
   * Start left and right panel styles.
   */
  @Class.Private()
  private startLeftRightPanel = this.select(
    ':host([placement="left"][alignment="start"])>.popover>.panel',
    ':host([placement="right"][alignment="start"])>.popover>.panel',
    ':host([placement="left"]:not(alignment))>.popover>.panel',
    ':host([placement="right"]:not(alignment))>.popover>.panel'
  );

  /**
   * Middle left and right panel styles.
   */
  @Class.Private()
  private middleLeftRightPanel = this.select(
    ':host([alignment="middle"][placement="left"])>.popover>.panel',
    ':host([alignment="middle"][placement="right"])>.popover>.panel'
  );

  /**
   * End left and right panel styles.
   */
  @Class.Private()
  private endLeftRightPanel = this.select(
    ':host([alignment="end"][placement="left"])>.popover>.panel',
    ':host([alignment="end"][placement="right"])>.popover>.panel'
  );

  /**
   * Start top and bottom panel styles.
   */
  @Class.Private()
  private startTopBottomPanel = this.select(
    ':host([placement="top"][alignment="start"])>.popover>.panel',
    ':host([placement="bottom"][alignment="start"])>.popover>.panel',
    ':host([placement="top"]:not(alignment))>.popover>.panel',
    ':host([placement="bottom"]:not(alignment))>.popover>.panel',
    ':host(:not([placement]):not(alignment))>.popover>.panel'
  );

  /**
   * Middle top and bottom panel styles.
   */
  @Class.Private()
  private middleTopBottomPanel = this.select(
    ':host([alignment="middle"][placement="top"])>.popover>.panel',
    ':host([alignment="middle"][placement="bottom"])>.popover>.panel',
    ':host([alignment="middle"]:not([placement]))>.popover>.panel'
  );

  /**
   * End top and bottom panel styles.
   */
  @Class.Private()
  private endTopBottomPanel = this.select(
    ':host([alignment="end"][placement="top"])>.popover>.panel',
    ':host([alignment="end"][placement="bottom"])>.popover>.panel',
    ':host([alignment="end"]:not([placement]))>.popover>.panel'
  );

  /**
   * Default constructor.
   */
  constructor() {
    super();
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
}
