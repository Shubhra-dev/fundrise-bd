import { BASE_URL } from '@/services/BASE_URL';
import { secureGet } from '@/utils/http';

export async function getDashboardData() {
  return await secureGet(`${BASE_URL}/investor-panel/dashboard/index`);
}
export async function getDashboardNewsfeedData() {
  return await secureGet(`${BASE_URL}/investor-panel/dashboard/newsfeed`);
}
