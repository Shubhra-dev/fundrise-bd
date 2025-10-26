import { useEffect, useRef, useState } from 'react';
import { HiOutlineMenu, HiX } from 'react-icons/hi';
import PrimaryButton from '../components/buttons/PrimaryButton';
import SectionLayout from './SectionLayout';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.svg';

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState('');

  // NEW: sticky-after-scroll state + refs
  const headerRef = useRef(null);
  const [isPinned, setIsPinned] = useState(false);
  const [headerH, setHeaderH] = useState(0);

  // Close dropdown when clicking outside
  const closeDropdowns = () => setActiveDropdown('');

  const links = [
    { label: 'Venture', to: '/venture' },
    { label: 'Private Credit', to: '/private-credit' },
    { label: 'Real Estate', to: '/real-estate' },
    { label: 'Client Returns', to: '/client-return' },
    {
      label: 'Resources',
      submenu: [
        { label: 'Help Center', to: '/help-center' },
        { label: 'Why Fundrise', to: '/why-fundrise' },
        { label: 'How It Works', to: '/how-it-works' },
        { label: 'About Us', to: '/about-us' },
        { label: 'Letters to Investor', to: '/letters-to-investor' },
      ],
    },
  ];

  // NEW: measure header height (on mount + resize)
  useEffect(() => {
    const measure = () => {
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        setHeaderH(rect.height);
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // NEW: toggle pinned when scrolled past full header height
  useEffect(() => {
    const onScroll = () => {
      setIsPinned(window.scrollY > headerH);
    };
    onScroll(); // run once on mount
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [headerH]);

  return (
    <>
      {/* Header */}
      <header
        ref={headerRef}
        onClick={closeDropdowns}
        className={
          `w-full bg-white border-b border-b-gray-100 ` +
          (isPinned
            ? `fixed top-0 left-0 right-0 z-[60] shadow-sm` // stick to top after scrolling past header height
            : `relative z-[30]`)
        }
      >
        <SectionLayout padding={`py-0`}>
          <div className="flex items-center justify-between h-[70px] tab:h-[85px]">
            {/* left: logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
              <div className="w-8 h-8 flex items-center justify-center text-btext-1-base">
                <img src={Logo} alt="company logo" />
              </div>
              <div className="text-base sm:text-xl font-display font-semibold">Start Up</div>
            </div>

            {/* center: nav (hidden on small) */}
            <nav className="hidden lg:flex items-center gap-8 text-sm text-gray-700">
              {links.map((l) =>
                l.submenu ? (
                  <div key={l.label} className="relative" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === l.label ? '' : l.label)}
                      className="font-sora text-base font-normal leading-normal text-sub-heading flex items-center gap-2"
                    >
                      {l.label}
                      <svg
                        className={`w-3 h-3 transform transition-transform ${
                          activeDropdown === l.label ? 'rotate-180' : ''
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0l-4.25-4.65a.75.75 0 01.02-1.06z" />
                      </svg>
                    </button>

                    {/* Floating dropdown */}
                    <div
                      className={`absolute left-0 top-full mt-2 min-w-[220px] bg-white border rounded-md shadow-xl z-50 transform transition-all duration-200 origin-top ${
                        activeDropdown === l.label
                          ? 'opacity-100 scale-y-100 visible'
                          : 'opacity-0 scale-y-95 invisible'
                      }`}
                    >
                      {l.submenu.map((s) => (
                        <button
                          key={s.label}
                          onClick={() => {
                            navigate(s.to);
                            setActiveDropdown('');
                          }}
                          className="text-left px-4 py-2 font-sora text-base font-normal leading-normal text-sub-heading hover:bg-gray-200 w-full block"
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <button
                    key={l.label}
                    onClick={() => navigate(l.to)}
                    className="font-sora text-base font-normal leading-normal text-sub-heading"
                  >
                    {l.label}
                  </button>
                )
              )}
            </nav>

            {/* right: actions */}
            <div className="flex items-center gap-4">
              <div className="hidden lg:block">
                <PrimaryButton
                  onClick={() => navigate('/auth/login')}
                  label="Log in"
                  textSize="text-sm"
                />
              </div>

              {/* hamburger */}
              <button
                className="lg:hidden p-2 rounded-md focus:outline-none"
                onClick={() => setOpen((s) => !s)}
                aria-label="Toggle menu"
              >
                {!open ? <HiOutlineMenu className="w-6 h-6" /> : <HiX className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile / tablet slide-in panel from right */}
          <div className={`tab:hidden`}>
            {/* overlay */}
            <div
              className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-200 ${
                open ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
              onClick={() => setOpen(false)}
            />

            {/* panel */}
            <div
              className={`fixed top-0 right-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ${
                open ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              <div className="p-4 h-full flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="text-lg font-display font-semibold">Menu</div>
                  <button onClick={() => setOpen(false)} className="p-2 rounded-md">
                    <HiX className="w-6 h-6" />
                  </button>
                </div>

                <div className="mt-4 flex-1 overflow-auto">
                  <div className="flex flex-col gap-1">
                    {links.map((l) =>
                      l.submenu ? (
                        <div key={l.label} className="mb-2" onClick={(e) => e.stopPropagation()}>
                          <button
                            onClick={() =>
                              setActiveDropdown(activeDropdown === l.label ? '' : l.label)
                            }
                            className="px-4 py-2 font-sora text-base font-normal leading-normal text-sub-heading w-full text-left flex items-center justify-between"
                          >
                            {l.label}
                            <svg
                              className={`w-4 h-4 transform transition-transform ${
                                activeDropdown === l.label ? 'rotate-180' : ''
                              }`}
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0l-4.25-4.65a.75.75 0 01.02-1.06z" />
                            </svg>
                          </button>
                          <div
                            className={`overflow-hidden transition-all duration-200 ${
                              activeDropdown === l.label ? 'max-h-96' : 'max-h-0'
                            }`}
                          >
                            {l.submenu.map((s) => (
                              <button
                                key={s.label}
                                onClick={() => {
                                  navigate(s.to);
                                  setOpen(false);
                                  setActiveDropdown('');
                                }}
                                className="text-left w-full py-2 px-6 font-sora text-base font-normal leading-normal text-sub-heading hover:bg-gray-50"
                              >
                                {s.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <button
                          key={l.label}
                          onClick={() => {
                            navigate(l.to);
                            setOpen(false);
                          }}
                          className="text-left w-full py-2 px-4 font-sora text-base font-normal leading-normal text-sub-heading hover:bg-gray-50"
                        >
                          {l.label}
                        </button>
                      )
                    )}
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <PrimaryButton onClick={() => navigate('/auth/login')} label="Log in" />
                </div>
              </div>
            </div>
          </div>
        </SectionLayout>
      </header>

      {/* NEW: spacer to prevent layout jump when header is fixed */}
      <div style={{ height: isPinned ? headerH : 0 }} />
    </>
  );
}
