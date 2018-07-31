import { shallowMount } from "@vue/test-utils";
import VEditor from "@/components/VEditor.vue";

describe("VEditor.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(VEditor, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
