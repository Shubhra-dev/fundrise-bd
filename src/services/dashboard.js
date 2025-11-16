import { BASE_URL } from '@/services/BASE_URL';
import { secureGet, securePost } from '@/utils/http';

export async function getDashboardData() {
  return await secureGet(`${BASE_URL}/investor-panel/dashboard/index`);
}
export async function getDashboardNewsfeedData() {
  return await secureGet(`${BASE_URL}/investor-panel/dashboard/newsfeed`);
}
export async function postSupportData(data) {
  return await securePost(`${BASE_URL}/investor-panel/contact-forms/store`, data);
}
