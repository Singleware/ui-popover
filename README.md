# UI-Popover

Custom HTML element used to wrap a simple popover, composed by the slots: input and content.
[See demo](//singleware.github.io/ui-popover/)

## Usage

Instantiate the component that initializes the custom element.

```tsx
import * as JSX from '@singleware/jsx';
import * as Popover from '@singleware/ui-popover';

const component = (
  <Popover.Component dismiss>
    <button slot="input">Input</button>
    <div slot="content">Content</div>
  </Popover.Component>
) as Popover.Element;
```

Show, Hide and Toggle programmatically.

```tsx
component.show();
component.hide();
component.toggle();
```

Be informed about the component actions.

```tsx
component.addEventListener('show', (event: Event) => console.log(`Yes! It's visible now.`));
component.addEventListener('hide', (event: Event) => console.log(`No! It's hidden now.`));
```

## Help

### Attributes

| Name    | Description                                                              |
| ------- | ------------------------------------------------------------------------ |
| dismiss | Assigned when the content can be hidden by clicking anywhere             |
| open    | Automatically assigned when the content is shown and removed when hidden |

### Properties

| Name         | Type     | Description                                                                       |
| ------------ | -------- | --------------------------------------------------------------------------------- |
| empty        | `bool`   | Get the current `empty` state from the `input` slot element                       |
| name         | `string` | Get and set the property `name` from the `input` slot element                     |
| value        | `any`    | Get and set the property `value` from the `input` slot element                    |
| defaultValue | `any`    | Get and set the property `defaultValue` from the `input` slot element             |
| required     | `bool`   | Get and set the `required` state from the `input` slot element                    |
| readOnly     | `bool`   | Get and set the `readOnly` state from the `input` slot element                    |
| disabled     | `bool`   | Get and set the `disabled` state from the `input` slot element                    |
| dismiss      | `bool`   | Get and set the `dismiss` state                                                   |
| open         | `bool`   | Get the current `open` state                                                      |
| placement    | -        | Get and set the element `placement` state. Use `top`, `right`, `bottom` or `left` |
| alignment    | -        | Get and set the element `alignment` state. Use `start`, `middle` or `end`         |

### Methods

| Name              | Description                                         |
| ----------------- | --------------------------------------------------- |
| focus             | Moves the current focus to the `input` slot element |
| reset             | Reset the current value in the `input` slot element |
| show              | Shows the content element                           |
| hide              | Hides the content element                           |
| toggle            | Toggles the content element                         |
| checkValidity     | Get the validity from the `input` slot element      |
| setCustomValidity | Set a custom validity in the `input` slot element   |

### Slots

| Name    | Description                                               |
| ------- | --------------------------------------------------------- |
| input   | Element to receive the popover `show` and `hide` actions  |
| content | Element to be displayed while the `open` action is active |

### Events

| Name | Description                               |
| ---- | ----------------------------------------- |
| show | Dispatched when the alert becomes visible |
| hide | Dispatched when the alert becomes hidden  |

### Styles

| Name                                | Description                          |
| ----------------------------------- | ------------------------------------ |
| --swe-popover-content-border-radius | Determines the content border radius |
| --swe-popover-content-border-size   | Determines the content border size   |
| --swe-popover-content-border-color  | Determines the content border color  |

> These variables above are useful to customize the closed shadow DOM.

## Install

Using npm:

```sh
npm i @singleware/ui-popover
```

## License

[MIT &copy; Silas B. Domingos](https://balmante.eti.br)
