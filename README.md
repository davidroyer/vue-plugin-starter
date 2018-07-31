# vue-plugin-starter

[![GitHub open issues](https://img.shields.io/github/issues/David Royer/vue-plugin-starter.svg?maxAge=2592000)](https://github.com/David Royer/vue-plugin-starter/issues)
[![Npm version](https://img.shields.io/npm/v/vue-plugin-starter.svg?maxAge=2592000)](https://www.npmjs.com/package/vue-plugin-starter)
[![MIT License](https://img.shields.io/github/license/David Royer/vue-plugin-starter.svg)](https://github.com/David Royer/vue-plugin-starter/blob/master/LICENSE)

## Usage

```HTML
<VEditor :text="hello"></VEditor>
```

```javascript
import { VEditor } from 'vue-plugin-starter'

export default {
  components: {
    VEditor
  }
}
```

## API

### v-editor 

An Amazing Editor Component 

- **author** - David Royer 
- **license** - MIT 
- **VEditor** 

#### slots 

- `default`  

- `label` Use this slot to set the checkbox label 

#### props 

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

#### data 

- `initialValue` 

   The initial component value. Used to detect changes and restore the initial value. 

**initial value:** `'The initial value!'` 

- `currentValue` 

**initial value:** `'And the current value!'` 

#### computed properties 

- `id` 

   The component identifier. Generated using the `initialValue` data. 

   **dependencies:** `initialValue` 

- `changed` 

   **dependencies:** `currentValue`, `initialValue` 

- `withNoDependencies` 

#### events 

- `loaded` 

   Emitted when the component has been loaded 

- `enabled` 

   Emitted the event `enabled` when loaded Multilign 

#### methods 

- `check()` 

   Check if the input is checked 

- `prop()` 

- `enable(value)` 

   Enable the checkbox 

## Installation

```
npm install vue-plugin-starter
```

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn run serve
```

### Compiles and minifies for production

```
yarn run build
```

### Lints and fixes files

```
yarn run lint
```

### Run your unit tests

```
yarn run test:unit
```

### Update the API section of README.md with generated documentation

```
yarn run doc:build
```

### Run style guide dev server

```
yarn run styleguide
```

### Generate a static HTML style guide

```
yarn run styleguide:build
```
