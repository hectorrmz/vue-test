import Vue from 'vue';
import Vuex from 'vuex';
import { User } from '../models/User';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    users: <User[]>[
      {
        id: 1,
        username: 'JohnDoe_34',
        email: 'johndoe23@email.com',
        password: 'Pass123.',
        confirmPassword: '',
        role: 'Admin',
      },
      {
        id: 2,
        username: 'JohnDoe_34',
        email: 'johndoe23@email.com',
        password: 'Pass123.',
        confirmPassword: '',
        role: 'Admin',
      },
      {
        id: 3,
        username: 'JohnDoe_34',
        email: 'johndoe23@email.com',
        password: 'Pass123.',
        confirmPassword: '',
        role: 'Normal',
      },
      {
        id: 4,
        username: 'JohnDoe_34',
        email: 'johndoe23@email.com',
        password: 'Pass123.',
        confirmPassword: '',
        role: 'Super',
      },
      {
        id: 5,
        username: 'JohnDoe_34',
        email: 'johndoe23@email.com',
        password: 'Pass123.',
        confirmPassword: '',
        role: 'Normal',
      },
      {
        id: 6,
        username: 'JohnDoe_34',
        email: 'johndoe23@email.com',
        password: 'Pass123.',
        confirmPassword: '',
        role: 'Normal',
      },
      {
        id: 7,
        username: 'JohnDoe_34',
        email: 'johndoe23@email.com',
        password: 'Pass123.',
        confirmPassword: '',
        role: 'Slave',
      },
      {
        id: 8,
        username: 'JohnDoe_34',
        email: 'johndoe23@email.com',
        password: 'Pass123.',
        confirmPassword: '',
        role: 'Slave',
      },
    ],
    id: 0,
    userModel: <User>{
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: '',
    },
  },
  getters: {
    filteredUser: state => (id: number) =>
      id ? state.users[id - 1] : { ...state.userModel },
  },
  mutations: {
    changeId(state, value: number) {
      state.id = value;
    },
    updateUser(state, user: User) {
      state.users[user.id - 1] = user;
    },
    createUser(state, user: User) {
      state.users.push(user);
    },
  },
  actions: {},
});
