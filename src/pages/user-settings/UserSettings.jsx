import DashboardLayout from '../user-dashboard/DashboardLayout';
import { useEffect, useState } from 'react';
import SubHeading from '../../components/text/SubHeading';
import BodyBase from '../../components/text/BodyBase';
import BodySmall from '../../components/text/BodySmall';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import ToggleButton from './ToogleButton';
import { changePassword, getAccountSettings, postAccountSettings } from '@/services/settings';
import toast from 'react-hot-toast';

function UserSettings() {
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);
  const [isEmailNotificationEnabled, setIsEmailNotificationEnabled] = useState(false);
  const [isSMSNotificationEnabled, setIsSMSNotificationEnabled] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [message, setMessage] = useState(null);
  const [instruction, setInstruction] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [validate, setValidate] = useState({
    lengthValid: false,
    noWhitespace: false,
    hasNumber: false,
    hasUppercase: false,
    hasLowercase: false,
    hasSpecialChar: false,
  });
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAccountSettings();
        setIs2FAEnabled(data.result.account_settings.is_two_factor_authentication);
        setIsEmailNotificationEnabled(data.result.account_settings.is_email_notification);
        setIsSMSNotificationEnabled(data.result.account_settings.is_sms_notification);
      } catch (err) {
        showMessage('failed', `${err.message}`);
      }
    }
    fetchData();
  }, []);
  useEffect(() => {
    setValidate({
      lengthValid: newPassword.length >= 8 && newPassword.length <= 16,
      noWhitespace: !/\s/.test(newPassword),
      hasNumber: /\d/.test(newPassword),
      hasUppercase: /[A-Z]/.test(newPassword),
      hasLowercase: /[a-z]/.test(newPassword),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(newPassword),
    });
  }, [newPassword]);
  const showMessage = (type, text, position) => {
    setMessage({ type: type, text: text, position: position });
    setTimeout(() => {
      setMessage(null);
    }, 3000); // Message will disappear after 3 seconds
  };
  async function handlePasswordChange() {
    setIsLoading(true);
    if (newPassword === confirmNewPassword) {
      if (Object.values(validate).every((value) => value === true)) {
        try {
          const result = await changePassword({
            current_password: oldPassword,
            new_password: newPassword,
            new_password_confirmation: confirmNewPassword,
          });
          toast.success('Password changed successfully', {
            duration: 3000,
          });
          setOldPassword('');
          setNewPassword('');
          setConfirmNewPassword('');
          setInstruction(false);
        } catch (err) {
          toast.error(err.message, {
            duration: 3000,
          });
        } finally {
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
        showMessage('failed', 'Invalid Password!!', 'bottom');
      }
    } else {
      setIsLoading(false);
      showMessage('failed', 'Password did not match!', 'bottom');
    }
  }

  return (
    <DashboardLayout activeTab={11}>
      <div className="mt-16 sm:mt-5 p-4 rounded-md bg-gray-50 w-full dark:bg-backgroundTertiary min-h-screen sm:px-5 py-2.5">
        <SubHeading>Account Settings</SubHeading>
        <BodyBase extraClass={`py-2`}>
          Manage your account preferences and security settings.
        </BodyBase>
        <div className="mt-4">
          <ToggleButton
            label="Two-Factor-Authentication"
            description="Add an extra layer of security to your account"
            enabled={is2FAEnabled}
            onToggle={async () => {
              try {
                setIs2FAEnabled(!is2FAEnabled);
                const result = await postAccountSettings({
                  key: 'is_two_factor_authentication',
                  value: !is2FAEnabled,
                });

                const updatedValue = result.updated.is_two_factor_authentication;
                // use what's returned from backend
                toast.success('Settings Updated successfully', {
                  duration: 3000,
                });
              } catch (err) {
                toast.error('Failed to update settings', {
                  duration: 3000,
                });
                setIs2FAEnabled(is2FAEnabled);
              }
            }}
          />
          <ToggleButton
            label="Email Notification"
            description="Receive email updates about your account activity"
            enabled={isEmailNotificationEnabled}
            onToggle={async () => {
              try {
                setIsEmailNotificationEnabled(!isEmailNotificationEnabled);
                const result = await postAccountSettings({
                  key: 'is_email_notification',
                  value: !isEmailNotificationEnabled,
                });

                const updatedValue = result.updated.is_email_notification;
                // use what's returned from backend
                toast.success('Settings Updated successfully', {
                  duration: 3000,
                });
              } catch (err) {
                toast.error('Failed to update settings', {
                  duration: 3000,
                });
                setIsEmailNotificationEnabled(isEmailNotificationEnabled);
              }
            }}
          />
          <ToggleButton
            label="SMS Notification"
            description="Receive SMS updates about your account activity"
            enabled={isSMSNotificationEnabled}
            onToggle={async () => {
              setIsSMSNotificationEnabled(!isSMSNotificationEnabled);
              try {
                const result = await postAccountSettings({
                  key: 'is_sms_notification',
                  value: !isSMSNotificationEnabled,
                });

                const updatedValue = result.updated.is_sms_notification;
                // use what's returned from backend
                toast.success('Settings Updated successfully', {
                  duration: 3000,
                });
              } catch (err) {
                toast.error('Failed to update settings', {
                  duration: 3000,
                });
                setIsSMSNotificationEnabled(isSMSNotificationEnabled);
              }
            }}
          />
        </div>
        <div className="mt-10">
          <SubHeading extraClass={`mb-3`} align={`text-center`}>
            Change Password
          </SubHeading>
          <div className="mt-2 w-full tab:w-3/4 m-auto p-4 rounded-md bg-backgroundCream dark:bg-backgroundCreamDark">
            <div className="w-full">
              <label htmlFor="current">
                <BodySmall fontWeight={`font-medium`} extraClass={`pl-2`}>
                  Current Password
                </BodySmall>
              </label>
              <input
                id="current"
                type="password"
                name="current"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                placeholder="Current Password"
                className="py-3 px-3 text-sm w-full rounded-md dark:bg-backgroundDark dark:text-textSubheadingDark border border-borderPrimary mt-1"
              />
            </div>

            <div className="w-full mt-4">
              <label htmlFor="new">
                <BodySmall fontWeight={`font-medium`} extraClass={`pl-2`}>
                  New Password
                </BodySmall>
              </label>
              <input
                id="new"
                type="password"
                name="new"
                onFocus={() => setInstruction(true)}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="New Password"
                className="py-3 px-3 text-sm w-full rounded-md dark:bg-backgroundDark dark:text-textSubheadingDark border border-borderPrimary mt-1"
              />
            </div>

            {instruction && (
              <div className="w-full rounded-md p-3 bg-gray-200 dark:bg-backgroundDark mt-3">
                <BodyBase>
                  Password should contain 8 to 16 characters and must include an uppercase letter, a
                  lowercase letter, a number, a special character and should not include whitespace.
                </BodyBase>
              </div>
            )}

            <div className="w-full mt-4">
              <label htmlFor="confirm">
                <BodySmall fontWeight={`font-medium`} extraClass={`pl-2`}>
                  Confirm New Password
                </BodySmall>
              </label>
              <input
                id="confirm"
                type="password"
                name="confirm"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                placeholder="Confirm New Password"
                className="py-3 px-3 text-sm w-full rounded-md dark:bg-backgroundDark dark:text-textSubheadingDark border border-borderPrimary mt-1"
              />
            </div>

            {message && message.position === 'bottom' && (
              <div
                className={`mt-4 w-full ${message.type === 'success' ? 'bg-green-200' : 'bg-red-200'} py-2 px-3 rounded-md border-l-4 ${message.type === 'success' ? 'border-l-green-500' : 'border-l-red-500'}`}
              >
                <BodySmall
                  textColor={message.type === 'success' ? 'text-green-700' : 'text-red-700'}
                  align={`text-center`}
                >
                  {message.text}
                </BodySmall>
              </div>
            )}

            <div className="w-max m-auto mt-6">
              <PrimaryButton
                label={isLoading ? 'Updating..' : 'Change'}
                bg={`bg-btext-1-base`}
                hoverBg={`hover:bg-btext-1-dark`}
                onClick={handlePasswordChange}
                textSize={`text-base`}
              />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default UserSettings;
