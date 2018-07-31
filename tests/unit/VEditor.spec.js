import { mount } from "@vue/test-utils";
import VEditor from "@/components/VEditor.vue";

describe("VEditor.vue", () => {
  it("renders component", () => {
    const wrapper = mount(VEditor);
    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = mount(VEditor, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
