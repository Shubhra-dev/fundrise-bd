import { useEffect, useState } from 'react';
import SectionLayout from './SectionLayout';
import { IoCaretDownOutline, IoCaretUpOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import SubHeading from '../components/text/SubHeading';
import Heading from '../components/text/Heading';
import PrimaryButton from '../components/buttons/PrimaryButton';
import BodyBase from '../components/text/BodyBase';
import BodySmall from '../components/text/BodySmall';
import SubTitle from '../components/text/SubTitle';

export default function FAQSection({ title, subTitle, page = 'landing_page' }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [faqs, setFaqs] = useState([
    { question: `Who can invest with Fundrise?`, answer: `lorem ipsum dolor sit amet` },
    { question: `Who can invest with Fundrise?`, answer: `lorem ipsum dolor sit amet` },
    { question: `Who can invest with Fundrise?`, answer: `lorem ipsum dolor sit amet` },
    { question: `Who can invest with Fundrise?`, answer: `lorem ipsum dolor sit amet` },
    { question: `Who can invest with Fundrise?`, answer: `lorem ipsum dolor sit amet` },
  ]);
  const navigate = useNavigate();
  //   useEffect(() => {
  //     const fetchFaq = async () => {
  //       setIsLoading(true);
  //       try {
  //         const data = await getPageFaqs(page);
  //         setFaqs(data.result.faqs);
  //       } catch (error) {
  //         console.error("Error fetching company data:", error);
  //         setIsError(true);
  //       } finally {
  //         setIsLoading(false);
  //       }
  //     };
  //     fetchFaq();
  //   }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <SectionLayout>
      <div className="text-white flex flex-col sm:flex-row gap-3 sm:gap-8 items-start justify-between">
        {/* Left Column */}
        <div className="w-full sm:w-[25%] tab:w-[30%]">
          <SubTitle align={`text-center sm:text-left`}>
            {title ? title : 'Important details'}
          </SubTitle>
          <BodyBase extraClass={`mt-4 mb-6`} align={`text-center sm:text-left`}>
            {subTitle
              ? subTitle
              : 'Description: Lorem ipsum dolor sit amet consectetur. Nunc vivamus pellentesque etiam vitae.'}
          </BodyBase>
          <div className={`w-max m-auto sm:m-0`}>
            <PrimaryButton
              label="Contact"
              rightIcon={1}
              bg="bg-bg-cool-irish-base"
              onClick={() => navigate('/contact-us')}
            />
          </div>
        </div>

        {/* Right Column */}
        {/* {isLoading && (
          <div className="w-full sm:w-[73%] tab:w-[65%] flex flex-col gap-4">
            <Text> Loading.. </Text>
          </div>
        )}
        {!isLoading && isError && (
          <div className="w-full sm:w-[73%] tab:w-[65%] flex flex-col gap-4">
            <Text>Something went wrong!!</Text>
          </div>
        )} */}
        {!isError && !isLoading && (
          <div className="w-full sm:w-[73%] tab:w-[65%] flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div
                onClick={() => toggleFAQ(index)}
                key={index}
                className={`border-b border-border-primary-dark transition-all duration-300 py-4 tab:py-5 px-4 tab:px-5 ${
                  activeIndex === index ? 'bg-border-primary/20' : ''
                }`}
              >
                <button className="w-full flex justify-between items-center py-4 text-left focus:outline-none">
                  <BodyBase>{faq.question}</BodyBase>
                  <span className="text-caption">
                    {activeIndex === index ? (
                      <IoCaretUpOutline className="text-2xl text-primary" />
                    ) : (
                      <IoCaretDownOutline className="text-2xl text-primary" />
                    )}
                  </span>
                </button>
                <div
                  className={`text-gray-400 text-sm overflow-hidden transition-all duration-300 ease-in-out ${
                    activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <BodySmall>{faq.answer}</BodySmall>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </SectionLayout>
  );
}
