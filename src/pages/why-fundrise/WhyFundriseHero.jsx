import SectionLayout from '../../ui/SectionLayout';
import SubHeading from '../../components/text/SubHeading';
import SubTitle from '../../components/text/SubTitle';
import Image from '../../assets/HomeHero.jpg';
import TextBoxWhyFundrise from '../../components/box/TextBoxWhyFundrise';
function WhyFundriseHero() {
  return (
    <SectionLayout>
      <SubHeading extraClass={`uppercase`} tracking={`tracking-widest`}>
        why fundrise
      </SubHeading>
      <SubTitle extraClass={`mt-[15px] sm:w-[90%] tab:w-[80%]`}>
        We built the first fully integrated,
        <span className="text-btext-3-base-dark inline tab:block">end-to-end technology</span>{' '}
        platform for alternative assets
      </SubTitle>
      <img
        src={Image}
        alt="section image"
        className="my-10 w-full h-52 sm:h-80 tab:h-96 chamfer-tr-8 rounded-3xl object-center"
      />
      <SubHeading fontWeight={`font-normal`} textColor={`text-title`}>
        Our software lets us operate more efficiently, integrating each step of the value chain into
        a single end-to-end platform, in order to deliver better performance for our investors.
      </SubHeading>
      <div className="mt-10 grid sm:grid-cols-3 items-stretch justify-normal gap-7">
        <TextBoxWhyFundrise
          title={`Direct-to-consumer interface`}
          text={`Through our web and mobile platforms, individuals can access institutional quality alternative investments, without the high-fees and mark-ups associated with traditional channels.`}
        />
        <TextBoxWhyFundrise
          marked={true}
          title={`Investor servicing and fund management`}
          text={`Our internal software systems allow us to manage hundreds of thousands of individual investor accounts, including handling tax reporting, fund administration, transaction management, all at a fraction of the cost.`}
        />
        <TextBoxWhyFundrise
          title={`Technology-enabled asset management`}
          text={`We’ve revolutionized the asset management process by leveraging modern data infrastructure tools to unlock real time information, automate reporting, and improve decision making.`}
        />
      </div>
    </SectionLayout>
  );
}

export default WhyFundriseHero;
