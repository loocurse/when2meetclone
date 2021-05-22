import { mount } from "@vue/test-utils";
import Home from "../views/Home.vue";

test("Test landing page text", () => {
  const wrapper = mount(Home);
  const landing = wrapper.get('[data-test="landing"]');
  expect(landing.text()).toBe("Bring your teamtogether");
});

