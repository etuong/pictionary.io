import Vue from "vue";
import router from "./router.js";
import App from "./App.vue";
import VueSocketIO from "vue-socket.io";
import Colors from "./styles/variables.scss";
import VueSweetAlert from "vue-sweetalert2";
import "./registerServiceWorker";
import "./styles/index.scss";

Vue.config.productionTip = false;

// Vue + Socket.io
Vue.use(
    new VueSocketIO({
      debug: false,
      // connection: "https://charadesio.herokuapp.com/",
      connection: "http://localhost:5050",
    })
);

// const socket = io('http://localhost:5050\'');
//
// Vue.use(VueSocketIOExt, socket);
//

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
