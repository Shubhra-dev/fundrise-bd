import SectionLayout from '../../ui/SectionLayout';
import LetterHero from './LetterHero';
import Blog1 from '../../assets/Blog1.png';
import Blog2 from '../../assets/Blog2.png';
import Blog3 from '../../assets/Blog3.png';
import BodySmall from '../../components/text/BodySmall';
import BuildingIcon from '@/assets/icons/Building_02.svg';
import FileCheckIcon from '@/assets/icons/FileCheck.svg';
import { useEffect, useState } from 'react';
import { getPosts } from '@/services/posts';
import Heading from '@/components/text/Heading';
import { useNavigate } from 'react-router-dom';
function LettersToInvestor() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await getPosts();
        setData(response.result);
      } catch (err) {
        setError(err.message || 'Failed to fetch projects');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <LetterHero />
      {isLoading && (
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="animate-bounce">
            <img src={BuildingIcon} alt="Loading" className="w-16 h-16" />
          </div>
          <Heading className="text-center">Loading Data..</Heading>
          <BodySmall className="text-center">Please wait while we fetch the data</BodySmall>
        </div>
      )}
      {error && (
        <div className=" flex flex-col items-center justify-center space-y-4">
          <div className="animate-pulse">
            <img src={FileCheckIcon} alt="Error" className="w-16 h-16" />
          </div>
          <Heading className="text-center text-red-600">Error Occurred</Heading>
          <BodySmall className="text-center text-red-500">{error}</BodySmall>
        </div>
      )}
      {!isLoading && !error && (
        <SectionLayout padding={`pb-12 sm:pb-16 tab:pb-24`}>
          {data?.posts.map((item, index) => (
            <div
              onClick={() => nav(`/letters-to-investor/details/${item.slug}`)}
              className={`flex flex-col gap-5 sm:gap-0 ${index % 2 === 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'} items-center justify-normal mb-[50px] cursor-pointer`}
              key={index}
            >
              <img
                src={item?.featured_image}
                alt="blog image"
                className="w-full sm:w-[45%] tab:first-letter:w-1/2 object-cover h-60 sm:h-48 tab:h-80"
              />
              <div
                className={`w-full sm:w-[55%] tab:w-1/2 ${index % 2 === 0 ? 'sm:pr-8 tab:pr-14' : 'sm:pl-8 tab:pl-14'}`}
              >
                <h2 className="text-2xl sm:text-xl tab:text-3xl font-semibold font-sora">
                  {item?.title}
                </h2>
                <BodySmall textColor={`text-btext-1-base`} extraClass={`my-[15px] tab:my-5`}>
                  {item?.created_date}
                </BodySmall>
                <BodySmall textColor={`text-sub-heading`}>{item?.excerpt}</BodySmall>
              </div>
            </div>
          ))}
        </SectionLayout>
      )}
    </>
  );
}

export default LettersToInvestor;
