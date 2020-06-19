import Vue from "vue";
import VueSocketIO from "vue-socket.io";
import VueSweetAlert from "vue-sweetalert2";
import router from "./router.js";
import App from "./App.vue";
import Colors from "./styles/variables.scss";
import "./registerServiceWorker";

// Bulma
import "./styles/index.scss";

Vue.config.productionTip = false;

const io = require("socket.io-client");
const socket = io.connect("http://localhost:5050", { reconnect: true });
socket.on("room_created", (roomID) => {
  console.log(`I am here ethhhaaan: ${roomID}`);
})
// Vue + Socket.io
Vue.use(
  new VueSocketIO({
    debug: false,
    // connection: "https://charadesio.herokuapp.com/",
    connection: "http://localhost:5050",
  })
);

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
