import { BASE_URL } from '@/services/BASE_URL';
import { publicGet } from '@/utils/http';

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
export async function getPostDetails(slug) {
  return await publicGet(`${BASE_URL}/posts/${slug}`);
}
