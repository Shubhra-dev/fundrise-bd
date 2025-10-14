import SectionLayout from './SectionLayout';
import Logo from '../assets/Logo.svg';
import CaptionSmall from '../components/text/CaptionSmall';
import CaptionExtraSmall from '../components/text/CaptionExtraSmall';
import Facebook from '../assets/icons/FacebookF.svg';
import Instagram from '../assets/icons/InstagramF.svg';
import LinkedIn from '../assets/icons/LinkedInF.svg';
import Twitter from '../assets/icons/TwitterF.svg';
import Map from '../assets/icons/Map_pin.svg';
import Phone from '../assets/icons/PhoneF.svg';
import Mail from '../assets/icons/MailF.svg';
import IconBoxBordered from './IconBoxBordered';
import BodyBase from '../components/text/BodyBase';
import { FaChevronRight } from 'react-icons/fa';
import LinkHolder from './LinkHolder';
import PrimaryButton from '../components/buttons/PrimaryButton';
function Footer() {
  return (
    <>
      <SectionLayout padding={`pt-12 sm:pt-16 tab:pt-20`}>
        <div className="flex items-start flex-col tab:flex-row justify-normal gap-10 tab:gap-24 mb-[30px]">
          <div className="w-full flex flex-col sm:flex-row gap-10 sm:gap-0 items-start justify-between tab:justify-normal tab:w-1/4">
            <div className="w-full sm:w-[40%] tab:w-auto">
              <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
                <div className="w-8 h-8 flex items-center justify-center text-btext-1-base">
                  {/* placeholder icon box */}
                  <img src={Logo} alt="company logo" />
                </div>
                <div className="text-base sm:text-xl font-display font-semibold">Start Up</div>
              </div>
              <CaptionSmall extraClass={'mt-1 mb-4'}>
                Lorem ipsum dolor sit amet consectetur. Quam tortor ac nulla in eleifend et ut
                faucibus odio.
              </CaptionSmall>
              <div className="flex items-center justify-normal gap-2.5">
                <IconBoxBordered image={Facebook} />
                <IconBoxBordered image={Instagram} />
                <IconBoxBordered image={LinkedIn} />
                <IconBoxBordered image={Twitter} />
              </div>
            </div>
            <div className="tab:hidden">
              <BodyBase fontWeight={`font-bold`}>Get In Touch</BodyBase>
              <div className="flex flex-col items-start justify-normal mt-[15px] gap-[15px]">
                <div className=" flex items-center justify-normal gap-5">
                  <IconBoxBordered hover="" image={Map} />
                  <div>
                    <CaptionSmall leading={`leading-tight`}>Road: 22/A, House#22</CaptionSmall>
                    <CaptionSmall leading={`leading-tight`}>Banani, Dhaka.</CaptionSmall>
                  </div>
                </div>
                <div className=" flex items-center justify-normal gap-5">
                  <IconBoxBordered hover="" image={Phone} />
                  <div>
                    <CaptionSmall leading={`leading-tight`}>+8801712 345678</CaptionSmall>
                    <CaptionSmall leading={`leading-tight`}>+8802 2345789</CaptionSmall>
                  </div>
                </div>
                <div className=" flex items-center justify-normal gap-5">
                  <IconBoxBordered hover="" image={Mail} />
                  <div>
                    <CaptionSmall leading={`leading-tight`}>support@website.com</CaptionSmall>
                    <CaptionSmall leading={`leading-tight`}>info@website.com</CaptionSmall>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full tab:w-3/4">
            <div className="flex items-start tab:justify-between gap-[150px]">
              <div className="hidden tab:block">
                <BodyBase fontWeight={`font-bold`}>Get In Touch</BodyBase>
                <div className="flex flex-col items-start justify-normal mt-[15px] gap-[15px]">
                  <div className=" flex items-center justify-normal gap-5">
                    <IconBoxBordered hover="" image={Map} />
                    <div>
                      <CaptionSmall leading={`leading-tight`}>Road: 22/A, House#22</CaptionSmall>
                      <CaptionSmall leading={`leading-tight`}>Banani, Dhaka.</CaptionSmall>
                    </div>
                  </div>
                  <div className=" flex items-center justify-normal gap-5">
                    <IconBoxBordered hover="" image={Phone} />
                    <div>
                      <CaptionSmall leading={`leading-tight`}>+8801712 345678</CaptionSmall>
                      <CaptionSmall leading={`leading-tight`}>+8802 2345789</CaptionSmall>
                    </div>
                  </div>
                  <div className=" flex items-center justify-normal gap-5">
                    <IconBoxBordered hover="" image={Mail} />
                    <div>
                      <CaptionSmall leading={`leading-tight`}>support@website.com</CaptionSmall>
                      <CaptionSmall leading={`leading-tight`}>info@website.com</CaptionSmall>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <BodyBase fontWeight={`font-bold`}>Useful Links</BodyBase>
                <div className="mt-[15px] flex flex-col items-start justify-normal gap-2">
                  <LinkHolder text={`Footer Item`} />
                  <LinkHolder text={`Footer Item`} />
                  <LinkHolder text={`Footer Item`} />
                  <LinkHolder text={`Footer Item`} />
                  <LinkHolder text={`Footer Item`} />
                  <LinkHolder text={`Footer Item`} />
                </div>
              </div>
              <div>
                <BodyBase fontWeight={`font-bold`}>Company</BodyBase>
                <div className="mt-[15px] flex flex-col items-start justify-normal gap-2">
                  <LinkHolder text={`Footer Item`} />
                  <LinkHolder text={`Footer Item`} />
                  <LinkHolder text={`Footer Item`} />
                  <LinkHolder text={`Footer Item`} />
                  <LinkHolder text={`Footer Item`} />
                  <LinkHolder text={`Footer Item`} />
                </div>
              </div>
            </div>
            <div className="mt-[50px] flex flex-col sm:flex-row items-center justify-normal gap-5">
              <BodyBase fontWeight={`font-bold`} extraClass={`w-full sm:w-[35%]`}>
                Newsletter To Get Updated The Latest News
              </BodyBase>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                className="w-full sm:w-[65%] flex items-center justify-normal gap-1.5"
              >
                <input
                  type="email"
                  name="email"
                  className="px-5 py-3 w-[60%] text-sm text-sub-title bg-bg-soft-orchid-light"
                  placeholder="Enter your email"
                />
                <PrimaryButton label="Subscribe Now" textSize="text-base" />
              </form>
            </div>
          </div>
        </div>
      </SectionLayout>
      <SectionLayout padding="py-5" bg={`bg-bg-soft-orchid-light`}>
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
          <CaptionExtraSmall textColor={`text-sub-title`}>
            Copyright © 2024 Company Name, All rights reserved.
          </CaptionExtraSmall>
          <div className="flex items-center gap-[15px]">
            <CaptionExtraSmall
              textColor={`text-sub-title`}
              extraClass={`cursor-pointer hover:underline`}
            >
              Terms of Service
            </CaptionExtraSmall>
            <div class="w-1.5 h-1.5 bg-bg-dusky-plum-base rounded-sm"></div>
            <CaptionExtraSmall
              textColor={`text-sub-title`}
              extraClass={`cursor-pointer hover:underline`}
            >
              Privacy Policy
            </CaptionExtraSmall>
            <div class="w-1.5 h-1.5 bg-bg-dusky-plum-base rounded-sm"></div>
            <CaptionExtraSmall
              textColor={`text-sub-title`}
              extraClass={`cursor-pointer hover:underline`}
            >
              Cookie
            </CaptionExtraSmall>
          </div>
        </div>
      </SectionLayout>
    </>
  );
}

export default Footer;
