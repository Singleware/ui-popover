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
   * Global element styles.
   */
  @Class.Private()
  private static globalStyles = <style type="text/css">{new Styles.Global().toString()}</style> as HTMLStyleElement;

  /**
   * Global set of element instances.
   */
  @Class.Private()
  private static globalInstances: Set<Element>;

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
  private inputSlot = <slot name="input" onClick={this.toggleHandler.bind(this)} /> as HTMLSlotElement;

  /**
   * Content slot element.
   */
  @Class.Private()
  private contentSlot = <slot name="content" onClick={this.preventHandler.bind(this)} /> as HTMLSlotElement;

  /**
   * Popover layout element.
   */
  @Class.Private()
  private popoverLayout = (
    <label>
      {this.inputSlot}
      {this.contentSlot}
    </label>
  ) as HTMLLabelElement;

  /**
   * Popover styles element.
   */
  @Class.Private()
  private popoverStyles = <style type="text/css">{this.styles.toString()}</style> as HTMLStyleElement;

  /**
   * Shows the content element.
   */
  @Class.Private()
  private showContent(): void {
    Element.globalInstances.add(Class.resolve(this));
    this.updatePropertyState('open', true);
  }

  /**
   * Notifies the action and try to show the content element.
   * @returns Returns true when the content element was shown, false otherwise.
   */
  @Class.Private()
  private notifyAndShowContent(): boolean {
    if (this.dispatchEvent(new Event('show', { bubbles: true, cancelable: true }))) {
      return this.showContent(), true;
    }
    return false;
  }

  /**
   * Hides the content element.
   */
  @Class.Private()
  private hideContent(): void {
    Element.globalInstances.delete(Class.resolve(this));
    this.updatePropertyState('open', false);
  }

  /**
   * Notifies the action and try to hide the content element.
   * @returns Returns true when the content element was hidden, false otherwise.
   */
  @Class.Private()
  private notifyAndHideContent(): boolean {
    if (this.dispatchEvent(new Event('hide', { bubbles: true, cancelable: true }))) {
      return this.hideContent(), true;
    }
    return false;
  }

  /**
   * Toggles the content element, event handler.
   */
  @Class.Private()
  private toggleHandler(): void {
    Element.globalCurrent = Class.resolve(this);
    if (!this.open && !this.readOnly && !this.disabled) {
      this.notifyAndShowContent();
    } else {
      this.notifyAndHideContent();
    }
  }

  /**
   * Prevent content closing, event handler.
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
          element.notifyAndHideContent();
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
    if (!this.globalInstances) {
      this.globalInstances = new Set<Element>();
      globalThis.addEventListener('click', this.globalPreventHandler.bind(this));
    }
    if (!globalThis.document.head.contains(Element.globalStyles)) {
      JSX.append(globalThis.document.head, Element.globalStyles);
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
    this.setRequiredChildProperty(this.inputSlot, 'readonly', state);
    this.updatePropertyState('readonly', state);
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
    this.setRequiredChildProperty(this.inputSlot, 'disabled', state);
    this.updatePropertyState('disabled', state);
  }

  /**
   * Gets the element open state.
   */
  @Class.Public()
  public get open(): boolean {
    return this.hasAttribute('open');
  }

  /**
   * Sets the element open state.
   */
  public set open(state: boolean) {
    this.updatePropertyState('open', state);
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
   * Gets the content element placement.
   */
  @Class.Public()
  public get placement(): Types.Placements {
    return (this.getAttribute('placement') as Types.Placements) || 'bottom';
  }

  /**
   * Sets the content element placement.
   */
  public set placement(value: Types.Placements) {
    this.updatePropertyState('placement', value);
  }

  /**
   * Gets the content element alignment.
   */
  @Class.Public()
  public get alignment(): Types.Alignments {
    return (this.getAttribute('alignment') as Types.Alignments) || 'middle';
  }

  /**
   * Sets the content element alignment.
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
   * Shows the content.
   * @returns Returns true when the content was shown, false otherwise.
   */
  @Class.Public()
  public show(): boolean {
    if (!this.open && !this.readOnly && !this.disabled) {
      return this.showContent(), true;
    }
    return false;
  }

  /**
   * Hides the content.
   * @returns Returns true when the content was hidden, false otherwise.
   */
  @Class.Public()
  public hide(): boolean {
    if (this.open) {
      return this.hideContent(), true;
    }
    return false;
  }

  /**
   * Toggles the content.
   */
  @Class.Public()
  public toggle(): void {
    if (!this.open && !this.readOnly && !this.disabled) {
      this.showContent();
    } else {
      this.hideContent();
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
