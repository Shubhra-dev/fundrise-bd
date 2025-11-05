import DashboardLayout from '../user-dashboard/DashboardLayout';
import { useEffect, useState } from 'react';
import ProfileShowModule from './ProfileShowModule';
import SubTitle from '../../components/text/SubTitle';
import Heading from '../../components/text/Heading';
import BodyBase from '../../components/text/BodyBase';
import CaptionSmall from '../../components/text/CaptionSmall';
import { MdOutlineVerified } from 'react-icons/md';
import { GoDotFill } from 'react-icons/go';
import { IoMdFemale, IoMdMale } from 'react-icons/io';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import RoundedButton from '../../components/buttons/RoundedButton';
import { useDispatch, useSelector } from 'react-redux';
import { PiPencilSimple } from 'react-icons/pi';
import ProfileChangeModal from './ProfileChangeModal';
import { getProfileData, updateProfile } from '@/services/profile';
import { userNameChange } from '@/features/authentication/authSlice';
function UserProfile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const [profileData, setProfileData] = useState(null);
  const [editModuleOpen, setEditModuleOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [showProfileChange, setShowProfileChange] = useState(false);
  const [isError, setIsError] = useState({ state: false, msg: '' });
  const [isEditError, setIsEditError] = useState({ state: false, msg: '' });
  const [isEditSuccess, setIsEditSuccess] = useState({ state: false, msg: '' });
  useEffect(() => {
    const fetchBrowseCompaniesData = async () => {
      setIsLoading(true);
      try {
        const data = await getProfileData();
        if (data.success) {
          setProfileData(data.result.investor);
        } else {
          setIsError({ state: true, msg: 'Error fetching data!' });
        }
      } catch (error) {
        setIsError({ state: true, msg: error.message });
      } finally {
        setIsLoading(false);
      }
    };
    fetchBrowseCompaniesData();
  }, []);
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setIsEditing(true);
      setIsEditError({ state: false, msg: '' });
      const data = await updateProfile(profileData);
      if (data.success) {
        dispatch(userNameChange(profileData.first_name));
        setIsEditSuccess({
          state: true,
          msg: 'Successfully Changed. Redirecting...',
        });
        setTimeout(() => {
          setIsEditSuccess({ state: false, msg: '' });
          setEditModuleOpen(false);
        }, 3000);
      }
    } catch (error) {
      setIsEditError({ state: true, msg: error.message });
      setTimeout(() => {
        setIsEditError({ state: false, msg: '' });
      }, 3000);
    } finally {
      setIsEditing(false);
    }
  }
  return (
    <DashboardLayout activeTab={10}>
      {showProfileChange && (
        <ProfileChangeModal
          user={user}
          setShowProfileChange={setShowProfileChange}
          userData={profileData}
          setUserData={setProfileData}
        />
      )}
      <div className="mt-20 sm:mt-5 rounded-md bg-gray-50 dark:bg-backgroundTertiary sm:px-5 py-2.5 min-h-screen">
        {isError.state && (
          <div className="p-4">
            <Heading align={`text-center`} textColor={`text-danger`}>
              {isError.msg}
            </Heading>
          </div>
        )}
        {isLoading && (
          <div className="p-4">
            <BodyBase align={`text-center`}>Loading...</BodyBase>
          </div>
        )}
        {profileData && !isError.state && !isLoading && (
          <>
            <div className="flex items-center justify-center">
              <div className="w-max m-auto relative">
                <img
                  src={profileData.profile_image}
                  alt="profile image"
                  className="w-[100px] h-[100px] rounded-full border-[6px] border-btext-1-base -mb-4"
                />
                <div
                  onClick={() => setShowProfileChange(true)}
                  className="absolute cursor-pointer bottom-0 right-0 bg-white border-[1px] border-secondary rounded-full p-0.5"
                >
                  <PiPencilSimple className="text-xl" />
                </div>
              </div>
            </div>
            <div className="px-4 pt-6 pb-6 shadow-allSide shadow-gray-200 dark:shadow-gray-700 rounded-md tab:w-3/4 m-auto">
              <div className="my-2 flex items-center justify-center gap-4">
                {profileData.is_email_verified && (
                  <div className="flex items-center justify-normal gap-1 bg-blue-200 rounded px-2 py-1">
                    <MdOutlineVerified className="text-blue-800" />
                    <CaptionSmall textColor={`text-blue-800`}>Email</CaptionSmall>
                  </div>
                )}
                {profileData.is_phone_number_verified && (
                  <div className="flex items-center justify-normal gap-1 bg-teal-200 rounded px-2 py-1">
                    <MdOutlineVerified className="text-teal-800" />
                    <CaptionSmall textColor={`text-teal-800`}>Mobile</CaptionSmall>
                  </div>
                )}
              </div>
              <div className="flex items-center justify-center gap-4">
                <SubTitle font={`font-clash`}>
                  {profileData.first_name} {profileData.last_name}
                </SubTitle>
                {profileData.gender === 'male' && (
                  <IoMdMale
                    className="font-bold font-clash text-3xl text-btext-1-base"
                    title="Male"
                  />
                )}
                {profileData.gender === 'female' && (
                  <IoMdFemale
                    className="font-bold font-clash text-3xl text-btext-1-base"
                    title="Female"
                  />
                )}
              </div>
              <BodyBase align={`text-center`} extraClass={`mt-2`}>
                {profileData.email}
              </BodyBase>
              <div className="mt-2 p-2 w-max m-auto bg-btext-1-base/10 rounded flex items-center justify-center gap-1">
                <GoDotFill className="text-green-600" />
                <CaptionSmall fontWeight={`font-semibold`} font={`font-clash`}>
                  Active
                </CaptionSmall>
              </div>
              {!editModuleOpen && (
                <ProfileShowModule
                  setEditModuleOpen={setEditModuleOpen}
                  profileData={profileData}
                />
              )}
              {editModuleOpen && (
                <form onSubmit={handleSubmit}>
                  <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="w-full sm:w-1/2">
                      <BodyBase extraClass={`pl-2`}>First Name</BodyBase>
                      <input
                        className="mt-1 w-full rounded-md border border-borderPrimary py-2 px-3 dark:text-white"
                        value={profileData.first_name || 'Not Added Yet'}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            first_name: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="w-full sm:w-1/2">
                      <BodyBase extraClass={`pl-2`}>Last Name</BodyBase>
                      <input
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            last_name: e.target.value,
                          })
                        }
                        className="mt-1 w-full rounded-md border border-borderPrimary py-2 px-3 dark:text-white"
                        value={profileData.last_name || 'Not Added Yet'}
                      />
                    </div>
                  </div>
                  <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="w-full sm:w-1/2">
                      <BodyBase extraClass={`pl-2`}>Gender</BodyBase>
                      <select
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            gender: e.target.value,
                          })
                        }
                        className="mt-1 w-full rounded-md border border-borderPrimary py-2 px-3 dark:text-white"
                        value={profileData.gender || ''}
                      >
                        <option value="" disabled>
                          Select gender
                        </option>
                        <option value="male"> Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                    <div className="w-full sm:w-1/2">
                      <BodyBase extraClass={`pl-2`}>Profession</BodyBase>
                      <input
                        className="mt-1 w-full rounded-md border border-borderPrimary py-2 px-3 dark:text-white"
                        value={profileData.profession}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            profession: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="w-full sm:w-1/2">
                      <BodyBase extraClass={`pl-2`}>Organization</BodyBase>
                      <input
                        className="mt-1 w-full rounded-md border border-borderPrimary py-2 px-3 dark:text-white"
                        value={profileData.organization}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            organization: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="w-full sm:w-1/2">
                      <BodyBase extraClass={`pl-2`}>Designation</BodyBase>
                      <input
                        className="mt-1 w-full rounded-md border border-borderPrimary py-2 px-3 dark:text-white"
                        value={profileData.designation}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            designation: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="w-full sm:w-1/2">
                      <BodyBase extraClass={`pl-2`}>Phone</BodyBase>
                      <input
                        className="mt-1 w-full rounded-md border border-borderPrimary py-2 px-3 dark:text-white"
                        value={profileData.phone_number}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            phone_number: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="w-full sm:w-1/2">
                      <BodyBase extraClass={`pl-2`}>Address</BodyBase>
                      <input
                        className="mt-1 w-full rounded-md border border-borderPrimary py-2 px-3 dark:text-white"
                        value={profileData.address}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            address: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  {isEditError.state && (
                    <div className="text-center w-full mt-2 right-auto bg-red-200 text-red-700 text-semibold p-2 rounded">
                      {isEditError.msg}
                    </div>
                  )}
                  {isEditSuccess.state && (
                    <div className="text-center w-full mt-2 right-auto bg-green-200 text-green-700 text-semibold p-2 rounded">
                      {isEditSuccess.msg}
                    </div>
                  )}
                  <div className="mt-6 flex w-full justify-center gap-4">
                    <RoundedButton
                      label={`Cancel`}
                      onClick={() => setEditModuleOpen(false)}
                      bg={`bg-white`}
                      border={`border border-borderPrimary`}
                      textColor={`text-paragraph`}
                      width={`w-max`}
                      padding={`px-6 py-2.5`}
                    />
                    <PrimaryButton label={`Save`} type={`submit`} />
                  </div>
                </form>
              )}
            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  );
}

export default UserProfile;
