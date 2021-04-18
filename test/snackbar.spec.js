import { mount, createLocalVue } from "@vue/test-utils";
import { shallowMount } from "@vue/test-utils";
import Vuetify from "vuetify";
import Vuex from "vuex";

import snackbar from "@/components/snackbar";
import defaultLayout from "@/layouts/default";

const localVue = createLocalVue();
localVue.use(Vuex);

let wrapper;

beforeEach(() => {
  let vuetify = new Vuetify();

  wrapper = mount(defaultLayout, {
    store: new Vuex.Store({
      state: { products: [] }
    }),
    localVue,
    vuetify,
    stubs: {
      NuxtLink: true,
      Nuxt: true
      // Any other component that you want stubbed
    }
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe("Snackbar component", () => {
  test("should generate snackbar", async () => {
    // With jest we can create snapshot files of the HTML output
    // expect(wrapper.html()).toMatchSnapshot()
    const testWrapper = shallowMount(snackbar);
    expect(testWrapper.element).toMatchSnapshot();
  });
});
