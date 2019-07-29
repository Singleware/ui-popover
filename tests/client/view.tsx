/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as JSX from '@singleware/jsx';
import * as Control from '@singleware/ui-control';
import * as Fieldset from '@singleware/ui-fieldset';
import * as Field from '@singleware/ui-field';
import * as Form from '@singleware/ui-form';

import * as Test from '@module/index';

/**
 * View class.
 */
@Class.Describe()
export class View extends Control.Component<Control.Properties> {
  /**
   * Settings form.
   */
  @Class.Private()
  private settingsForm = (
    <Form.Component onSubmit={this.onSubmit.bind(this)}>
      <Fieldset.Component slot="header">
        <h3>Control</h3>
      </Fieldset.Component>
      <Field.Component slot="content">
        <label slot="label">Enabled</label>
        <input slot="center" name="enabled" type="checkbox" value="true" />
      </Field.Component>
      <Fieldset.Component slot="footer" type="submit">
        <button type="submit" class="button">
          Apply
        </button>
      </Fieldset.Component>
    </Form.Component>
  ) as Form.Element;

  /**
   * Test controls.
   */
  @Class.Private()
  private control = (
    <div>
      <h2>Controls</h2>
      {this.settingsForm}
    </div>
  ) as HTMLDivElement;

  /**
   * Test content.
   */
  @Class.Private()
  private content = (
    <Test.Component class="popover">
      <button slot="input">Popover input</button>
      <div slot="panel">Popover panel</div>
    </Test.Component>
  ) as Test.Element;

  /**
   * View element.
   */
  @Class.Private()
  private skeleton = (
    <div class="experiment">
      <div class="content">{this.content}</div>
      <div class="control">{this.control}</div>
    </div>
  ) as HTMLElement;

  /**
   * Submit, event handler.
   */
  @Class.Private()
  private onSubmit(): void {
    const form = this.settingsForm.value;
    this.content.disabled = Boolean(form.enabled);
  }

  /**
   * Default constructor.
   * @param properties Default properties.
   */
  constructor(properties: Control.Properties) {
    super(properties);
  }

  /**
   * View element.
   */
  @Class.Public()
  public get element(): HTMLElement {
    return this.skeleton;
  }
}
