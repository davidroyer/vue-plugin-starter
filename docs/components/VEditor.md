# v-editor 

An Amazing Editor Component 

- **author** - David Royer 
- **license** - MIT 
- **VEditor** 

## slots 

- `default`  

- `label` Use this slot to set the checkbox label 

## props 

- `msg` ***String*** (*optional*) 

   Test prop for unit tests 

- `model` ***Array*** (*optional*) 

   The checkbox model 

- `disabled` ***Boolean*** (*optional*) 

   Initial checkbox state 

- `enabled` ***Boolean*** (*optional*) `default: true` 

   Initial checkbox value 

- `label` ***String*** (*optional*) `default: 'Unamed checkbox'` 

   The checkbox label 

- `object` ***Object*** (*optional*) `default: null` 

- `bool-false` ***Boolean*** (*optional*) `default: false` 

## data 

- `initialValue` 

   The initial component value. Used to detect changes and restore the initial value. 

**initial value:** `'The initial value!'` 

- `currentValue` 

**initial value:** `'And the current value!'` 

## computed properties 

- `id` 

   The component identifier. Generated using the `initialValue` data. 

   **dependencies:** `initialValue` 

- `changed` 

   **dependencies:** `currentValue`, `initialValue` 

- `withNoDependencies` 

## events 

- `loaded` 

   Emitted when the component has been loaded 

- `enabled` 

   Emitted the event `enabled` when loaded Multilign 

## methods 

- `check()` 

   Check if the input is checked 

- `prop()` 

- `enable(value)` 

   Enable the checkbox 

