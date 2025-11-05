import { BASE_URL } from '@/services/BASE_URL';
import { secureGet, securePost } from '@/utils/http';

export async function getProfileData() {
  return await secureGet(`${BASE_URL}/investor-panel/my-account`);
}
export async function updateProfile(formData) {
  console.log(formData);
  return await securePost(`${BASE_URL}/investor-panel/my-account-update`, formData);
}
export const uploadProfileImage = async (file) => {
  const formdata = new FormData();
  formdata.append('profile_image', file);

  try {
    // securePost will attach auth headers via tokenVault and handle FormData correctly
    return await securePost(`${BASE_URL}/investor-panel/profile-image-update`, formdata);
  } catch (error) {
    console.error('Error updating profile image:', error);
    throw error;
  }
};
