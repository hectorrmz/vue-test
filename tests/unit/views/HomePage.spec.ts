import { shallowMount } from '@vue/test-utils';
import store from '@/store/store';
import HomePage from '@/views/HomePage.vue';

describe('HomePage.vue', () => {
  it('should render', () => {
    const wrapper = shallowMount(HomePage, {
      store,
    });
    expect(wrapper.text()).toMatch('User Identifier');
  });

  it('should render all users', () => {
    const wrapper = shallowMount(HomePage, {
      store,
    });

    const users = wrapper.findAll('.user');
    expect(users.length).toBe(8);
  });
});
