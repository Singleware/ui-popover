import * as Control from '@singleware/ui-control';
import * as Types from './types';
/**
 * Popover element.
 */
export declare class Element extends Control.Element {
    /**
     * Determines whether the global setup was initialized or not.
     */
    private static globalSetup;
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
     * Panel slot element.
     */
    private panelSlot;
    /**
     * Popover layout element.
     */
    private popoverLayout;
    /**
     * Popover styles element.
     */
    private popoverStyles;
    /**
     * Opens the panel element.
     */
    private openPanel;
    /**
     * Closes the panel element.
     */
    private closePanel;
    /**
     * Toggles the panel element, event handler.
     */
    private toggleHandler;
    /**
     * Prevent panel closing, event handler.
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
     * Gets the element opened state.
     */
    readonly opened: boolean;
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
     * Gets the element dismiss state.
     */
    /**
    * Sets the element dismiss state.
    */
    dismiss: boolean;
    /**
     * Gets the panel element placement.
     */
    /**
    * Sets the panel element placement.
    */
    placement: Types.Placements;
    /**
     * Gets the panel element alignment.
     */
    /**
    * Sets the panel element alignment.
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
     * Opens the panel.
     * @returns Returns true when the panel was opened, false otherwise.
     */
    open(): boolean;
    /**
     * Closes the panel.
     * @returns Returns true when the panel was closed, false otherwise.
     */
    close(): boolean;
    /**
     * Toggles the panel.
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
