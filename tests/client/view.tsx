/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as JSX from '@singleware/jsx';
import * as Control from '@singleware/ui-control';
import * as Switch from '@singleware/ui-switch';
import * as Select from '@singleware/ui-select';
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
   * Test content.
   */
  @Class.Private()
  private content = (
    <Test.Component dismiss onShow={this.onShow.bind(this)} onHide={this.onHide.bind(this)}>
      <button slot="input">Input</button>
      <div slot="content">Content</div>
    </Test.Component>
  ) as Test.Element;

  /**
   * Open switch element.
   */
  @Class.Private()
  private openSwitch = (
    <Switch.Template slot="center" name="open" checkedValue={true} uncheckedValue={false} value={this.content.open}>
      <span slot="yes">Yes</span>
      <span slot="no">No</span>
    </Switch.Template>
  ) as Switch.Element;

  /**
   * Test controls.
   */
  @Class.Private()
  private control = (
    <Form.Component onSubmit={this.onSubmit.bind(this)}>
      <Fieldset.Component slot="header">
        <h2>Controls</h2>
      </Fieldset.Component>
      <Field.Component slot="content">
        <label slot="label">Placement</label>
        <Select.Component slot="center" name="placement" options={['top', 'right', 'bottom', 'left']} value={this.content.placement}>
          <button slot="input"></button>
          <div slot="result" />
        </Select.Component>
      </Field.Component>
      <Field.Component slot="content">
        <label slot="label">Alignment</label>
        <Select.Component slot="center" name="alignment" options={['begin', 'middle', 'end']} value={this.content.alignment}>
          <button slot="input"></button>
          <div slot="result" />
        </Select.Component>
      </Field.Component>
      <Field.Component slot="content">
        <label slot="label">Dismiss</label>
        <Switch.Template slot="center" name="dismiss" checkedValue={true} uncheckedValue={false} value={this.content.dismiss}>
          <span slot="yes">Yes</span>
          <span slot="no">No</span>
        </Switch.Template>
      </Field.Component>
      <Field.Component slot="content">
        <label slot="label">Open</label>
        {this.openSwitch}
      </Field.Component>
      <Field.Component slot="content">
        <label slot="label">Disabled</label>
        <Switch.Template slot="center" name="disabled" checkedValue={true} uncheckedValue={false} value={this.content.disabled}>
          <span slot="yes">Yes</span>
          <span slot="no">No</span>
        </Switch.Template>
      </Field.Component>
      <Field.Component slot="content">
        <label slot="label">Read-only</label>
        <Switch.Template slot="center" name="readOnly" checkedValue={true} uncheckedValue={false} value={this.content.readOnly}>
          <span slot="yes">Yes</span>
          <span slot="no">No</span>
        </Switch.Template>
      </Field.Component>
      <Fieldset.Component slot="footer" type="submit">
        <button type="submit" class="button">
          Apply
        </button>
      </Fieldset.Component>
    </Form.Component>
  ) as Form.Element;

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
   * Show, event handler.
   */
  @Class.Private()
  private onShow(): void {
    this.openSwitch.value = true;
  }

  /**
   * Hide, event handler.
   */
  @Class.Private()
  private onHide(): void {
    this.openSwitch.value = false;
  }

  /**
   * Submit, event handler.
   */
  @Class.Private()
  private onSubmit(): void {
    const options = this.control.value;
    this.content.placement = options.placement;
    this.content.alignment = options.alignment;
    this.content.dismiss = options.dismiss;
    this.content.open = options.open;
    this.content.disabled = options.disabled;
    this.content.readOnly = options.readOnly;
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
