import { mount } from "@vue/test-utils";
import Event from "../views/Event.vue";
import VueRouter from "vue-router";
import { createStore } from 'vuex'

//const store = createStore({
//  state() {
//    return {
//      count: 0,
//    };
//  },
//  mutations: {
//    increment(state: any) {
//      state.count += 1;
//    },
//  },
//});

//test("Form data binding works", async () => {
//  const $route = {
//    params: {
//      id: 100,
//    },
//  };
//  const $router = {
//    push: jest.fn(),
//  };
//  const wrapper = mount(Event, {
//    data() {
//      return {
//        eventName: "Test event",
//        eventRange: "14 May - 21 June",
//        usernameExist: true,
//      };
//    },
//    global: {
//      mocks: {
//        $route,
//        $router,
//      },
//      plugins: [store],
//    },
//  });
//  expect(wrapper.find("h1")).toBe("Test event");
//  expect(wrapper.find(".date-chooser > p")).toBe("14 May - 21 June");
//});
