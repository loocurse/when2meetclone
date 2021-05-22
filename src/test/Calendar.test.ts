import { mount } from "@vue/test-utils";
import Calendar from "../components/Calendar.vue";

test("Clicking calendar hourbox should make it blue", () => {
  const wrapper = mount(Calendar);
  const landing = wrapper.find("");
  expect(landing.text()).toBe("Bring your teamtogether");
});
