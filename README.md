# vue-plugin-starter

## Notes

Releasing pre-release:
`release-it major --preRelease=beta`

Results In: `2.0.0-beta.0`

Then after that, you don't need to include the type of update (such as `major` used here).

`release-it --preRelease=beta`

Results In: `2.0.0-beta.0`

<!-- Adding

- `git tag -a v1.2 -m "Travis Release 1.2"`
- `git push --tags` -->

[![GitHub open issues](https://img.shields.io/github/issues/davidroyer/vue-plugin-starter.svg?maxAge=2592000)](https://github.com/davidroyer/vue-plugin-starter/issues)

[![Npm version](https://img.shields.io/npm/v/vue-plugin-starter.svg?maxAge=2592000)](https://www.npmjs.com/package/vue-plugin-starter)

[![MIT License](https://img.shields.io/github/license/davidroyer/vue-plugin-starter.svg)](https://github.com/davidroyer/vue-plugin-starter/blob/master/LICENSE)

## Usage

```HTML
<VEditor :text="hello"></VEditor>
```

```javascript
import { VEditor } from "vue-plugin-starter";

export default {
  components: {
    VEditor
  }
};
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

- `msg` **_String_** (_optional_)

  Test prop for unit tests

- `model` **_Array_** (_optional_)

  The checkbox model

- `disabled` **_Boolean_** (_optional_)

  Initial checkbox state

- `enabled` **_Boolean_** (_optional_) `default: true`

  Initial checkbox value

- `label` **_String_** (_optional_) `default: 'Unamed checkbox'`

  The checkbox label

- `object` **_Object_** (_optional_) `default: null`

- `bool-false` **_Boolean_** (_optional_) `default: false`

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
