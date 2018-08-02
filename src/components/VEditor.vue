<template>
<label>
    <h1>{{ msg }}</h1>
    <input :id='id' :disabled="disabled" type="text" v-model="checkbox">
    <slot></slot>
    <!-- Use this slot to set the checkbox label -->
    <slot name="label"></slot>
  </label>
</template>

<script>
/**
 * An Amazing Editor Component
 *
 * @author David Royer
 * @license MIT
 * @VEditor
 */
export default {
  name: "VEditor",
  props: {
    /**
     * Test prop for unit tests
     */
    msg: String,

    /**
     * The checkbox model
     */
    model: {
      type: Array
      // required: true
    },

    /**
     * Initial checkbox state
     */
    disabled: Boolean,

    /**
     * Initial checkbox value
     */
    enabled: {
      type: Boolean,
      default: true
    },

    /**
     * The checkbox label
     */
    label: {
      type: String,
      default: "Unamed checkbox"
    },

    object: {
      type: Object,
      default: null
    },

    boolFalse: {
      type: Boolean,
      default: false
    }
  },

  created() {
    /**
     * Emitted when the component has been loaded
     */
    this.$emit("loaded");
  },

  data() {
    return {
      /**
       * The initial component value.
       * Used to detect changes and restore the initial value.
       */
      initialValue: "The initial value!",
      currentValue: "And the current value!",
      test1: "fix"
    };
  },

  computed: {
    /**
     * The component identifier.
     * Generated using the `initialValue` data.
     */
    id() {
      return `checkbox-${this.initialValue}`;
    },

    changed() {
      return this.currentValue !== this.initialValue;
    },

    withNoDependencies() {
      return "yeah";
    }
  },

  methods: {
    /**
     * Check if the input is checked
     */
    check() {
      console.log("check");
    },

    prop: () => {
      console.log("prop");
    },

    /*
     * This should be ignored
     * @private
     */
    ignored() {},

    // Another ignored method
    // @private
    anotherIgnored() {},

    // Enable the checkbox
    enable(value) {
      const x = true;
      /**
       * Emitted the event `enabled` when loaded
       * Multilign
       */
      this.$emit("enabled", x);
    }
  }
};
</script>

<style lang="css" scoped>
</style>
