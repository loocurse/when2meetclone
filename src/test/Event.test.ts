import { mount } from "@vue/test-utils";
import Event from "../views/Event.vue";

test("Form data binding works", async () => {
  const wrapper = mount(Event, {
    data() {
      return {
        eventName: "Test event",
        eventRange: "14 May - 21 June",
        usernameExist: true,
      };
    },
  });
  expect(wrapper.find("h1")).toBe("Test event");
  expect(wrapper.find(".date-chooser > p")).toBe("14 May - 21 June");
});
