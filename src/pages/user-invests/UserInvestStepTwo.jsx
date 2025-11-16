import { useEffect, useMemo, useState } from 'react';
import BodyBase from '@/components/text/BodyBase';
import ProjectCard from '@/pages/user-invests/ProjectCard';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import BodySmall from '@/components/text/BodySmall';
import RoundedButton from '@/components/buttons/RoundedButton';
import CaptionExtraSmall from '@/components/text/CaptionExtraSmall';
import BuildingIcon from '@/assets/icons/Building_02.svg';
import FileCheckIcon from '@/assets/icons/FileCheck.svg';
import Heading from '@/components/text/Heading';
import { getInvestProjects } from '@/services/investment';

function SelectInput({ name, options, value, setValue }) {
  return (
    <div className="relative border border-border-primary rounded-md">
      <select
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="text-sub-heading w-full appearance-none px-5 py-[15px] rounded-md"
      >
        <option value="" className="capitalize">
          {name}
        </option>
        {(options || []).map((o) => (
          <option key={o.id} value={o.id}>
            {o.title}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute top-1/2 -translate-y-1/2 transform right-5" />
    </div>
  );
}

export default function UserInvestStepTwo({ setCurrentPage, onContinue, setSelected, selected }) {
  // array of project.name
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [company, setCompany] = useState('');
  const [type, setType] = useState('');
  const [location, setLocation] = useState('');
  const [data, setData] = useState({
    projects: [],
    companies: [],
    asset_types: [],
    locations: [],
    pagination: null,
  });
  console.log(location, type, company);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await getInvestProjects({
          projectCompanyId: company,
          assetTypeId: type,
          location: location,
        });

        // Safely handle response shape
        const result = response?.result || {};

        setData({
          projects: result.projects || [],
          companies: result.companies || [],
          asset_types: result.asset_types || [],
          locations: result.locations || [],
          pagination: result.pagination || null,
        });
      } catch (err) {
        console.error(err);
        setError(err?.message || 'Failed to fetch projects');
        setData({
          projects: [],
          companies: [],
          asset_types: [],
          locations: [],
          pagination: null,
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [company, type, location]);

  const byTitle = useMemo(() => new Set(selected), [selected]);

  const toggleProject = (p) => {
    setSelected((prev) =>
      prev.includes(p.name) ? prev.filter((t) => t !== p.name) : [...prev, p.name]
    );
  };

  const selectedProjects = useMemo(() => {
    const projects = data?.projects || [];
    return projects.filter((p) => byTitle.has(p.name));
  }, [data, byTitle]);

  return (
    <div>
      {isLoading && (
        <div className="h-[50vh] my-auto flex flex-col items-center justify-center space-y-4">
          <div className="animate-bounce">
            <img src={BuildingIcon} alt="Loading" className="w-16 h-16" />
          </div>
          <Heading className="text-center">Loading Data..</Heading>
          <BodySmall className="text-center">Please wait while we fetch the data</BodySmall>
        </div>
      )}

      {error && !isLoading && (
        <div className="h-[50vh] my-auto flex flex-col items-center justify-center space-y-4">
          <div className="animate-pulse">
            <img src={FileCheckIcon} alt="Error" className="w-16 h-16" />
          </div>
          <Heading className="text-center text-red-600">Error Occurred</Heading>
          <BodySmall className="text-center text-red-500">{error}</BodySmall>
        </div>
      )}

      {!isLoading && !error && (
        <>
          {/* Filters */}
          <div className="flex flex-col sm:flex-row items-center justify-normal gap-12">
            <BodyBase textColor="text-sub-heading" extraClass="w-full sm:w-[35%]">
              PROJECTS open for investment
            </BodyBase>

            <div className="grid grid-cols-1 sm:grid-cols-3 w-full sm:w-[65%] items-center justify-normal gap-5">
              <SelectInput
                value={company}
                setValue={setCompany}
                name="Company"
                options={data?.companies}
              />
              <SelectInput
                value={type}
                setValue={setType}
                name="Project Type"
                options={data?.asset_types}
              />
              <div className="relative border border-border-primary rounded-md">
                <select
                  name="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="text-sub-heading w-full appearance-none px-5 py-[15px] rounded-md"
                >
                  <option value="" className="capitalize">
                    Location
                  </option>
                  {(data?.locations || []).map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute top-1/2 -translate-y-1/2 transform right-5" />
              </div>
            </div>
          </div>

          {/* Projects grid */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 items-stretch justify-normal gap-5">
            {(data?.projects || []).map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                isSelected={byTitle.has(project.name)}
                onToggle={toggleProject}
              />
            ))}
          </div>

          {/* Pagination (placeholder values for now) */}
          {data?.pagination && (
            <div className="my-5 flex items-center justify-between">
              <BodySmall>Showing 6 out of 300</BodySmall>
              <div className="flex items-center justify-normal gap-3">
                <div className="border border-border-primary rounded-md bg-bg-primary-2 p-1">
                  <ChevronLeft />
                </div>
                <BodyBase textColor="text-sub-heading">Page 1 of 20</BodyBase>
                <div className="border border-border-primary rounded-md bg-bg-primary-2 p-1">
                  <ChevronRight />
                </div>
              </div>
            </div>
          )}

          {/* Main continue button */}
          <RoundedButton
            label="Continue"
            bg="bg-bg-dusky-plum-base my-5"
            rounded="rounded-md"
            onClick={() => {
              onContinue?.(selectedProjects);
            }}
          />
        </>
      )}

      {/* Footer disclaimer */}
      <div className="mt-10 py-5 border-t border-t-border-primary">
        <CaptionExtraSmall>
          Fundrise, LLC (“Fundrise“) operates a website at fundrise.com and certain mobile apps (the
          “Platform“). By using the Platform, you accept our Terms of Service and Privacy Policy.
          All images and return and projection figures shown are for illustrative purposes only, may
          assume additional investments over time, and are not actual Fundrise customer or model
          returns or projections. Past performance is no guarantee of future results. Any historical
          returns, expected returns, or probability projections may not reflect actual future
          performance. All securities involve risk and may result in partial or total loss. While
          the data we use from third parties is believed to be reliable, we cannot ensure the
          accuracy or completeness of data provided by investors or other third parties. Neither
          Fundrise nor any of its affiliates provide tax advice and do not represent in any manner
          that the outcomes described herein will result in any particular tax consequence.
          Prospective investors should confer with their personal tax advisors regarding the tax
          consequences based on their particular circumstances. Neither Fundrise nor any of its
          affiliates assume responsibility for the tax consequences for any investor of any
          investment.{' '}
          <a href="" className="text-btext-1-dark underline">
            Full Disclosure
          </a>{' '}
          <br />
          <br />
          The publicly filed offering circulars of the issuers sponsored by Rise Companies Corp.,
          not all of which may be currently qualified by the Securities and Exchange Commission, may
          be found at fundrise.com/oc. For investors and potential investors who are residents of
          the State of Washington, please send all correspondence, including any questions or
          comments, to washingtonstate@fundrise.com. <br />
          <br />
          Fundrise takes any potential security issues seriously, and encourages the responsible and
          timely reporting of unknown security issues. Please send any discovered security concerns
          to © 2025 Fundrise, LLC. All Rights Reserved. eREIT, eFund and eDirect are trademarks of
          Rise Companies Corp. Proudly designed and coded in Washington, D.C. <br />
          <br />© 2025 Fundrise, LLC. All Rights Reserved. eREIT, eFund and eDirect are trademarks
          of Rise Companies Corp. Proudly designed and coded in Washington, D.C.
        </CaptionExtraSmall>
      </div>

      {/* Right-side floating selection tray */}
      {selectedProjects.length > 0 && (
        <aside className="fixed right-6 top-1/2 -translate-y-1/2 w-auto rounded-2xl border border-border-primary bg-white shadow-xl">
          <div className="px-5 py-4 border-b border-border-primary">
            <p className="font-sora text-sm font-semibold text-sub-heading">
              {selectedProjects.length} {selectedProjects.length === 1 ? 'project' : 'projects'}{' '}
              selected
            </p>
          </div>

          {/* Bottom continue */}
          <div className="px-5 py-4 border-t border-border-primary flex items-center justify-center">
            <button
              className="px-4 py-2 rounded-md border border-btext-1-base text-btext-1-base font-display text-sm font-bold"
              onClick={() => onContinue?.(selectedProjects)}
            >
              Continue
            </button>
          </div>
        </aside>
      )}
    </div>
  );
}
