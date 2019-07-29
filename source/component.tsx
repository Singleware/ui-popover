/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as JSX from '@singleware/jsx';
import * as Control from '@singleware/ui-control';

import * as Types from './types';

import { Properties } from './properties';
import { Element } from './element';

/**
 * Popover component class.
 */
@Class.Describe()
export class Component<T extends Properties = Properties> extends Control.Component<T> {
  /**
   * Element instance.
   */
  @Class.Private()
  private skeleton = (
    <swe-popover
      class={this.properties.class}
      slot={this.properties.slot}
      name={this.properties.name}
      value={this.properties.value}
      defaultValue={this.properties.defaultValue}
      required={this.properties.required}
      readOnly={this.properties.readOnly}
      disabled={this.properties.disabled}
      dismiss={this.properties.dismiss}
      open={this.properties.open}
      placement={this.properties.placement}
      alignment={this.properties.alignment}
    >
      {this.children}
    </swe-popover>
  ) as Element;

  /**
   * Initializes the component.
   */
  @Class.Private()
  private initialize(): void {
    if (this.properties.onShow) {
      this.skeleton.addEventListener('show', this.properties.onShow.bind(this));
    }
    if (this.properties.onHide) {
      this.skeleton.addEventListener('hide', this.properties.onHide.bind(this));
    }
  }

  /**
   * Default constructor.
   * @param properties Initial properties.
   * @param children Initial children.
   */
  constructor(properties?: T, children?: any[]) {
    super(properties, children);
    this.initialize();
  }

  /**
   * Gets the element.
   */
  @Class.Public()
  public get element(): Element {
    return this.skeleton;
  }

  /**
   * Gets the empty state of the element.
   */
  @Class.Public()
  public get empty(): boolean {
    return this.skeleton.empty;
  }

  /**
   * Gets the element name.
   */
  @Class.Public()
  public get name(): string | undefined {
    return this.skeleton.name;
  }

  /**
   * Sets the element name.
   */
  public set name(name: string | undefined) {
    this.skeleton.name = name;
  }

  /**
   * Gets the element value.
   */
  @Class.Public()
  public get value(): string | undefined {
    return this.skeleton.value;
  }

  /**
   * Sets the element value.
   */
  public set value(value: string | undefined) {
    this.skeleton.value = value;
  }

  /**
   * Gets the default value of the element.
   */
  @Class.Public()
  public get defaultValue(): string | undefined {
    return this.skeleton.defaultValue;
  }

  /**
   * Sets the default value of the element.
   */
  public set defaultValue(value: string | undefined) {
    this.skeleton.defaultValue = value;
  }

  /**
   * Gets the required state of the element.
   */
  @Class.Public()
  public get required(): boolean {
    return this.skeleton.required;
  }

  /**
   * Sets the required state of the element.
   */
  public set required(state: boolean) {
    this.skeleton.required = state;
  }

  /**
   * Gets the read-only state of the element.
   */
  @Class.Public()
  public get readOnly(): boolean {
    return this.skeleton.readOnly;
  }

  /**
   * Sets the read-only state of the element.
   */
  public set readOnly(state: boolean) {
    this.skeleton.readOnly = state;
  }

  /**
   * Gets the disabled state of the element.
   */
  @Class.Public()
  public get disabled(): boolean {
    return this.skeleton.disabled;
  }

  /**
   * Sets the disabled state of the element.
   */
  public set disabled(state: boolean) {
    this.skeleton.disabled = state;
  }

  /**
   * Gets the open state.
   */
  @Class.Public()
  public get open(): boolean {
    return this.skeleton.open;
  }

  /**
   * Sets the open state.
   */
  public set open(state: boolean) {
    this.skeleton.open = state;
  }
  /**
   * Gets the dismiss state.
   */
  @Class.Public()
  public get dismiss(): boolean {
    return this.skeleton.dismiss;
  }

  /**
   * Sets the dismiss state.
   */
  public set dismiss(state: boolean) {
    this.skeleton.dismiss = state;
  }

  /**
   * Gets the content element placement.
   */
  @Class.Public()
  public get placement(): Types.Placements {
    return this.skeleton.placement;
  }

  /**
   * Sets the content element placement.
   */
  public set placement(value: Types.Placements) {
    this.skeleton.placement = value;
  }

  /**
   * Gets the content element alignment.
   */
  @Class.Public()
  public get alignment(): Types.Alignments {
    return this.skeleton.alignment;
  }

  /**
   * Sets the content element alignment.
   */
  public set alignment(value: Types.Alignments) {
    this.skeleton.alignment = value;
  }

  /**
   * Move the focus to this element.
   */
  @Class.Public()
  public focus(): void {
    this.skeleton.focus();
  }

  /**
   * Reset the element value to its initial value.
   */
  @Class.Public()
  public reset(): void {
    this.skeleton.reset();
  }

  /**
   * Shows the content.
   * @returns Returns true when the content was shown, false otherwise.
   */
  @Class.Public()
  public show(): boolean {
    return this.skeleton.show();
  }

  /**
   * Hides the content.
   * @returns Returns true when the content was hidden, false otherwise.
   */
  @Class.Public()
  public hide(): boolean {
    return this.skeleton.hide();
  }

  /**
   * Toggles the content.
   */
  @Class.Public()
  public toggle(): void {
    this.skeleton.toggle();
  }

  /**
   * Checks the element validity.
   * @returns Returns true when the element is valid, false otherwise.
   */
  @Class.Public()
  public checkValidity(): boolean {
    return this.skeleton.checkValidity();
  }

  /**
   * Set the element custom validity error message.
   * @param error Custom error message.
   */
  @Class.Public()
  public setCustomValidity(error?: string): void {
    this.skeleton.setCustomValidity(error);
  }
}
