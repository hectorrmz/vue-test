import { shallowMount } from '@vue/test-utils';
import store from '@/store/store';
import ContactPage from '@/views/ContactPage.vue';

describe('ContactPage.vue', () => {
  it('should render Contact Page view', () => {
    const wrapper = shallowMount(ContactPage, {
      store,
    });
    expect(wrapper.text()).toMatch('Contact Page');
  });
});
