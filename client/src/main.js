import Vue from "vue";
import VueSocketIOExt from 'vue-socket.io-extended';
import VueSweetAlert from "vue-sweetalert2";
import router from "./router.js";
import App from "./App.vue";
import Colors from "./styles/variables.scss";
import io from "socket.io-client"
import "./registerServiceWorker";
import "./styles/index.scss";

Vue.config.productionTip = false;

const socket = io('http://localhost:5050\'');

Vue.use(VueSocketIOExt, socket);

// SweetAlert2
Vue.use(VueSweetAlert, {
  confirmButtonColor: Colors.primary,
  cancelButtonColor: Colors.light,
});

// Initializing
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
