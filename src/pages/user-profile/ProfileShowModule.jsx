import BodyBase from '../../components/text/BodyBase';
import RoundedButton from '../../components/buttons/RoundedButton';
function ProfileShowModule({ profileData, setEditModuleOpen }) {
  return (
    <>
      <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="w-full sm:w-1/2">
          <BodyBase extraClass={`pl-2`}>Organization</BodyBase>
          <div className="mt-1 w-full rounded-md border border-borderPrimary py-2 px-3 dark:text-white">
            {profileData.organization || 'Not Added Yet'}
          </div>
        </div>
        <div className="w-full sm:w-1/2">
          <BodyBase extraClass={`pl-2`}>Designation</BodyBase>
          <div className="mt-1 w-full rounded-md border border-borderPrimary py-2 px-3 dark:text-white">
            {profileData.designation || 'Not Added Yet'}
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="w-full sm:w-1/2">
          <BodyBase extraClass={`pl-2`}>Phone</BodyBase>
          <div className="mt-1 w-full rounded-md border border-borderPrimary py-2 px-3 dark:BodyBase-white">
            {profileData.phone_number || 'Not Added Yet'}
          </div>
        </div>
        <div className="w-full sm:w-1/2">
          <BodyBase extraClass={`pl-2`}>Address</BodyBase>
          <div className="mt-1 w-full rounded-md border border-borderPrimary py-2 px-3 dark:text-white">
            {profileData.address || 'Not Added Yet'}
          </div>
        </div>
      </div>
      <div className="mt-6 flex w-full justify-center">
        <RoundedButton
          label={`Edit Profile`}
          onClick={() => setEditModuleOpen(true)}
          bg={`bg-btext-1-base`}
          textColor={`text-white`}
          width={`w-max`}
          padding={`px-6 py-2.5`}
        />
      </div>
    </>
  );
}

export default ProfileShowModule;
