import { mount } from "@vue/test-utils";
import VInput from "@/components/VInput";

describe("VInput.vue", () => {
  it("renders component", () => {
    const wrapper = mount(VInput);
    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders props.value when passed", () => {
    const wrapper = mount(VInput, {
      propsData: { value: "Initial input value" }
    });
    console.log(wrapper.vm);
    expect(wrapper.vm.value).toBe("Initial input value");
    // const inputEl = wrapper.find('.v-input')
    // expect(wrapper.text()).toEqual(value);
  });
});
