import Vue from 'vue';
import Vuex from 'vuex';
import { User } from '../models/User';
import yeNoService from '@/services/yesno';
import userService from '@/services/users';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    users: [] as User[],
    userModel: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: '',
    } as User,
    usersLoaded: false,
  },
  getters: {
    filteredUser: state => (id: number) =>
      id ? state.users[id - 1] : { ...state.userModel },
    adminUsers: state => state.users.filter(user => user.role === 'Admin'),
  },
  mutations: {
    setUsers(state, users: User[]) {
      state.users = users;
      state.usersLoaded = true;
    },
  },
  actions: {
    async submitUser({ commit }, user) {
      if (user.id) {
        await userService.updateUser(user);
      } else {
        await userService.createUser(user);
      }
    },
    async loadUsers({ commit }) {
      let users: User[] = await userService
        .getAll()
        .then(res => res.data)
        .then(data => (users = data));

      commit('setUsers', users);
    },
  },
});
