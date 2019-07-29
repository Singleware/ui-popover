/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as OSS from '@singleware/oss';

/**
 * Global popover, stylesheet class.
 */
@Class.Describe()
export class Global extends OSS.Stylesheet {
  /**
   * Popover styles.
   */
  @Class.Private()
  private popover = this.select('swe-popover');

  /**
   * Default constructor.
   */
  constructor() {
    super();
    this.popover.display = 'block';
  }
}
