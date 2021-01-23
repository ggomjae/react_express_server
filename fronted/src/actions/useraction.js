import axios from 'axios';
import { REGISTER_USER } from './types';

export function registerUser(dataToSubmit) {

  // promise 객체 반환
  const request = axios.post('/users', dataToSubmit)
  .then(res => res.data)
  .catch(e => alert(e.response.message))

  return {
      type: REGISTER_USER,
      payload: request
  };
}