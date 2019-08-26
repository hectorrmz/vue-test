import Axios from 'axios';

const RESOURCE_NAME = '';

export default {
  getAnswer() {
    return Axios.get(RESOURCE_NAME);
  },
};
