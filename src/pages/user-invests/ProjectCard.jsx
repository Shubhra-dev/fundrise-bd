import BodyBase from '@/components/text/BodyBase';
import BodySmall from '@/components/text/BodySmall';
import CaptionExtraSmall from '@/components/text/CaptionExtraSmall';
import AssureImp from '@assets/AssureImp.jpg';

function formatToBMK(value) {
  if (value == null || value === '') return '';
  const num = Number(String(value).replace(/[৳,]/g, ''));
  if (isNaN(num)) return value;

  let formatted;
  if (num >= 1_000_000_000) formatted = (num / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
  else if (num >= 1_000_000) formatted = (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
  else if (num >= 1_000) formatted = (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
  else formatted = num.toString();

  return '৳ ' + formatted;
}

export default function ProjectCard({ project, isSelected = false, onToggle }) {
  return (
    <div className="p-5 border border-border-primary rounded-xl flex items-stretch justify-normal gap-6">
      <img
        src={AssureImp}
        alt="thumbnail image"
        className="w-[30%] rounded-md h-full object-center object-cover"
      />
      <div className="w-[70%] flex flex-col justify-between">
        <div>
          <BodyBase fontWeight="font-bold" textColor="text-sub-heading">
            {project.title}
          </BodyBase>
          <h6 className="text-lg font-medium text-btext-1-base font-sora mt-0.5">
            {project.developer}
          </h6>

          <div className="flex items-start justify-normal gap-10 mt-2.5">
            <div>
              <CaptionExtraSmall textColor="text-sub-title">Inspection Date</CaptionExtraSmall>
              <BodySmall textColor="text-sub-title" fontWeight="font-medium">
                {project.inceptionYear}
              </BodySmall>
            </div>
            <div>
              <CaptionExtraSmall textColor="text-sub-title">Net Asset Value</CaptionExtraSmall>
              <BodySmall textColor="text-sub-title" fontWeight="font-medium">
                {formatToBMK(project.netAssetValue)}
              </BodySmall>
            </div>
          </div>

          <div className="flex items-start mt-3 justify-normal gap-10 mb-2.5">
            <div>
              <CaptionExtraSmall textColor="text-sub-title">Project Type</CaptionExtraSmall>
              <BodySmall textColor="text-sub-title" fontWeight="font-medium">
                {project.projectType}
              </BodySmall>
            </div>
            <div>
              <CaptionExtraSmall textColor="text-sub-title">Location</CaptionExtraSmall>
              <BodySmall textColor="text-sub-title" fontWeight="font-medium">
                {project.location}
              </BodySmall>
            </div>
          </div>
        </div>

        <button
          onClick={() => onToggle?.(project)}
          className={[
            'py-4 px-6 w-full font-display text-sm font-bold rounded-md border',
            isSelected
              ? 'bg-btext-1-base text-white border-btext-1-base'
              : 'text-btext-1-base border-btext-1-base',
          ].join(' ')}
          aria-pressed={isSelected}
        >
          {isSelected ? 'Remove from Selection' : 'Express Interest'}
        </button>
      </div>
    </div>
  );
}
