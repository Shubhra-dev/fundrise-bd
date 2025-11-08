import { BASE_URL } from '@/services/BASE_URL';
import { publicGet } from '@/utils/http';

export async function getProjects({
  searchValue = '',
  perPage = 10,
  page = 1,
  orderColumn = 'id',
  status = '',
} = {}) {
  const params = new URLSearchParams({
    search_value: searchValue,
    per_page: perPage,
    page: page,
    order_column: orderColumn,
    order_type: 'desc', // This remains fixed as per requirement
    status: status,
  });

  return await publicGet(`${BASE_URL}/projects?${params.toString()}`);
}
export async function getProjectDetails(slug) {
  return await publicGet(`${BASE_URL}/projects/${slug}`);
}
export async function getHistoricalData() {
  return await publicGet(`${BASE_URL}/fundrise-compares`);
}
export async function getRealEstateData() {
  return await publicGet(`${BASE_URL}/pages/real-estate`);
}

export async function getConsistantGrowth() {
  return await publicGet(`${BASE_URL}/consistent-growth`);
}
export async function getFaQ(page) {
  return await publicGet(`${BASE_URL}/faqs?page=${page}`);
}

export async function getHelpCenterPosts({
  searchValue = '',
  perPage = 10,
  page = 1,
  orderColumn = 'id',
  orderType = 'desc',
  postCategoryId = 9,
} = {}) {
  const params = new URLSearchParams({
    search_value: searchValue,
    per_page: perPage,
    page: page,
    order_column: orderColumn,
    order_type: orderType,
    post_category_id: postCategoryId,
  });

  return await publicGet(`${BASE_URL}/posts?${params.toString()}`);
}
