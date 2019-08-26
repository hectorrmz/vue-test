import Axios from 'axios';
import { User } from '@/models/User';

const RESOURCE_NAME = 'users';

export default {
  getAll() {
    return Axios.get(RESOURCE_NAME);
  },
  createUser(user: User) {
    return Axios.post(RESOURCE_NAME, user);
  },
  updateUser(user: User) {
    return Axios.put(`${RESOURCE_NAME}/${user.id}`, user);
  },
};
