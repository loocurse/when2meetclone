import { mount } from "@vue/test-utils";
import NewEvent from "../views/NewEvent.vue";

test("Form data binding works", async () => {
  const wrapper = mount(NewEvent);
  const input = wrapper.get("input[type=text]");
  await input.setValue("Event Name blabla");
  expect((<HTMLInputElement>input.element).value).toBe("Event Name blabla");
});

test("Event name cannot be empty", async () => {
  const wrapper = mount(NewEvent);
  await wrapper.find("button").trigger("click");
  expect(wrapper.text()).toContain("Event name cannot be empty");
});

test("Start date cannot be later than end date", async () => {
  const wrapper = mount(NewEvent);
  await wrapper.get("input[type=text]").setValue("EVENT LALA");
  await wrapper.get("input[name=sdate]").setValue("2020-05-09");
  await wrapper.get("input[name=edate]").setValue("2020-04-09");
  await wrapper.get("input[name=stime]").setValue("09:00");
  await wrapper.get("input[name=etime]").setValue("10:00");
  await wrapper.find("button").trigger("click");
  expect(wrapper.text()).toContain("Start date later than end date");
  expect(wrapper.text()).not.toContain("Start time later than end time");
  expect(wrapper.text()).not.toContain("Event name cannot be empty");
});

test("Start date cannot be later than end date", async () => {
  const wrapper = mount(NewEvent);
  await wrapper.get("input[type=text]").setValue("EVENT LALA");
  await wrapper.get("input[name=sdate]").setValue("2020-05-09");
  await wrapper.get("input[name=edate]").setValue("2020-06-09");
  await wrapper.get("input[name=stime]").setValue("11:00");
  await wrapper.get("input[name=etime]").setValue("10:00");
  await wrapper.find("button").trigger("click");
  expect(wrapper.text()).toContain("Start time later than end time");
  expect(wrapper.text()).not.toContain("Start date later than end date");
});
