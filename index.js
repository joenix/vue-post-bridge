import postBridge from "post-bridge";

import { registry, charm, read } from "./kit";

import component from "./component.vue";

export default {
  // Install
  install(Vue) {
    // Registry
    Vue.component("vue-post-bridge", component);

    // Prototype Registry
    Vue.prototype.$registry = top.$registry = registry; // new postBridge();

    // Prototype Action
    Vue.prototype.$charm = top.$charm = charm;

		// Prototype Read
		Vue.prototype.$read = top.$read = read;
  }
};
