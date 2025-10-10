import PrimaryButton from '../../components/buttons/PrimaryButton';
import BodyBase from '../../components/text/BodyBase';
import SubHeading from '../../components/text/SubHeading';
import SubTitle from '../../components/text/SubTitle';
import SectionLayout from '../../ui/SectionLayout';
import Grid1 from '../../assets/Grid1.jpg';
import Grid2 from '../../assets/Grid2.jpg';
import Grid3 from '../../assets/Grid3.jpg';
import Grid4 from '../../assets/Grid4.jpg';

function OurAssets() {
  return (
    <SectionLayout rounded="rounded-t-[30px]">
      <div className="flex flex-col-reverse tab:flex-row items-center justify-normal gap-10">
        <div className="w-full tab:w-[60%] bgLap:w-[55%]">
          <SubHeading extraClass={`uppercase`} tracking={`tracking-widest`}>
            our assets
          </SubHeading>
          <SubTitle extraClass={`pt-[15px] pb-2.5`}>
            Your portfolio is powered by high-quality, resilient assets.
          </SubTitle>
          <BodyBase fontWeight={`font-normal`}>
            Fundrise offers a variety of proprietary funds, ranging from real estate private equity
            to venture capital to private credit. Historically, these kinds of investments would’ve
            been reserved exclusively for institutional investors. <br />
            Depending on your objective, your portfolio will gain exposure to one or more of our
            high-end strategies, including
          </BodyBase>
          <ul className="my-2 list-inside list-disc text-xl font-sora text-paragraph">
            <li>Build-for-rent residential housing across the Sunbelt</li>
            <li>
              Late-stage, high-growth private tech companies, including those focused on AI/ML
            </li>
            <li>Industrial assets like last-mile distribution warehouses and data centers</li>
            <li>High-yield opportunistic bridge loan financing</li>
          </ul>
          <BodyBase fontWeight={`font-normal`}>
            We’ve invested in a multi-billion portfolio of private market assets over the last
            decade. We’re also one of 50 real estate private equity firms in the world to deploy
            more than $1 billion annually in both 2021 and 2022.
          </BodyBase>
          <div className="pt-10 flex items-center justify-center sm:justify-normal gap-5 laptop:gap-[30px] w-full">
            <PrimaryButton
              label="View all offerings"
              rightIcon={true}
              bg="bg-bg-cool-irish-base hover:bg-bg-cool-irish-light hover:text-black"
            />
          </div>
        </div>
        <div className="rounded-md w-full tab:w-[40%] bgLap:w-[45%] flex items-start justify-normal gap-[15px]">
          <div className="basis-1/2">
            <img
              src={Grid1}
              alt="grid image"
              className="rounded-xl h-80 tab:h-[520px] object-cover"
            />
            <img
              src={Grid2}
              alt="grid image"
              className="rounded-xl mt-[15px] object-cover h-28 tab:h-44 w-full"
            />
          </div>
          <div className="basis-1/2">
            <img
              src={Grid3}
              alt="grid image"
              className="rounded-xl mb-[15px] object-cover h-28 tab:h-44 w-full"
            />
            <img
              src={Grid4}
              alt="grid image"
              className="rounded-xl h-80 tab:h-[520px] object-cover"
            />
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default OurAssets;
