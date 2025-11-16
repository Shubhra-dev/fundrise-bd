import { BASE_URL } from '@/services/BASE_URL';
import { secureGet, securePost } from '@/utils/http';

export async function getInvestProjects({
  projectCompanyId = '',
  assetTypeId = '',
  location = '',
  orderType = '',
  searchValue = '',
  perPage = 5,
  page = '',
  orderColumn = '',
  status = 'Active',
} = {}) {
  const params = new URLSearchParams({
    search_value: searchValue,
    per_page: perPage,
    page: page,
    order_column: orderColumn,
    order_type: orderType,
    project_company_id: projectCompanyId,
    asset_type_id: assetTypeId,
    location: location,
    status: status,
  });

  return await secureGet(`${BASE_URL}/investor-panel/investment/projects?${params.toString()}`);
}

export async function postInvestmentRequest(payload) {
  return await securePost(`${BASE_URL}/investor-panel/investment/requests`, payload);
}
