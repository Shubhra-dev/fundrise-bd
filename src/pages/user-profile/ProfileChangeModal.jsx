import { useEffect, useRef, useState } from 'react';
import SubHeading from '../../components/text/SubHeading';
import BodyBase from '../../components/text/BodyBase';
import { useDispatch } from 'react-redux';
import { BiCheck } from 'react-icons/bi';
import { updateProfile, uploadProfileImage } from '@/services/profile';
import { profileImageChange } from '@/features/authentication/authSlice';

function ProfileChangeModal({ setShowProfileChange, user, userData, setUserData }) {
  const middleRef = useRef(null);
  const dispatch = useDispatch();
  const [fileUrl, setFileUrl] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (middleRef.current && !middleRef.current.contains(event.target)) {
        setShowProfileChange(false); // Call the function passed via props
      }
    };

    // Attach event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setShowProfileChange]);
  useEffect(() => {
    async function fetchUserData() {
      if (fileUrl) {
        setIsUpdating(true);
        try {
          const data = await updateProfile(userData);
          if (data.success) {
            setIsSuccess(true);
            dispatch(profileImageChange(fileUrl));
            setIsUpdating(false);
          }
        } catch (error) {
          console.log(error);
          setIsError(true);
          setIsUpdating(false);
        }
      }
    }
    fetchUserData();
  }, [fileUrl, userData, dispatch]);
  async function handleUpload(event) {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      setIsSuccess(false);
      setIsLoading(true);
      setIsError(false);
      try {
        const result = await uploadProfileImage(file);
        setUserData((prev) => ({ ...prev, profile_image: result.file_path }));
        setFileUrl(result.file_path);
        console.log(result.file_path);
        setIsSuccess(true);
      } catch (error) {
        window.alert('Failed to upload file.');
        setIsError(true);
        setIsLoading(false);
      }
    }
  }
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black/20 dark:bg-white/30 z-[999999]">
      <div className="flex items-center justify-center h-full">
        <div
          ref={middleRef}
          className={`w-full sm:w-3/5 tab:w-max p-3 tab:p-6 rounded-md bg-white dark:bg-backgroundTertiary border-2 border-gray-300 dark:border-gray-500  max-h-[90%] relative`}
        >
          <SubHeading align={`text-center font-poppins`}>Change Profile Image</SubHeading>
          <div className="w-max m-auto mt-4">
            {!isLoading && (
              <input
                type="file"
                accept=".jpeg,.jpg,.png,.svg"
                onChange={handleUpload}
                className="py-2 px-2 dark:text-white"
              />
            )}
            {isLoading && !isError && (
              <BodyBase
                textColor={`text-accent`}
                font={`font-poppins`}
                fontWeight={`font-semibold`}
              >
                Uploading . . .
              </BodyBase>
            )}
            {isError && !isLoading && (
              <BodyBase
                textColor={`text-accent`}
                font={`font-poppins`}
                fontWeight={`font-semibold`}
              >
                Something Wrong! Try Again Later.
              </BodyBase>
            )}
          </div>
          {isSuccess && (
            <div className="bg-btext-1-base/10 p-2 rounded-md flex items-center justify-center gap-2">
              <BiCheck className="text-btext-1-base text-xl font-bold" />
              <BodyBase
                textColor={`text-btext-1-base`}
                font={`font-poppins`}
                fontWeight={`font-semibold`}
                align={`text-center`}
              >
                Changed Successfully
              </BodyBase>
            </div>
          )}

          <div className="w-[120px] h-[120px] m-auto rounded-full border-4 border-secondary mt-4">
            {isUpdating && !isError && (
              <BodyBase align={`text-center m-auto`}>Loading Image...</BodyBase>
            )}
            {!isUpdating && (
              <img
                src={user.profileImage}
                alt="profle image"
                className="w-full h-full rounded-full object-center"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileChangeModal;
