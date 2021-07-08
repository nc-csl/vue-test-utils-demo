import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App.vue", () => {
  it("renders component", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.find("#cvr-paa-virk").exists()).toBeTruthy();
    console.log(wrapper.html());
  });
});
