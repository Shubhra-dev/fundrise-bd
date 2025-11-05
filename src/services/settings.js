import { BASE_URL } from '@/services/BASE_URL';
import { secureGet, securePost } from '@/utils/http';

export async function changePassword(formData) {
  return await securePost(`${BASE_URL}/investor-panel/change-password`, formData);
}

export async function postAccountSettings(data) {
  return await securePost(`${BASE_URL}/investor-panel/account-settings`, data);
}
export async function getAccountSettings() {
  return await secureGet(`${BASE_URL}/investor-panel/account-settings-show`);
}
