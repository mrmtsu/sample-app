import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyDcldIc5N-wmZN4Lrl5GPbPAhfll4-FHDQ",
  authDomain: "myaddresspj-d02b1.firebaseapp.com",
  databaseURL: "https://myaddresspj-d02b1.firebaseio.com",
  projectId: "myaddresspj-d02b1",
  storageBucket: "myaddresspj-d02b1.appspot.com",
  messagingSenderId: "1002235137222",
  appId: "1:1002235137222:web:b02328a976351b87995bc7",
  measurementId: "G-HJTV8M4EDQ",
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
