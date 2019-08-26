import { shallowMount } from '@vue/test-utils';
import store from '@/store/store';
import UserForm from '@/components/UserForm.vue';

describe('UserForm.vue', () => {
  let wrapper: any;
  const id = 'ID';

  beforeEach(() => {
    wrapper = shallowMount(UserForm, {
      store,
      props: { user: {} },
      computed: {
        id() {
          return id;
        },
      },
    });
  });

  it('renders id value', () => {
    expect(wrapper.text()).toMatch(id);
  });

  it('renders User Form', () => {
    const inputs = wrapper.findAll('input');
    expect(inputs.length).toBe(5);
  });
});
