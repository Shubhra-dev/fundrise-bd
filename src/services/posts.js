import { BASE_URL } from '@/services/BASE_URL';
import { publicGet, secureGet } from '@/utils/http';

export async function getPosts({
  searchValue = '',
  perPage = 10,
  page = 1,
  orderColumn = 'id',
  orderType = 'desc',
  isFeat = true,
} = {}) {
  const params = new URLSearchParams({
    search_value: searchValue,
    per_page: perPage,
    page: page,
    order_column: orderColumn,
    order_type: orderType,
    is_featured: isFeat,
  });

  return await publicGet(`${BASE_URL}/posts?${params.toString()}`);
}
export async function getUserNewsfeed({
  searchValue = '',
  perPage = 5,
  page = '',
  orderColumn = '',
  orderType = '',
  month = '',
  year = '',
} = {}) {
  const params = new URLSearchParams({
    search_value: searchValue,
    per_page: perPage,
    page: page,
    order_column: orderColumn,
    order_type: orderType,
    month: month,
    year: year,
  });

  return await secureGet(`${BASE_URL}/investor-panel/newsfeed/posts?${params.toString()}`);
}
export async function getPostDetails(slug) {
  return await publicGet(`${BASE_URL}/posts/${slug}`);
}
