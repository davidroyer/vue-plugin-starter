<template>
  <div class="v-input-wrapper">
    <label v-text="label" :for="$attrs.id"></label>
    <input
      :type="type"
      :value="value"
      :name="$attrs.name || $attrs.id"
      v-on="listeners"
      v-bind="$attrs"
      ref="input"
      class="v-input">
  </div>
</template>

<script>
export default {
  name: "VInput",
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: "text"
    },
    /**
     * Use this directive to create two-way data bindings with the component.
     * It automatically picks the correct way to update the element based on the input type.
     * @model
     */

    value: {
      type: [String, Number]
    },

    /**
     * Provide a label
     * @type {String}
     */
    label: {
      type: String,
      default: ""
    }
  },
  computed: {
    /**
     * Responsible for emitting all events from an inner element to the parent.
     * The input method ensures that v-model works with the parent.
     * @return {Object} [description]
     */
    listeners() {
      return {
        ...this.$listeners,
        input: event => this.$emit("input", event.target.value)
      };
    }
  },

  data() {
    return {
      /**
       * The initial component value.
       * Used to detect changes and restore the initial value.
       */
      test1: "fix",
      test2: "refactor"
    };
  },

  methods: {
    /**
     * Sets focus on input.
     * Can be called programatically by setting an a ref and then calling this method
     * @render vuejs
     * @example
     * <template>
     *   <v-button @click="$refs.myInput.setFocus()"></v-button>
     *   <v-input ref="myInput" label="My Input"></v-input>
     * </template>
     *
     */
    setFocus() {
      this.$refs.input.focus();
    }
  }
};
</script>

<style lang="scss">
.v-input-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.v-input-label {
  // margin-bottom: $size-xsmall;
  // font-family: $font-heading-family;
  font-size: 14px;
}

.v-input {
  // height: $size-xlarge;
  width: 100%;
  max-width: 200px;
  // margin-bottom: $size-xsmall;
  // padding: 0 $size-xsmall;
  // font-size: 14px;
  // border: $border-default;

  &.full-width {
    max-width: 100%;
  }
}
</style>
