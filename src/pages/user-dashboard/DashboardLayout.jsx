// client/src/layouts/DashboardLayout.jsx
import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import CaptionSmall from '../../components/text/CaptionSmall';
import BodyBase from '../../components/text/BodyBase';
import { RxLayers } from 'react-icons/rx';
import MenuItem from './MenuItem';
import { BiBriefcase, BiCalculator, BiLogOut } from 'react-icons/bi';
import { PiChartLineBold } from 'react-icons/pi';
import { RiArrowLeftRightFill } from 'react-icons/ri';
import { CgFeed } from 'react-icons/cg';
import { IoHelpBuoyOutline } from 'react-icons/io5';
import { HiOutlineClipboardDocument } from 'react-icons/hi2';
import { HiOutlineChartBar } from 'react-icons/hi';
import { LuUserCheck } from 'react-icons/lu';
import { MdOutlineSettings } from 'react-icons/md';
import SubHeading from '../../components/text/SubHeading';
import { FaRegBell } from 'react-icons/fa';
import MenuAlt from '../../assets/icons/MenuAlt.svg';
import Profile from '../../assets/Profile.jpg';

function DashboardLayout({ activeTab = 1, children }) {
  const navigate = useNavigate();

  // Mobile/off-canvas state
  const [mobileOpen, setMobileOpen] = useState(false);

  const shortEmail = (email) => (email.length > 15 ? email.slice(0, 20) + '..' : email);

  const openMobile = useCallback(() => setMobileOpen(true), []);
  const closeMobile = useCallback(() => setMobileOpen(false), []);
  const toggleMobile = useCallback(() => setMobileOpen((v) => !v), []);

  // Close on ESC for accessibility
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') closeMobile();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [closeMobile]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    const original = document.body.style.overflow;
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = original || '';
    }
    return () => {
      document.body.style.overflow = original || '';
    };
  }, [mobileOpen]);

  // Close drawer after any menu click (mobile only)
  const handleMenuClick = () => {
    // Only matters on small screens; harmless on large
    closeMobile();
  };

  // Shared Sidebar content (so we render it once in desktop, once in mobile)
  const SidebarContent = (
    <>
      <div
        className="hidden tab:flex items-center gap-3 cursor-pointer w-max m-auto"
        onClick={() => {
          navigate('/');
          handleMenuClick();
        }}
      >
        <div className="w-8 h-8 flex items-center justify-center text-btext-1-base">
          <img src={Logo} alt="company logo" />
        </div>
        <div className="text-base sm:text-xl font-display font-semibold">Start Up</div>
      </div>

      <div className="tab:mt-10">
        <CaptionSmall extraClass={`uppercase px-7 py-2.5`}>Menu</CaptionSmall>
        <div className="mt-1.5" onClick={handleMenuClick}>
          <MenuItem link={`/user/dashboard`} name={`Dashboard`} active={activeTab === 1}>
            <RxLayers
              className={`${activeTab === 1 ? 'text-btext-2-dark' : 'text-paragraph'} text-xl`}
            />
          </MenuItem>
          <MenuItem link={`/user/portfolio`} name={`Portfolio`} active={activeTab === 2}>
            <BiBriefcase
              className={`${activeTab === 2 ? 'text-btext-2-dark' : 'text-paragraph'} text-xl`}
            />
          </MenuItem>
          <MenuItem link={`/user/invests`} name={`Invest`} active={activeTab === 3}>
            <PiChartLineBold
              className={`${activeTab === 3 ? 'text-btext-2-dark' : 'text-paragraph'} text-xl`}
            />
          </MenuItem>
          <MenuItem link={`/user/transactions`} name={`Transactions`} active={activeTab === 4}>
            <RiArrowLeftRightFill
              className={`${activeTab === 4 ? 'text-btext-2-dark' : 'text-paragraph'} text-xl`}
            />
          </MenuItem>
        </div>
      </div>

      <div className="mt-10">
        <CaptionSmall extraClass={`uppercase px-7 py-2.5`}>Menu</CaptionSmall>
        <div className="mt-1.5" onClick={handleMenuClick}>
          <MenuItem link={`/user/newsfeed`} name={`Newsfeed`} active={activeTab === 5}>
            <CgFeed
              className={`${activeTab === 5 ? 'text-btext-2-dark' : 'text-paragraph'} text-xl`}
            />
          </MenuItem>
          <MenuItem name={`Help Center`} active={activeTab === 6}>
            <IoHelpBuoyOutline
              className={`${activeTab === 6 ? 'text-btext-2-dark' : 'text-paragraph'} text-xl`}
            />
          </MenuItem>
          <MenuItem name={`Documents`} active={activeTab === 7}>
            <HiOutlineClipboardDocument
              className={`${activeTab === 7 ? 'text-btext-2-dark' : 'text-paragraph'} text-xl`}
            />
          </MenuItem>
          <MenuItem link={`/user/calculator`} name={`Calculator`} active={activeTab === 8}>
            <BiCalculator
              className={`${activeTab === 8 ? 'text-btext-2-dark' : 'text-paragraph'} text-xl`}
            />
          </MenuItem>
          <MenuItem link={`/user/browse-invests`} name={`Browse Invests`} active={activeTab === 9}>
            <HiOutlineChartBar
              className={`${activeTab === 9 ? 'text-btext-2-dark' : 'text-paragraph'} text-xl`}
            />
          </MenuItem>
        </div>
      </div>

      <div className="mt-10">
        <CaptionSmall extraClass={`uppercase px-7 py-2.5`}>General</CaptionSmall>
        <div className="mt-1.5" onClick={handleMenuClick}>
          <MenuItem name={`Profile`} active={activeTab === 10}>
            <LuUserCheck
              className={`${activeTab === 10 ? 'text-btext-2-dark' : 'text-paragraph'} text-xl`}
            />
          </MenuItem>
          <MenuItem name={`Settings`} active={activeTab === 11}>
            <MdOutlineSettings
              className={`${activeTab === 11 ? 'text-btext-2-dark' : 'text-paragraph'} text-xl`}
            />
          </MenuItem>
          <MenuItem name={`Log Out`}>
            <BiLogOut className={`group-hover:text-btext-2-dark text-paragraph text-xl`} />
          </MenuItem>
        </div>
      </div>
    </>
  );

  return (
    <div className="relative w-full bg-white bg-cover bg-center bg-no-repeat">
      <div className="max-w-screen-dashboard m-auto min-h-screen flex lg:items-start">
        {/* Desktop sidebar (lg and up): unchanged look */}
        <aside
          className="hidden lg:block w-1/5 bg-[#F6F6F6] h-screen overflow-y-auto py-[30px] px-5 no-scrollbar sticky top-0"
          aria-label="Sidebar"
        >
          {SidebarContent}
        </aside>

        {/* Mobile off-canvas sidebar */}
        {/* Overlay */}
        {mobileOpen && (
          <button
            aria-label="Close sidebar"
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[1px] transition-opacity duration-300 ease-out"
            onClick={closeMobile}
          />
        )}
        {/* Drawer */}
        <aside
          className={[
            'lg:hidden fixed z-50 top-0 left-0 h-full w-[84%] max-w-[320px]',
            'bg-[#F6F6F6] py-[30px] px-5 no-scrollbar overflow-y-auto',
            'transform transition-transform duration-300 ease-out',
            mobileOpen ? 'translate-x-0' : '-translate-x-full',
            'shadow-xl shadow-black/10',
          ].join(' ')}
          aria-label="Mobile sidebar"
          aria-hidden={!mobileOpen}
          role="dialog"
        >
          {SidebarContent}
        </aside>

        {/* Content area */}
        <main className="relative w-full lg:w-4/5 h-full min-h-screen overflow-y-auto px-4 sm:px-6">
          {/* Sticky top bar */}
          <div className="sticky top-0 bg-white z-30 py-4 sm:py-5 flex items-center justify-between">
            <SubHeading extraClass={'hidden tab:block'}>Dashboard</SubHeading>
            <div
              className="flex tab:hidden items-center gap-3 cursor-pointer"
              onClick={() => {
                navigate('/');
                handleMenuClick();
              }}
            >
              <div className="w-8 h-8 flex items-center justify-center text-btext-1-base">
                <img src={Logo} alt="company logo" />
              </div>
              <div className="text-base sm:text-xl font-display font-semibold">Start Up</div>
            </div>
            <div className="flex items-center justify-normal gap-3 sm:gap-8">
              <button className="py-2.5 sm:py-4 px-4 sm:px-6 bg-bg-soft-orchid-dark text-sm font-bold text-white font-display rounded-xl">
                Add Fund +
              </button>

              <div className="flex items-center justify-normal gap-2.5">
                <FaRegBell className="text-2xl sm:text-3xl m-2 sm:m-4" />

                {/* Profile block hidden below md to save space */}
                <div className="items-center justify-normal gap-3 hidden tab:flex">
                  <img
                    src={Profile}
                    alt="profile image"
                    className="w-10 h-10 sm:w-14 sm:h-14 rounded-full object-cover"
                  />
                  <div className="hidden tab:block">
                    <BodyBase fontWeight={`font-semibold`}>Shahriar Zaman</BodyBase>
                    <CaptionSmall title={'shariarpranto@gmail.com'}>
                      {shortEmail(`shariarpranto@gmail.com`)}
                    </CaptionSmall>
                  </div>
                </div>

                {/* Mobile menu trigger */}
                <img
                  src={MenuAlt}
                  alt="Open menu"
                  className="w-8 h-8 tab:hidden cursor-pointer select-none"
                  onClick={toggleMobile}
                />
              </div>
            </div>
          </div>
          <div className="pt-8">{children}</div>
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
