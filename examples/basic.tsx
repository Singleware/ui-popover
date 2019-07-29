/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Popover from '../source';
import * as JSX from '@singleware/jsx';

const popover = (
  <Popover.Component>
    <button slot="input">Popover input</button>
    <div slot="panel">Popover panel</div>
  </Popover.Component>
) as Popover.Element;
