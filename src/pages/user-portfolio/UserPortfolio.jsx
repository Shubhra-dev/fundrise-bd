import CaptionSmall from '../../components/text/CaptionSmall';
import Title from '../../components/text/Title';
import DashboardLayout from '../user-dashboard/DashboardLayout';

function UserPortfolio() {
  return (
    <DashboardLayout activeTab={2}>
      <div className="flex items-stretch justify-normal gap-10">
        <div className="w-1/3">
          <CaptionSmall textColor={`text-sub-heading`}>Initial Investment Amount</CaptionSmall>
          <Title extraClass={`mt-3`}>$3,000.00</Title>
          <div className="mt-10 px-[5px] py-2.5 flex justify-between">
            <CaptionSmall fontWeight={`font-bold`} textColor={`text-sub-heading`}>
              Net Contribution
            </CaptionSmall>
            <CaptionSmall
              fontWeight={`font-bold`}
              textColor={`text-sub-heading`}
              align={`text-end`}
            >
              $3,000.00
            </CaptionSmall>
          </div>
          <div className="px-[5px] py-2.5 flex justify-between">
            <CaptionSmall textColor={`text-sub-heading`}>Gross dividends</CaptionSmall>
            <CaptionSmall textColor={`text-sub-heading`} align={`text-end`}>
              $0.00
            </CaptionSmall>
          </div>
          <div className="px-[5px] py-2.5 flex justify-between">
            <CaptionSmall textColor={`text-sub-heading`}>Appreciation</CaptionSmall>
            <CaptionSmall textColor={`text-sub-heading`} align={`text-end`}>
              $0.00
            </CaptionSmall>
          </div>
          <div className="px-[5px] py-2.5 flex justify-between">
            <CaptionSmall textColor={`text-sub-heading`}>Advisory fee</CaptionSmall>
            <CaptionSmall textColor={`text-sub-heading`} align={`text-end`}>
              $0.00
            </CaptionSmall>
          </div>
          <div className="px-[5px] py-2.5 flex justify-between border-t border-t-black">
            <CaptionSmall fontWeight={`font-medium`} textColor={`text-sub-heading`}>
              Net return
            </CaptionSmall>
            <CaptionSmall
              fontWeight={`font-medium`}
              textColor={`text-sub-heading`}
              align={`text-end`}
            >
              $0.00
            </CaptionSmall>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default UserPortfolio;
