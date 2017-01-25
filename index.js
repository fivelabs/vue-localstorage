import Store from 'store2';

export default {

  install(Vue, options) {

    Vue.localStorage = Store;

    Object.defineProperties(Vue.prototype, {

      $localStorage: {

        get() {

          return Vue.localStorage;

        },

      },

    });

  },

};
