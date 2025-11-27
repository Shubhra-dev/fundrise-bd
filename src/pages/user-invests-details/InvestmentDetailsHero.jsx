import SectionLayout from '../../ui/SectionLayout';
import SubTitle from '../../components/text/SubTitle';
import BodyBase from '../../components/text/BodyBase';
import { GoDotFill } from 'react-icons/go';
import BodySmall from '../../components/text/BodySmall';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart, removeFromCart } from '@/features/cart/cartSlice';
import RoundedButton from '@/components/buttons/RoundedButton';

const sections = ['overview', 'updates', 'location', 'asset-type', 'strategy', 'funds'];
function handleClick(id) {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
  });
}
function InvestmentDetailsHero({ projectData }) {
  const [activeSection, setActiveSection] = useState('overview');
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isInCart = cart.some((item) => item.id === projectData?.id);

  const handleButtonClick = () => {
    if (!isLoggedIn) {
      navigate('/login');
    } else if (isInCart) {
      dispatch(removeFromCart(projectData.id));
    } else {
      dispatch(addToCart(projectData));
    }
  };

  return (
    <SectionLayout padding={`pt-0 pb-10`}>
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="flex items-center justify-normal gap-5">
            <SubTitle>{projectData?.name}</SubTitle>
            <div className="flex items-center gap-1">
              <GoDotFill className="text-lg text-bg-blush-mist-dark" />
              <BodySmall>{projectData?.status}</BodySmall>
            </div>
          </div>
          <BodyBase textColor={`text-sub-heading`} extraClass={`mt-[6px]`}>
            {projectData?.company_name}
          </BodyBase>
        </div>
        <div className="">
          <RoundedButton
            label={!isLoggedIn ? 'Sign In' : isInCart ? '🗑️ Remove from Cart' : '+ Add to Cart'}
            onClick={handleButtonClick}
            rounded="rounded-md"
            textSize="text-sm"
            width="w-64"
            bg={
              !isLoggedIn
                ? 'bg-bg-dusky-plum-base'
                : isInCart
                  ? 'bg-red-500'
                  : 'bg-bg-dusky-plum-base'
            }
          />
        </div>
      </div>
      <div className="flex items-center justify-normal mt-8 overflow-x-auto border-b border-b-border-primary">
        {sections.map((item, index) => (
          <div
            onClick={() => {
              setActiveSection(item);
              handleClick(item);
            }}
            className={`cursor-pointer text-nowrap text-base font-normal font-sora px-5 transition duration-300 py-2.5 capitalize  ${item === activeSection ? 'border-b-2 border-icon-brand-1' : ''} text-sub-heading`}
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}

export default InvestmentDetailsHero;
