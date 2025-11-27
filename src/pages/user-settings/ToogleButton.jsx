import SubHeading from '@/components/text/SubHeading';
import BodySmall from '@/components/text/BodySmall';

const ToggleButton = ({ label, description, enabled, onToggle }) => {
  return (
    <div className="flex items-center justify-between py-2">
      <div>
        <SubHeading>{label}</SubHeading>
        <BodySmall color="textColor3">{description}</BodySmall>
      </div>
      <button
        onClick={onToggle}
        className={`relative inline-flex h-6 w-11 items-center rounded-full ${
          enabled ? 'bg-btext-2-dark' : 'bg-btext-4-base'
        } transition-colors duration-300`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full ${enabled ? 'bg-btext-4-dark' : 'bg-btext-1-dark'} transition-transform duration-300 ${
            enabled ? 'translate-x-6' : 'translate-x-1'
          }`}
        ></span>
      </button>
    </div>
  );
};
export default ToggleButton;
