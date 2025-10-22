import { BASE_URL } from '@/services/BASE_URL';
import { publicPost } from '@/utils/http';

export async function loginRequest(userCredentials) {
  return publicPost(`${BASE_URL}/investor-panel/login`, userCredentials);
}
export async function emailVerify(email) {
  return publicPost(`${BASE_URL}/investor-panel/registration-step-1`, { email });
}
export async function emailVerifyForgotPassword(email) {
  return publicPost(`${BASE_URL}/investor-panel/forgot-password/submit-email`, { email });
}
export async function otpVerify(email, code) {
  return publicPost(`${BASE_URL}/investor-panel/registration-step-2`, { email, code });
}
export async function otpVerifyForgotPassword(email, otp) {
  return publicPost(`${BASE_URL}/investor-panel/forgot-password/submit-otp`, { email, otp });
}
export async function registrationRequest(userData) {
  return publicPost(`${BASE_URL}/investor-panel/registration-step-3`, userData);
}
export async function passwordReset(userData) {
  return publicPost(`${BASE_URL}/investor-panel/forgot-password/submit-new-password`, userData);
}
