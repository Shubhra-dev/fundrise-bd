import { ChevronRight, DollarSign } from 'lucide-react';
import BodyBase from '../../components/text/BodyBase';
import BodySmall from '../../components/text/BodySmall';
import Building from '../../assets/icons/BuildingBlack.svg';
import RoundedButton from '../../components/buttons/RoundedButton';
import CaptionExtraSmall from '../../components/text/CaptionExtraSmall';
function AmountButton({ amount, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-[14px] py-[7px] border border-border-primary rounded-md"
    >
      {amount}
    </button>
  );
}
function UserInvestStepOne({ amount, setAmount, setCurrentPage }) {
  return (
    <>
      <div className="w-full flex flex-col tab:flex-row items-start justify-normal gap-8">
        <div className="w-full tab:w-[60%]">
          <div className="border border-border-primary rounded-xl p-5">
            <BodyBase textColor={`text-sub-heading`}>Invest in your plan</BodyBase>
            <div className="mt-5 relative">
              <input
                type="text"
                name="amount"
                placeholder="0"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="py-2.5 pr-2.5 pl-8 text-xl font-sora border border-border-primary rounded-md w-full"
              />
              <DollarSign className="absolute top-[23%] left-2" />
            </div>
            <div className="mt-[18px] flex items-center justify-normal gap-3">
              <AmountButton amount={`$500`} onClick={() => setAmount(`500`)} />
              <AmountButton amount={`$1000`} onClick={() => setAmount(`1000`)} />
              <AmountButton amount={`$1500`} onClick={() => setAmount(`1500`)} />
              <AmountButton amount={`$2000`} onClick={() => setAmount(`2000`)} />
            </div>
            <div className="mt-9">
              <RoundedButton
                onClick={() => setCurrentPage(2)}
                bg="bg-btext-3-dark"
                label="Continue"
                rounded="rounded-md"
              />
            </div>
          </div>
          <div className="border border-border-primary rounded-xl p-5 mt-5">
            <BodyBase textColor={`text-sub-heading`}>Other actions</BodyBase>
            <div className="mt-9">
              <RoundedButton
                bg="bg-bg-dusky-plum-light"
                textColor="text-btext-1-base group-hover:text-white"
                hoverBg="hover:bg-bg-dusky-plum-base"
                label="Calculate my growth"
                rounded="rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="w-full tab:w-[40%]">
          <div className="border border-border-primary rounded-xl p-5">
            <div className="flex items-center justify-between">
              <BodyBase textColor={`text-sub-heading`}>Invest in a fund</BodyBase>
              <BodySmall textColor={`text-btext-1-base`}>See all</BodySmall>
            </div>
            <div className="mt-5">
              <div className="flex justify-between items-center cursor-pointer hover:bg-bg-primary-2">
                <div className="flex justify-normal items-center gap-[15px]">
                  <div className="bg-bg-blush-mist-base rounded-full p-2.5">
                    <img src={Building} alt="icon" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2.5">
                      <BodySmall textColor={`text-sub-heading`} fontWeight={`font-bold`}>
                        Real Estate
                      </BodySmall>
                      <div className="bg-bg-cool-irish-base py-[3px] px-1.5 text-white text-[10px]">
                        Market Opportunity
                      </div>
                    </div>
                    <CaptionExtraSmall extraClass={'mt-0.5'}>
                      Flagship Real Estate Fund
                    </CaptionExtraSmall>
                  </div>
                </div>
                <ChevronRight />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 py-5 border-t border-t-border-primary">
        <CaptionExtraSmall>
          Fundrise, LLC (“Fundrise“) operates a website at fundrise.com and certain mobile apps (the
          “Platform“). By using the Platform, you accept our Terms of Service and Privacy Policy.
          All images and return and projection figures shown are for illustrative purposes only, may
          assume additional investments over time, and are not actual Fundrise customer or model
          returns or projections. Past performance is no guarantee of future results. Any historical
          returns, expected returns, or probability projections may not reflect actual future
          performance. All securities involve risk and may result in partial or total loss. While
          the data we use from third parties is believed to be reliable, we cannot ensure the
          accuracy or completeness of data provided by investors or other third parties. Neither
          Fundrise nor any of its affiliates provide tax advice and do not represent in any manner
          that the outcomes described herein will result in any particular tax consequence.
          Prospective investors should confer with their personal tax advisors regarding the tax
          consequences based on their particular circumstances. Neither Fundrise nor any of its
          affiliates assume responsibility for the tax consequences for any investor of any
          investment.{' '}
          <a href="" className="text-btext-1-dark underline">
            Full Disclosure
          </a>{' '}
          <br />
          <br />
          The publicly filed offering circulars of the issuers sponsored by Rise Companies Corp.,
          not all of which may be currently qualified by the Securities and Exchange Commission, may
          be found at fundrise.com/oc. For investors and potential investors who are residents of
          the State of Washington, please send all correspondence, including any questions or
          comments, to washingtonstate@fundrise.com. <br />
          <br />
          Fundrise takes any potential security issues seriously, and encourages the responsible and
          timely reporting of unknown security issues. Please send any discovered security concerns
          to  © 2025 Fundrise, LLC. All Rights Reserved. eREIT, eFund and eDirect are trademarks of
          Rise Companies Corp. Proudly designed and coded in Washington, D.C. <br />
          <br />© 2025 Fundrise, LLC. All Rights Reserved. eREIT, eFund and eDirect are trademarks
          of Rise Companies Corp. Proudly designed and coded in Washington, D.C.
        </CaptionExtraSmall>
      </div>
    </>
  );
}

export default UserInvestStepOne;
