import { BASE_URL } from '@/services/BASE_URL';
import { secureGet } from '@/utils/http';

export async function getPortfolioIndex() {
  return await secureGet(`${BASE_URL}/investor-panel/portfolio/index`);
}
export async function getPortfolioBreakdown() {
  return await secureGet(`${BASE_URL}/investor-panel/portfolio/breakdown`);
}
