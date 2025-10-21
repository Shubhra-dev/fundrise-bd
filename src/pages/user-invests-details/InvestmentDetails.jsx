import BgAlternativeOutlineBox from '@/components/box/BgAlternativeOutlineBox';
import RoundedButton from '@/components/buttons/RoundedButton';
import CaptionExtraSmall from '@/components/text/CaptionExtraSmall';
import CaptionSmall from '@/components/text/CaptionSmall';
import SubTitle from '@/components/text/SubTitle';
import AccociateFund from '@/pages/product-details/AccociateFund';
import AssetType from '@/pages/product-details/AssetType';
import Location from '@/pages/product-details/Location';
import OurStrategy from '@/pages/product-details/OurStrategy';
import Overview from '@/pages/product-details/Overview';
import ProductDetails from '@/pages/product-details/ProductDetails';
import Updates from '@/pages/product-details/Updates';
import DashboardLayout from '@/pages/user-dashboard/DashboardLayout';
import InvestmentDetailsHero from '@/pages/user-invests-details/InvestmentDetailsHero';
import TextBoxItem from '@/pages/user-invests-details/TextBoxItem';

function InvestmentDetails() {
  return (
    <DashboardLayout activeTab={9}>
      {/* <div className="flex items-start justify-normal gap-10">
        <div className="w-[70%]">
          <SubTitle>Flagship Real Estate Fund</SubTitle>
          <div className="mt-2.5 flex items-center gap-2">
            <div className="bg-[#CAF2CE] rounded-md py-[5px] px-2.5 flex items-center gap-[5px]">
              <div className="w-2 h-2 rounded-full bg-success"></div>
              <CaptionSmall>Open</CaptionSmall>
            </div>
            <div className="bg-bg-secondary rounded-md py-[5px] px-2.5">
              <CaptionSmall>Real Estate</CaptionSmall>
            </div>
          </div>
          <CaptionSmall extraClass={`mt-5`}>
            Navana Belgravia is a luxury residential project by Navana Real Estate Ltd., located at
            Plot 19, Road 79, Gulshan, Dhaka. Built on 13.63 kathas of land, the project features a
            G+11 structure with 13 exclusive apartments ranging from 5,804 to 13,363 sq.ft. Each
            floor hosts a single apartment, offering privacy and premium living with amenities like
            a swimming pool, gym, landscaped rooftop, and 24/7 security.
          </CaptionSmall>
          <div className="mt-10 flex items-center justify-normal gap-6">
            <TextBoxItem text="Annualized return since inception" title="4.5" posfix="%" />
            <TextBoxItem text="Net asset value (NAV)" title="1.5" prefix="$" posfix="B" />
            <TextBoxItem text="Annualized distribution rate" title="0.21" posfix="%" />
          </div>
        </div>
        <div className="w-[30%]">
          <div className="w-full border border-border-primary rounded-md">
            {[
              { name: 'Fund category', value: 'Registered Funds' },
              { name: 'Objective', value: 'Appreciation' },
              { name: 'Inspection Date', value: 'Jan 2021' },
              { name: 'Net asset value', value: '$10M' },
              { name: 'Current NAV per share', value: '$11.82' },
            ].map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between py-5 px-2.5 border-b border-border-primary"
              >
                <CaptionSmall textColor={`text-heading`}>{item.name}</CaptionSmall>
                <CaptionSmall textColor={`text-heading`}>{item.value}</CaptionSmall>
              </div>
            ))}
          </div>

          <div className="mt-7">
            <RoundedButton
              label="Invest"
              rounded="rounded-md"
              textSize="text-sm"
              bg="bg-bg-dusky-plum-base"
            />
          </div>
        </div>
      </div> */}
      <InvestmentDetailsHero />
      <Overview />
      <Updates />
      <Location />
      <AssetType />
      <OurStrategy />
      <AccociateFund />
    </DashboardLayout>
  );
}

export default InvestmentDetails;
