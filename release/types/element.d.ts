import * as Control from '@singleware/ui-control';
import * as Types from './types';
/**
 * Popover element.
 */
export declare class Element extends Control.Element {
    /**
     * Global element styles.
     */
    private static globalStyles;
    /**
     * Global set of element instances.
     */
    private static globalInstances;
    /**
     * Current element instance.
     */
    private static globalCurrent?;
    /**
     * Element styles.
     */
    private styles;
    /**
     * Input slot element.
     */
    private inputSlot;
    /**
     * Content slot element.
     */
    private contentSlot;
    /**
     * Popover layout element.
     */
    private popoverLayout;
    /**
     * Popover styles element.
     */
    private popoverStyles;
    /**
     * Shows the content element.
     */
    private showContent;
    /**
     * Notifies the action and try to show the content element.
     * @returns Returns true when the content element was shown, false otherwise.
     */
    private notifyAndShowContent;
    /**
     * Hides the content element.
     */
    private hideContent;
    /**
     * Notifies the action and try to hide the content element.
     * @returns Returns true when the content element was hidden, false otherwise.
     */
    private notifyAndHideContent;
    /**
     * Toggles the content element, event handler.
     */
    private toggleHandler;
    /**
     * Prevent content closing, event handler.
     */
    private preventHandler;
    /**
     * Global closing prevent, event handler.
     * @param event Event instance.
     */
    private static globalPreventHandler;
    /**
     * Initializes all the global settings.
     */
    private static globalInitialization;
    /**
     * Default constructor.
     */
    constructor();
    /**
     * Determines whether the slotted input element is empty or not.
     */
    readonly empty: boolean;
    /**
     * Gets the slotted input element name.
     */
    /**
    * Sets the slotted input element name.
    */
    name: string | undefined;
    /**
     * Gets the slotted input element value.
     */
    /**
    * Sets the slotted input element value.
    */
    value: string | undefined;
    /**
     * Gets the default value from the slotted input element.
     */
    /**
    * Sets the default value from the slotted input element.
    */
    defaultValue: string | undefined;
    /**
     * Gets the element required state.
     */
    /**
    * Sets the element required state.
    */
    required: boolean;
    /**
     * Gets the element read-only state.
     */
    /**
    * Sets the element read-only state.
    */
    readOnly: boolean;
    /**
     * Gets the element disabled state.
     */
    /**
    * Sets the element disabled state.
    */
    disabled: boolean;
    /**
     * Gets the element open state.
     */
    /**
    * Sets the element open state.
    */
    open: boolean;
    /**
     * Gets the element dismiss state.
     */
    /**
    * Sets the element dismiss state.
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
     * Moves the focus to the slotted input element.
     */
    focus(): void;
    /**
     * Resets the value from the slotted input element to its initial value.
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
     * Checks the slotted input element validity.
     * @returns Returns true when the element is valid, false otherwise.
     */
    checkValidity(): boolean;
    /**
     * Sets the custom validity for the slotted input element.
     * @param error Custom error message.
     */
    setCustomValidity(error?: string): void;
}
