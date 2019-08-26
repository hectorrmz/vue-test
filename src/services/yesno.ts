import axios from 'axios';

export default {
  getAnswer() {
    return axios({ url: 'api', baseURL: 'https://yesno.wtf/' });
  },
};
