/* eslint-disable no-undef */

import { mount } from "@vue/test-utils";
import Home from "../views/Home.vue";

test("addition", () => {
  const wrapper = mount(Home);
  const landing = wrapper.get('[data-test="landing"]');
  expect(landing.text()).toBe("Bring your teamtogether");
});
