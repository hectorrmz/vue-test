import { shallowMount } from '@vue/test-utils';
import AboutPage from '@/views/AboutPage.vue';

describe('AboutPage.vue', () => {
  it('should render', () => {
    const wrapper = shallowMount(AboutPage);
    expect(wrapper.text()).toMatch('About Page');
  });
});
