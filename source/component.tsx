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
    if (this.properties.onOpen) {
      this.skeleton.addEventListener('open', this.properties.onOpen.bind(this));
    }
    if (this.properties.onClose) {
      this.skeleton.addEventListener('close', this.properties.onClose.bind(this));
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
   * Gets the opened state.
   */
  @Class.Public()
  public get opened(): boolean {
    return this.skeleton.opened;
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
   * Gets the dismiss state of the element.
   */
  @Class.Public()
  public get dismiss(): boolean {
    return this.skeleton.dismiss;
  }

  /**
   * Sets the dismiss state of the element.
   */
  public set dismiss(state: boolean) {
    this.skeleton.dismiss = state;
  }

  /**
   * Gets the panel element placement.
   */
  @Class.Public()
  public get placement(): Types.Placements {
    return this.skeleton.placement;
  }

  /**
   * Sets the panel element placement.
   */
  public set placement(value: Types.Placements) {
    this.skeleton.placement = value;
  }

  /**
   * Gets the panel element alignment.
   */
  @Class.Public()
  public get alignment(): Types.Alignments {
    return this.skeleton.alignment;
  }

  /**
   * Sets the panel element alignment.
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
   * Opens the panel.
   * @returns Returns true when the panel was opened, false otherwise.
   */
  @Class.Public()
  public open(): boolean {
    return this.skeleton.open();
  }

  /**
   * Closes the panel.
   * @returns Returns true when the panel was closed, false otherwise.
   */
  @Class.Public()
  public close(): boolean {
    return this.skeleton.close();
  }

  /**
   * Toggles the panel.
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
