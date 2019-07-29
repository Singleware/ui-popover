/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Frontend from '@singleware/frontend';

import { View } from './view';

/**
 * Component test, handler class.
 */
@Class.Describe()
export class Handler extends Class.Null {
  /**
   * Component test route.
   * @param match Matched route.
   */
  @Frontend.Processor({ path: '/' })
  @Frontend.Processor({ path: '/ui-popover/' })
  @Class.Public()
  public async indexAction(match: Frontend.Match): Promise<void> {
    const output = match.detail.output;
    output.subtitle = 'User Interface: Popover';
    output.content = new View({});
  }
}
