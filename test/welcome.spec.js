import { mount, createLocalVue } from "@vue/test-utils";
import { shallowMount } from "@vue/test-utils";
import Vuetify from "vuetify";
import Vuex from "vuex";

import Welcome from "@/components/welcome";

const localVue = createLocalVue();
localVue.use(Vuex);

let wrapper;

beforeEach(() => {
  let vuetify = new Vuetify();

  wrapper = shallowMount(Welcome, {
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

describe("Welcome component", () => {
  test("is fully functional", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test("should have a #RoadSurferAssignment", () => {
    const title = wrapper.find(".pa-4.ma-3");
    expect(title.element.innerHTML).toBe("#RoadSurferAssignment");
  });
});
