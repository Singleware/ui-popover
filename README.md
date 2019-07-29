# UI-Popover

Custom HTML element used to wrap most essential actions for a popover component.

### Automatic Attributes

| Name   | Description                                        |
| ------ | -------------------------------------------------- |
| opened | Automatically assigned when the panel is displayed |

### Mirrored Properties

| Name         | Description                                                 |
| ------------ | ----------------------------------------------------------- |
| name         | Get and set the `name` of the slotted input element         |
| value        | Get and set the `value` of the slotted input element        |
| defaultValue | Get and set the `defaultValue` of the slotted input element |
| required     | Get and set the `required` state in the input slot element  |
| readOnly     | Get and set the `readOnly` state in the input slot element  |
| disabled     | Get and set the `disabled` state in the input slot element  |

### Properties

| Name         | Description                                                               |
| ------------ | ------------------------------------------------------------------------- |
| opened       | Get the current opened state                                              |
| empty        | Get the current empty state                                               |
| name         | Get the current element name                                              |
| value        | Get the current element value                                             |
| defaultValue | Get and set the element defaultValue                                      |
| required     | Get and set the required state                                            |
| readOnly     | Get and set the readOnly state                                            |
| disabled     | Get and set the disabled state                                            |
| dismiss      | Get and set the dismiss state                                             |
| placement    | Get and set the element placement. Use `top`, `right`, `bottom` or `left` |
| alignment    | Get and set the element alignment. Use `start`, `middle` or `end`         |

### Methods

| Name              | Description                                     |
| ----------------- | ----------------------------------------------- |
| focus             | Move the focus to the input slot element        |
| reset             | Reset the current value to the default value    |
| open              | Opens the panel element                         |
| close             | Closes the panel element                        |
| toggle            | Toggles the panel element                       |
| checkValidity     | Get the validity of the input slot element      |
| setCustomValidity | Set a custom validity in the input slot element |

### Slots

| Name  | Description                                                |
| ----- | ---------------------------------------------------------- |
| input | Element to receive the popover opening and closing actions |
| panel | Element to be displayed while the opening action is active |

### Events

| Name  | Description                                                                        |
| ----- | ---------------------------------------------------------------------------------- |
| open  | Dispatched when the opening action is fired by the slotted input element           |
| close | Dispatched when the closing action is fired by the slotted input element or window |

### CSS Variables

| Name                       | Description                       |
| -------------------------- | --------------------------------- |
| --swe-popover-border-size  | Determines the panel border size  |
| --swe-popover-border-color | Determines the panel border color |

## Install

Using npm:

```sh
npm i @singleware/ui-popover
```

## License

[MIT &copy; Silas B. Domingos](https://balmante.eti.br)
