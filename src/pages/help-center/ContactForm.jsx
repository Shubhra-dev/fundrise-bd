import PrimaryButton from '@/components/buttons/PrimaryButton';
import BodyBase from '@/components/text/BodyBase';
import BodySmall from '@/components/text/BodySmall';
import SubHeading from '@/components/text/SubHeading';
import SectionLayout from '@/ui/SectionLayout';
import { useState } from 'react';

function ContactForm() {
  const [userData, setUserData] = useState({
    type: '',
    phone_number: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState({ state: false, msg: '' });
  const [isSucceeded, setIsSucceeded] = useState({ state: false, msg: '' });
  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setIsError({ state: false, msg: '' });
    try {
      const result = await postSupportData(userData);
      if (result.success) {
        setUserData({
          type: '',
          phone_number: '',
          message: '',
        });
        setIsSucceeded({
          state: true,
          msg: 'Your form has successfully submitted. You will contact you soon.',
        });
        setTimeout(() => {
          setIsSucceeded({ state: false, msg: '' });
        }, 3000);
      }
    } catch (error) {
      setIsError({ state: true, msg: error.message });
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <SectionLayout id={`contact-form`}>
      <SubHeading>For any type of support and enquiry</SubHeading>
      <BodyBase extraClass={`py-4`}>
        We generally respond within 24 hours. Submit your enquiry below and one of our team members
        will get back to you. Thank you for your patience and interest.
      </BodyBase>
      <form
        onSubmit={handleSubmit}
        className="mt-5 w-full tab:w-3/4 m-auto p-4 rounded-md bg-backgroundCream dark:bg-backgroundCreamDark"
      >
        <div className="w-full">
          <label htmlFor="phone">
            <BodySmall fontWeight={`font-medium`} extraClass={`pl-2`}>
              Phone Number
            </BodySmall>
          </label>
          <input
            id="phone"
            type="text"
            name="phone"
            required
            value={userData.phone_number}
            onChange={(e) => setUserData({ ...userData, phone_number: e.target.value })}
            placeholder="e.g. +880 1234 567890"
            className="py-3 px-3 text-sm w-full rounded-md dark:bg-backgroundDark dark:text-textSubheadingDark border border-borderPrimary mt-1"
          />
        </div>
        <div className="w-full my-4">
          <label htmlFor="type">
            <BodySmall fontWeight={`font-medium`} extraClass={`pl-2`}>
              Type of Enquiry
            </BodySmall>
          </label>
          <select
            value={userData.type}
            required
            defaultValue={''}
            onChange={(e) => setUserData({ ...userData, type: e.target.value })}
            id="type"
            className="py-3 px-3 text-sm w-full rounded-md dark:bg-backgroundDark dark:text-textSubheadingDark border border-borderPrimary mt-1"
          >
            <option value="" disabled>
              Select Type
            </option>
            <option value="General">General Query</option>
            <option value="Buy">Buy</option>
            <option value="Sell">Sell</option>
          </select>
        </div>
        <div>
          <label htmlFor="message">
            <BodySmall fontWeight={`font-medium`} extraClass={`pl-2`}>
              Your Message
            </BodySmall>
          </label>
          <textarea
            id="message"
            placeholder="Type here.."
            value={userData.message}
            required
            onChange={(e) => setUserData({ ...userData, message: e.target.value })}
            rows={4}
            className="py-3 w-full px-3 text-sm dark:bg-backgroundDark dark:text-textSubheadingDark rounded-md border border-borderPrimary mt-1"
          />
        </div>
        {isError.state && (
          <div className="mt-3 bg-red-200 py-2 px-3 rounded-md border-l-4 border-l-red-500">
            <BodySmall textColor={`text-red-700`} align={`text-center`}>
              {isError.msg}
            </BodySmall>
          </div>
        )}
        {isSucceeded.state && (
          <div className="mt-3 bg-green-200 py-2 px-3 rounded-md border-l-4 border-l-green-500">
            <BodySmall textColor={`text-green-700`} align={`text-center`}>
              {isSucceeded.msg}
            </BodySmall>
          </div>
        )}
        <div className="w-max m-auto mt-7">
          <PrimaryButton
            label={isLoading ? 'Submitting' : 'Submit'}
            bg={`bg-btext-1-base`}
            hoverBg={`hover:bg-btext-1-dark`}
            textSize={`text-base`}
            onClick={() => {}}
          />
        </div>
      </form>
    </SectionLayout>
  );
}

export default ContactForm;
