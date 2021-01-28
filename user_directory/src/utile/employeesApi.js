import axios from 'axios';

function employeesApi() {
  return axios.get(
    'https://randomuser.me/api/?results=100&format=json&inc=name,email,phone,picture,id&nat=us'
  );
}

export default employeesApi;