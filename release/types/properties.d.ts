/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Types from './types';

/**
 * Popover properties interface.
 */
export interface Properties {
  /**
   * Popover classes.
   */
  class?: string;
  /**
   * Popover slot.
   */
  slot?: string;
  /**
   * Popover name.
   */
  name?: string;
  /**
   * Popover value.
   */
  value?: string;
  /**
   * Popover default value.
   */
  defaultValue?: string;
  /**
   * Determines if the popover is required or not.
   */
  required?: boolean;
  /**
   * Determines if the popover is read-only or not.
   */
  readOnly?: boolean;
  /**
   * Determines if the popover is disabled or not.
   */
  disabled?: boolean;
  /**
   * Determines if the popover can be dismissed.
   */
  dismiss?: boolean;
  /**
   * Determines whether the popover starts open or not.
   */
  open?: boolean;
  /**
   * Determines which placement the popover should have.
   */
  placement?: Types.Placements;
  /**
   * Determines which alignment the popover should have.
   */
  alignment?: Types.Alignments;
  /**
   * Popover children.
   */
  children?: {};
  /**
   * Show event.
   */
  onShow?: (event: Event) => void;
  /**
   * Hide event.
   */
  onHide?: (event: Event) => void;
}
