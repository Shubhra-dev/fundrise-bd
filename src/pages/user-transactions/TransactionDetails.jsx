import SmallHeading from '@components/text/SubHeading';
import { X } from 'lucide-react';
import DetailsContent from './DetailsContent';

export default function TransactionDetails({ isOpen, onClose, transactionId, isModal = false }) {
  if (!isOpen || !transactionId) return null;

  if (isModal) {
    return (
      <div className="fixed inset-0 z-50 block tab:hidden" aria-hidden={!isOpen}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/40" onClick={onClose} />
        {/* Modal card */}
        <div
          role="dialog"
          aria-modal="true"
          className="relative mx-auto mt-10 w-[92%] max-w-xl rounded-2xl border border-border-primary bg-white p-5 shadow-xl"
        >
          <div className="flex items-center justify-between mb-2">
            <SmallHeading>Details</SmallHeading>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-bg-primary-2"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <DetailsContent transactionId={transactionId} />
        </div>
      </div>
    );
  }

  return (
    <div className="hidden tab:block border border-border-primary rounded-xl p-5 w-[55%]">
      <DetailsContent transactionId={transactionId} onClose={onClose} />
    </div>
  );
}
