import { BASE_URL } from '@/services/BASE_URL';
import { publicPost } from '@/utils/http';

export async function loginRequest(userCredentials) {
  return publicPost(`${BASE_URL}/investor-panel/login`, userCredentials);
}
