// import VEditor from "./components/VEditor.vue";
// import VInput from "./components/VInput";

// export { VEditor, VInput };

import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
const VuePluginStarterComponents = require.context(
  "./components",
  true,
  /.vue$/
);

const VuePluginStarter = {
  // eslint-disable-next-line
  install: function(Vue, options) {
    VuePluginStarterComponents.keys().forEach(fileName => {
      const componentConfig = VuePluginStarterComponents(fileName);

      const componentName = componentConfig.default.name
        ? componentConfig.default.name
        : upperFirst(camelCase(fileName.replace(/\.\w+$/, "")));

      // Globally register the component
      Vue.component(componentName, componentConfig.default || componentConfig);
    });
  }
};

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(VuePluginStarter);
}

export default VuePluginStarter;
