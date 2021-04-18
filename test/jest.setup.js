// ./test/jest.setup.js

import Vue from "vue";
import moment from "moment";
import vueMoment from "vue-moment";
import VueLodash from "vue-lodash";
import snackbar from "@/components/snackbar";
import stationSearch from "@/components/stationSearch";


import lodash from 'lodash';

Vue.prototype.$appURL = process.env.NUXT_ENV_ENVIRONMENT == 'production' ? process.env.NUXT_APP_URL : '/';

window.moment = moment;

Vue.use(vueMoment);
Vue.use(VueLodash, { lodash: lodash });
Vue.component("snackbar", snackbar);
Vue.component("stationSearch", stationSearch);


