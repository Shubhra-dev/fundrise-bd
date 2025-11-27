import RoundedButton from '@/components/buttons/RoundedButton';
import BodyBase from '@/components/text/BodyBase';
import CaptionExtraSmall from '@/components/text/CaptionExtraSmall';
import CaptionSmall from '@/components/text/CaptionSmall';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function InvestCard({ project }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/user/browse-invests/details/${project?.slug}`)}
      className="flex flex-col sm:flex-row cursor-pointer items-stretch justify-between mb-5 p-5 rounded-xl border border-border-primary"
    >
      <div className="w-full sm:w-3/5 tab:w-[55%]">
        <div className="flex items-center justify-normal gap-5">
          <BodyBase textColor={`text-sub-heading`}>{project?.name}</BodyBase>
          <ChevronRight className="text-xl text-icon-brand-1" />
        </div>
        <div className="mt-2.5 flex items-center gap-2">
          <div className="bg-[#CAF2CE] rounded-md py-[5px] px-2.5 flex items-center gap-[5px]">
            <div className="w-2 h-2 rounded-full bg-success"></div>
            <CaptionSmall>{project?.status}</CaptionSmall>
          </div>
          <div className="bg-bg-secondary rounded-md py-[5px] px-2.5">
            <CaptionSmall>{project?.company_name}</CaptionSmall>
          </div>
          <div className="bg-bg-secondary rounded-md py-[5px] px-2.5">
            <CaptionSmall>{project?.asset_type_name}</CaptionSmall>
          </div>
        </div>
        <CaptionExtraSmall extraClass={`mt-5`}>{project?.description}</CaptionExtraSmall>
      </div>
      <div className="border-r border-dashed border-r-border-secondary"></div>
      <div className="w-full sm:w-[30%]">
        {[
          { name: 'Objective', value: project?.objective },
          { name: 'Net asset value', value: project?.net_asset_value },
          { name: 'Inspection Date', value: project?.inception_date },
        ].map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between py-5 px-2.5 border-b border-border-primary"
          >
            <CaptionSmall textColor={`text-heading`}>{item.name}</CaptionSmall>
            <CaptionSmall textColor={`text-heading`}>{item.value}</CaptionSmall>
          </div>
        ))}
        <div className="mt-7">
          <RoundedButton
            label="Details"
            rounded="rounded-md"
            textSize="text-sm"
            bg="bg-bg-dusky-plum-base"
          />
        </div>
      </div>
    </div>
  );
}

export default InvestCard;
