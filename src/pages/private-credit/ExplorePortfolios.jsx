import { useState, useEffect } from 'react';
import BodyBase from '../../components/text/BodyBase';
import SubHeading from '../../components/text/SubHeading';
import SubTitle from '../../components/text/SubTitle';
import SectionLayout from '../../ui/SectionLayout';
import ProductCard from '../../components/card/ProductCard';
import { getProjects } from '../../services/pages';

function ExplorePortfolios({
  markerColor = 'text-btext-2-dark',
  markerColorBg = `bg-bg-cool-irish-base`,
}) {
  const [status, setStatus] = useState('active');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await getProjects({
          status: status,
          perPage: 8,
        });
        setData(response.result.projects);
      } catch (err) {
        setError(err.message || 'Failed to fetch projects');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, [status]);

  if (isLoading) {
    return (
      <SectionLayout>
        <div className="flex flex-col items-center justify-center min-h-[400px]">
          <div className="w-16 h-16 border-4 border-bg-cool-irish-base border-t-transparent rounded-full animate-spin"></div>
          <BodyBase extraClass="mt-4">Loading projects...</BodyBase>
        </div>
      </SectionLayout>
    );
  }

  if (error) {
    return (
      <SectionLayout>
        <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
          <div className="bg-red-50 rounded-lg p-6 max-w-lg">
            <SubHeading extraClass="text-red-600 mb-2">Error Loading Projects</SubHeading>
            <BodyBase>{error}</BodyBase>
          </div>
        </div>
      </SectionLayout>
    );
  }

  return (
    <SectionLayout>
      <div className="flex items-end justify-normal gap-16">
        <SubTitle extraClass={`w-[35%]`}>
          Explore all projects in our <span className={`${markerColor}`}>portfolio</span>
        </SubTitle>
        <BodyBase extraClass={`w-[65%]`}>
          Here are the investments that are powering our investors’ returns.
        </BodyBase>
      </div>
      <div className="flex justify-between items-center my-9">
        <SubHeading>Assets</SubHeading>
        <div className="bg-bg-cool-irish-light flex items-center rounded-md text-xs font-normal text-sub-heading">
          <div
            onClick={() => setStatus('active')}
            className={`cursor-pointer ${status === 'active' ? `${markerColorBg} text-bg-alternative font-bold` : ''} py-2.5 px-5 rounded-md text-xs `}
          >
            Active
          </div>
          <div
            className={`py-2.5 px-5 cursor-pointer ${status === 'completed' ? `${markerColorBg} text-bg-alternative font-bold` : ''} rounded-md`}
            onClick={() => setStatus('completed')}
          >
            Completed
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 tab:grid-cols-4 gap-5 sm:gap-10 items-stretch justify-normal">
        {data.map((project) => (
          <ProductCard
            key={project.id}
            slug={project.slug}
            image={project.thumbnail_image}
            title={project.name}
            text={project.company_name}
            type={project.asset_type_name}
          />
        ))}
      </div>
    </SectionLayout>
  );
}

export default ExplorePortfolios;
