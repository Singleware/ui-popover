/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as JSX from '@singleware/jsx';
import * as Control from '@singleware/ui-control';

import * as Types from './types';
import * as Styles from './styles';

/**
 * Popover element.
 */
@JSX.Describe('swe-popover')
@Class.Describe()
export class Element extends Control.Element {
  /**
   * Determines whether the global setup was initialized or not.
   */
  @Class.Private()
  private static globalSetup = false;

  /**
   * Global set of element instances.
   */
  @Class.Private()
  private static globalInstances = new Set<Element>();

  /**
   * Current element instance.
   */
  @Class.Private()
  private static globalCurrent?: Element;

  /**
   * Element styles.
   */
  @Class.Private()
  private styles = new Styles.Local();

  /**
   * Input slot element.
   */
  @Class.Private()
  private inputSlot = <slot name="input" class="input" onClick={this.toggleHandler.bind(this)} /> as HTMLSlotElement;

  /**
   * Panel slot element.
   */
  @Class.Private()
  private panelSlot = <slot name="panel" class="panel" onClick={this.preventHandler.bind(this)} /> as HTMLSlotElement;

  /**
   * Popover layout element.
   */
  @Class.Private()
  private popoverLayout = (
    <label class="popover">
      {this.inputSlot}
      {this.panelSlot}
    </label>
  ) as HTMLLabelElement;

  /**
   * Popover styles element.
   */
  @Class.Private()
  private popoverStyles = <style type="text/css">{this.styles.toString()}</style> as HTMLStyleElement;

  /**
   * Opens the panel element.
   */
  @Class.Private()
  private openPanel(): void {
    Element.globalInstances.add(Class.resolve(this));
    this.updatePropertyState('opened', true);
  }

  /**
   * Closes the panel element.
   */
  @Class.Private()
  private closePanel(): void {
    Element.globalInstances.delete(Class.resolve(this));
    this.updatePropertyState('opened', false);
  }

  /**
   * Toggles the panel element, event handler.
   */
  @Class.Private()
  private toggleHandler(): void {
    Element.globalCurrent = Class.resolve(this);
    if (!this.opened && !this.readOnly && !this.disabled) {
      if (this.dispatchEvent(new Event('open', { bubbles: true, cancelable: true }))) {
        this.openPanel();
      }
    } else {
      if (this.dispatchEvent(new Event('close', { bubbles: true, cancelable: true }))) {
        this.closePanel();
      }
    }
  }

  /**
   * Prevent panel closing, event handler.
   */
  @Class.Private()
  private preventHandler(): void {
    if (!this.dismiss) {
      Element.globalCurrent = Class.resolve(this);
    }
  }

  /**
   * Global closing prevent, event handler.
   * @param event Event instance.
   */
  @Class.Private()
  private static globalPreventHandler(event: Event): void {
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
  @Class.Private()
  private static globalInitialization(): void {
    if (!this.globalSetup) {
      globalThis.addEventListener('click', this.globalPreventHandler.bind(this));
      this.globalSetup = true;
    }
  }

  /**
   * Default constructor.
   */
  constructor() {
    super();
    Element.globalInitialization();
    JSX.append(this.attachShadow({ mode: 'closed' }), this.popoverStyles, this.popoverLayout);
  }

  /**
   * Determines whether the slotted input element is empty or not.
   */
  @Class.Public()
  public get empty(): boolean {
    return this.getRequiredChildProperty(this.inputSlot, 'empty');
  }

  /**
   * Gets the element opened state.
   */
  @Class.Public()
  public get opened(): boolean {
    return this.hasAttribute('opened');
  }

  /**
   * Gets the slotted input element name.
   */
  @Class.Public()
  public get name(): string | undefined {
    return this.getRequiredChildProperty(this.inputSlot, 'name');
  }

  /**
   * Sets the slotted input element name.
   */
  public set name(name: string | undefined) {
    this.setRequiredChildProperty(this.inputSlot, 'name', name);
  }

  /**
   * Gets the slotted input element value.
   */
  @Class.Public()
  public get value(): string | undefined {
    return this.getRequiredChildProperty(this.inputSlot, 'value');
  }

  /**
   * Sets the slotted input element value.
   */
  public set value(value: string | undefined) {
    this.setRequiredChildProperty(this.inputSlot, 'value', value);
  }

  /**
   * Gets the default value from the slotted input element.
   */
  @Class.Public()
  public get defaultValue(): string | undefined {
    return this.getRequiredChildProperty(this.inputSlot, 'defaultValue');
  }

  /**
   * Sets the default value from the slotted input element.
   */
  public set defaultValue(value: string | undefined) {
    this.setRequiredChildProperty(this.inputSlot, 'defaultValue', value);
  }

  /**
   * Gets the element required state.
   */
  @Class.Public()
  public get required(): boolean {
    return this.hasAttribute('required');
  }

  /**
   * Sets the element required state.
   */
  public set required(state: boolean) {
    this.updatePropertyState('required', this.setRequiredChildProperty(this.inputSlot, 'required', state) && state);
  }

  /**
   * Gets the element read-only state.
   */
  @Class.Public()
  public get readOnly(): boolean {
    return this.hasAttribute('readonly');
  }

  /**
   * Sets the element read-only state.
   */
  public set readOnly(state: boolean) {
    this.updatePropertyState('readonly', this.setRequiredChildProperty(this.inputSlot, 'readonly', state) && state);
  }

  /**
   * Gets the element disabled state.
   */
  @Class.Public()
  public get disabled(): boolean {
    return this.hasAttribute('disabled');
  }

  /**
   * Sets the element disabled state.
   */
  public set disabled(state: boolean) {
    this.updatePropertyState('disabled', this.setRequiredChildProperty(this.inputSlot, 'disabled', state) && state);
  }

  /**
   * Gets the element dismiss state.
   */
  @Class.Public()
  public get dismiss(): boolean {
    return this.hasAttribute('dismiss');
  }

  /**
   * Sets the element dismiss state.
   */
  public set dismiss(state: boolean) {
    if (state) {
      Element.globalInstances.add(Class.resolve(this));
      this.updatePropertyState('dismiss', true);
    } else {
      Element.globalInstances.delete(Class.resolve(this));
      this.updatePropertyState('dismiss', false);
    }
  }

  /**
   * Gets the panel element placement.
   */
  @Class.Public()
  public get placement(): Types.Placements {
    return (this.getAttribute('placement') as Types.Placements) || 'bottom';
  }

  /**
   * Sets the panel element placement.
   */
  public set placement(value: Types.Placements) {
    this.updatePropertyState('placement', value);
  }

  /**
   * Gets the panel element alignment.
   */
  @Class.Public()
  public get alignment(): Types.Alignments {
    return (this.getAttribute('alignment') as Types.Alignments) || 'middle';
  }

  /**
   * Sets the panel element alignment.
   */
  public set alignment(value: Types.Alignments) {
    this.updatePropertyState('alignment', value);
  }

  /**
   * Moves the focus to the slotted input element.
   */
  @Class.Public()
  public focus(): void {
    this.callRequiredChildMethod(this.inputSlot, 'focus', []);
  }

  /**
   * Resets the value from the slotted input element to its initial value.
   */
  @Class.Public()
  public reset(): void {
    this.callRequiredChildMethod(this.inputSlot, 'reset', []);
  }

  /**
   * Opens the panel.
   * @returns Returns true when the panel was opened, false otherwise.
   */
  @Class.Public()
  public open(): boolean {
    if (!this.opened && !this.readOnly && !this.disabled) {
      return this.openPanel(), true;
    }
    return false;
  }

  /**
   * Closes the panel.
   * @returns Returns true when the panel was closed, false otherwise.
   */
  @Class.Public()
  public close(): boolean {
    if (this.opened) {
      return this.closePanel(), true;
    }
    return false;
  }

  /**
   * Toggles the panel.
   */
  @Class.Public()
  public toggle(): void {
    if (!this.opened && !this.readOnly && !this.disabled) {
      this.openPanel();
    } else {
      this.closePanel();
    }
  }

  /**
   * Checks the slotted input element validity.
   * @returns Returns true when the element is valid, false otherwise.
   */
  @Class.Public()
  public checkValidity(): boolean {
    return this.callRequiredChildMethod(this.inputSlot, 'checkValidity', []) !== false;
  }

  /**
   * Sets the custom validity for the slotted input element.
   * @param error Custom error message.
   */
  @Class.Public()
  public setCustomValidity(error?: string): void {
    this.callRequiredChildMethod(this.inputSlot, 'setCustomValidity', [error]);
  }
}
