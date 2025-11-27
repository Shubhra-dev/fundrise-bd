import { useDispatch } from 'react-redux';
import { BiCheck } from 'react-icons/bi';
import { updateProfile, uploadProfileImage } from '@/services/profile';
import { profileImageChange } from '@/features/authentication/authSlice';
import SubHeading from '@/components/text/SubHeading';
import BodyBase from '@/components/text/BodyBase';
import { useEffect, useRef, useState } from 'react';

function ProfileChangeModal({ setShowProfileChange, user, userData, setUserData }) {
  const middleRef = useRef(null);
  const dispatch = useDispatch();

  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  // Close on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (middleRef.current && !middleRef.current.contains(event.target)) {
        setShowProfileChange(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setShowProfileChange]);

  async function handleUpload(event) {
    const file = event.target.files?.[0];
    if (!file || !userData) return;

    setIsSuccess(false);
    setIsError(false);
    setIsLoading(true);
    setIsUpdating(true);

    try {
      // 1) Upload image
      const result = await uploadProfileImage(file);
      const filePath = result.file_path;

      // 2) Update local profile state
      const updatedProfile = { ...userData, profile_image: filePath };
      setUserData(updatedProfile);

      // 3) Persist profile to backend
      const data = await updateProfile(updatedProfile);
      if (data.success) {
        dispatch(profileImageChange(filePath));
        setIsSuccess(true);
      } else {
        setIsError(true);
      }
    } catch (error) {
      console.error(error);
      window.alert('Failed to upload file.');
      setIsError(true);
    } finally {
      setIsLoading(false);
      setIsUpdating(false);
    }
  }

  const currentImage = userData?.profile_image || user?.profileImage;

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black/20 dark:bg-white/30 z-[999999]">
      <div className="flex items-center justify-center h-full">
        <div
          ref={middleRef}
          className="w-full sm:w-3/5 tab:w-max p-3 tab:p-6 rounded-md bg-white dark:bg-backgroundTertiary border-2 border-gray-300 dark:border-gray-500 max-h-[90%] relative"
        >
          <SubHeading align="text-center font-poppins">Change Profile Image</SubHeading>

          <div className="w-max m-auto mt-4">
            {!isLoading && (
              <input
                type="file"
                accept=".jpeg,.jpg,.png,.svg,image/*"
                onChange={handleUpload}
                className="py-2 px-2 dark:text-white"
              />
            )}

            {isLoading && !isError && (
              <BodyBase textColor="text-accent" font="font-poppins" fontWeight="font-semibold">
                Uploading . . .
              </BodyBase>
            )}

            {isError && !isLoading && (
              <BodyBase textColor="text-accent" font="font-poppins" fontWeight="font-semibold">
                Something Wrong! Try Again Later.
              </BodyBase>
            )}
          </div>

          {isSuccess && (
            <div className="bg-btext-1-base/10 p-2 rounded-md flex items-center justify-center gap-2 mt-3">
              <BiCheck className="text-btext-1-base text-xl font-bold" />
              <BodyBase
                textColor="text-btext-1-base"
                font="font-poppins"
                fontWeight="font-semibold"
                align="text-center"
              >
                Changed Successfully
              </BodyBase>
            </div>
          )}

          <div className="w-[120px] h-[120px] m-auto rounded-full border-4 border-secondary mt-4 overflow-hidden">
            {isUpdating && !isError && (
              <BodyBase align="text-center m-auto">Loading Image…</BodyBase>
            )}
            {!isUpdating && currentImage && (
              <img
                src={currentImage}
                alt="profile"
                className="w-full h-full rounded-full object-cover object-center"
              />
            )}
            {!isUpdating && !currentImage && (
              <BodyBase align="text-center m-auto text-sm text-sub-heading">No image</BodyBase>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileChangeModal;
