import SectionLayout from '../../ui/SectionLayout';
import HelpCenter from '../../assets/HelpCenter.jpg';
import Title from '../../components/text/Title';
import { FaSearch } from 'react-icons/fa';
import RoundedButton from '@/components/buttons/RoundedButton';

function HelpCenterHero({ search, setSearch }) {
  const handleClick = (event) => {
    event.preventDefault();
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <SectionLayout>
      <div className="flex items-center justify-normal sm:gap-[106px]">
        <div className="w-full sm:w-1/2 tab:w-[55%]">
          <Title>How can we help you?</Title>
          <div className="mt-8 relative">
            <input
              type="text"
              name="search"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="py-4 pr-8 pl-3 w-full text-sm border  border-border-primary"
            />
            <FaSearch className="absolute top-[35%] right-3 text-xl" />
          </div>
          <RoundedButton
            label="Have Questions?"
            rounded="rounded-md"
            width="w-full mt-4"
            bg="bg-bg-dusky-plum-base"
            onClick={handleClick}
          />
        </div>
        <div className="hidden sm:block w-1/2 tab:w-[45%] relative">
          <img
            src={HelpCenter}
            alt="image 1"
            className="chamfer-tr-8 object-center object-cover rounded-[30px] w-full h-56"
          />
          <div className="w-32 h-20 -left-6 -bottom-4 absolute bg-bg-soft-orchid-base rounded-2xl outline outline-[10px] outline-offset-[-5px] outline-bg-alternative"></div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default HelpCenterHero;
