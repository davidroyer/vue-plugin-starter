# v-input 

The custom HTML `<input>` component. 

- **example** - <div> <v-input id="inputExample" label="My Input Example"></v-input></div> 

## props 

- `type` ***String*** (*optional*) `default: 'text'` 

- `v-model` ***String|Number*** (*optional*) 

   Use this directive to create two-way data bindings with the component. It automatically picks the correct way to update the element based on the input type. 

- `label` ***String*** (*optional*) `default: ''` 

   Provide a label 

## computed properties 

- `listeners` 

   Responsible for emitting all events from an inner element to the parent. The input method ensures that v-model works with the parent. 

   **dependencies:** `$listeners`, `$emit` 


## methods 

- `setFocus()` 

   Sets focus on input. Can be called programatically by setting an a ref and then calling this method 

