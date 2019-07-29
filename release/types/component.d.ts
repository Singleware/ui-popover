import * as Control from '@singleware/ui-control';
import * as Types from './types';
import { Properties } from './properties';
import { Element } from './element';
/**
 * Popover component class.
 */
export declare class Component<T extends Properties = Properties> extends Control.Component<T> {
    /**
     * Element instance.
     */
    private skeleton;
    /**
     * Initializes the component.
     */
    private initialize;
    /**
     * Default constructor.
     * @param properties Initial properties.
     * @param children Initial children.
     */
    constructor(properties?: T, children?: any[]);
    /**
     * Gets the element.
     */
    readonly element: Element;
    /**
     * Gets the empty state of the element.
     */
    readonly empty: boolean;
    /**
     * Gets the element name.
     */
    /**
    * Sets the element name.
    */
    name: string | undefined;
    /**
     * Gets the element value.
     */
    /**
    * Sets the element value.
    */
    value: string | undefined;
    /**
     * Gets the default value of the element.
     */
    /**
    * Sets the default value of the element.
    */
    defaultValue: string | undefined;
    /**
     * Gets the required state of the element.
     */
    /**
    * Sets the required state of the element.
    */
    required: boolean;
    /**
     * Gets the read-only state of the element.
     */
    /**
    * Sets the read-only state of the element.
    */
    readOnly: boolean;
    /**
     * Gets the disabled state of the element.
     */
    /**
    * Sets the disabled state of the element.
    */
    disabled: boolean;
    /**
     * Gets the open state.
     */
    /**
    * Sets the open state.
    */
    open: boolean;
    /**
     * Gets the dismiss state.
     */
    /**
    * Sets the dismiss state.
    */
    dismiss: boolean;
    /**
     * Gets the content element placement.
     */
    /**
    * Sets the content element placement.
    */
    placement: Types.Placements;
    /**
     * Gets the content element alignment.
     */
    /**
    * Sets the content element alignment.
    */
    alignment: Types.Alignments;
    /**
     * Move the focus to this element.
     */
    focus(): void;
    /**
     * Reset the element value to its initial value.
     */
    reset(): void;
    /**
     * Shows the content.
     * @returns Returns true when the content was shown, false otherwise.
     */
    show(): boolean;
    /**
     * Hides the content.
     * @returns Returns true when the content was hidden, false otherwise.
     */
    hide(): boolean;
    /**
     * Toggles the content.
     */
    toggle(): void;
    /**
     * Checks the element validity.
     * @returns Returns true when the element is valid, false otherwise.
     */
    checkValidity(): boolean;
    /**
     * Set the element custom validity error message.
     * @param error Custom error message.
     */
    setCustomValidity(error?: string): void;
}
