/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as OSS from '@singleware/oss';

/**
 * Local popover, stylesheet class.
 */
@Class.Describe()
export class Local extends OSS.Stylesheet {
  /**
   * Popover styles.
   */
  @Class.Private()
  private element = this.select(':host>label');

  /**
   * Slotted input styles.
   */
  @Class.Private()
  private slottedInput = this.select(':host slot[name="input"]::slotted(*)');

  /**
   * Slotted content styles.
   */
  @Class.Private()
  private slottedContent = this.select(':host slot[name="content"]::slotted(*)');

  /**
   * Content styles.
   */
  @Class.Private()
  private content = this.select(':host slot[name="content"]');

  /**
   * Hidden content styles.
   */
  @Class.Private()
  private hiddenContent = this.select(':host(:not([open])) slot[name="content"]');

  /**
   * Top content styles.
   */
  @Class.Private()
  private topContent = this.select(':host([placement="top"]) slot[name="content"]');

  /**
   * Right content styles.
   */
  @Class.Private()
  private rightContent = this.select(':host([placement="right"]) slot[name="content"]');

  /**
   * Bottom content styles.
   */
  @Class.Private()
  private bottomContent = this.select(':host([placement="bottom"]) slot[name="content"]', ':host(:not([placement])) slot[name="content"]');

  /**
   * Left content styles.
   */
  @Class.Private()
  private leftContent = this.select(':host([placement="left"]) slot[name="content"]');

  /**
   * Start left and right content styles.
   */
  @Class.Private()
  private startLeftRightContent = this.select(
    ':host([placement="left"][alignment="start"]) slot[name="content"]',
    ':host([placement="right"][alignment="start"]) slot[name="content"]',
    ':host([placement="left"]:not(alignment)) slot[name="content"]',
    ':host([placement="right"]:not(alignment)) slot[name="content"]'
  );

  /**
   * Middle left and right content styles.
   */
  @Class.Private()
  private middleLeftRightContent = this.select(
    ':host([alignment="middle"][placement="left"]) slot[name="content"]',
    ':host([alignment="middle"][placement="right"]) slot[name="content"]'
  );

  /**
   * End left and right content styles.
   */
  @Class.Private()
  private endLeftRightContent = this.select(
    ':host([alignment="end"][placement="left"]) slot[name="content"]',
    ':host([alignment="end"][placement="right"]) slot[name="content"]'
  );

  /**
   * Start top and bottom content styles.
   */
  @Class.Private()
  private startTopBottomContent = this.select(
    ':host([placement="top"][alignment="start"]) slot[name="content"]',
    ':host([placement="bottom"][alignment="start"]) slot[name="content"]',
    ':host([placement="top"]:not(alignment)) slot[name="content"]',
    ':host([placement="bottom"]:not(alignment)) slot[name="content"]',
    ':host(:not([placement]):not(alignment)) slot[name="content"]'
  );

  /**
   * Middle top and bottom content styles.
   */
  @Class.Private()
  private middleTopBottomContent = this.select(
    ':host([alignment="middle"][placement="top"]) slot[name="content"]',
    ':host([alignment="middle"][placement="bottom"]) slot[name="content"]',
    ':host([alignment="middle"]:not([placement])) slot[name="content"]'
  );

  /**
   * End top and bottom content styles.
   */
  @Class.Private()
  private endTopBottomContent = this.select(
    ':host([alignment="end"][placement="top"]) slot[name="content"]',
    ':host([alignment="end"][placement="bottom"]) slot[name="content"]',
    ':host([alignment="end"]:not([placement])) slot[name="content"]'
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
}
