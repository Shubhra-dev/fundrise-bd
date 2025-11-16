import PrimaryButton from '@/components/buttons/PrimaryButton';
import BodyBase from '@/components/text/BodyBase';
import { useState } from 'react';
import { postSubcription } from '@/services/pages';

function Newsletter() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;

    if (!email) {
      setError('Please enter a valid email.');
      setTimeout(() => setError(null), 3000);
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(false);

    const form = event.target; // Reference to the form

    try {
      await postSubcription(email);
      setSuccess(true);
      form.reset(); // Clear the input field after success
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError(err.message || 'Subscription failed. Please try again.');
      setTimeout(() => setError(null), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-[50px] flex flex-col sm:flex-row items-center justify-normal gap-5">
      <BodyBase fontWeight={`font-bold`} extraClass={`w-full sm:w-[35%]`}>
        Newsletter To Get Updated The Latest News
      </BodyBase>
      {error && <div className="text-red-500 text-base font-semibold mt-2">{error}</div>}
      {success && (
        <div className="text-green-500 text-base font-semibold mt-2">Subscription successful!</div>
      )}
      {!error && !success && (
        <form
          onSubmit={handleSubmit}
          className="w-full sm:w-[65%] flex items-center justify-normal gap-1.5"
        >
          <input
            type="email"
            name="email"
            required
            className="px-5 py-3 w-[60%] text-sm text-sub-title bg-bg-soft-orchid-light"
            placeholder="Enter your email"
          />
          <PrimaryButton
            label={loading ? 'Subscribing...' : 'Subscribe Now'}
            textSize="text-base"
          />
        </form>
      )}
    </div>
  );
}

export default Newsletter;
