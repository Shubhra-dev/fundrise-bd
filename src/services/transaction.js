import { BASE_URL } from '@/services/BASE_URL';
import { secureGet } from '@/utils/http';

export async function getTransactions() {
  return await secureGet(`${BASE_URL}/investor-panel/transactions/project-investments`);
}
export async function getTransactionsDetails(id) {
  return await secureGet(`${BASE_URL}/investor-panel/transactions/project-investments/${id}`);
}
