import { useMemo, useState } from 'react';
import BodyBase from '@/components/text/BodyBase';
import ProjectCard from '@/pages/user-invests/ProjectCard';
import { ChevronDown, ChevronLeft, ChevronRight, X } from 'lucide-react';
import BodySmall from '@/components/text/BodySmall';
import RoundedButton from '@/components/buttons/RoundedButton';
import CaptionExtraSmall from '@/components/text/CaptionExtraSmall';

function SelectInput({ name, options }) {
  return (
    <div className="relative border border-border-primary rounded-md">
      <select
        name={name}
        className="text-sub-heading w-full appearance-none px-5 py-[15px] rounded-md"
      >
        <option value="" className="capitalize">
          {name}
        </option>
        {options?.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute top-1/2 -translate-y-1/2 transform right-5" />
    </div>
  );
}

const projects = [
  {
    title: 'Assure Imperial Heights',
    developer: 'Assure Group',
    inceptionYear: 2025,
    netAssetValue: '৳2,800,000,000',
    netAssetValueBDT: 2800000000,
    projectType: 'Residential',
    location: 'Banani, Dhaka',
  },
  {
    title: 'Downtown Heights',
    developer: 'Dom-Inno Builders Ltd.',
    inceptionYear: 2024,
    netAssetValue: '৳3,400,000,000',
    netAssetValueBDT: 3400000000,
    projectType: 'Residential',
    location: 'Dhanmondi, Dhaka',
  },
  {
    title: 'Navana Pristine Pavilion',
    developer: 'Navana Real Estate Ltd.',
    inceptionYear: 2013,
    netAssetValue: '৳4,200,000,000',
    netAssetValueBDT: 4200000000,
    projectType: 'Residential',
    location: 'Bashundhara R/A, Dhaka',
  },
  {
    title: 'Akash Tower',
    developer: 'Anwar Landmark Ltd.',
    inceptionYear: 2022,
    netAssetValue: '৳5,600,000,000',
    netAssetValueBDT: 5600000000,
    projectType: 'Commercial',
    location: 'Uttara, Dhaka',
  },
  {
    title: 'The Bay’s Edgewater',
    developer: 'Bay Developments Ltd.',
    inceptionYear: 2016,
    netAssetValue: '৳6,700,000,000',
    netAssetValueBDT: 6700000000,
    projectType: 'Luxury Residential',
    location: 'Gulshan 2, Dhaka',
  },
  {
    title: 'Shanta Western Tower',
    developer: 'Shanta Holdings Ltd.',
    inceptionYear: 2015,
    netAssetValue: '৳7,800,000,000',
    netAssetValueBDT: 7800000000,
    projectType: 'Commercial',
    location: 'Tejgaon, Dhaka',
  },
];

export default function UserInvestStepTwo({ setCurrentPage }) {
  const [selected, setSelected] = useState([]); // array of titles

  const byTitle = useMemo(() => new Set(selected), [selected]);

  const toggleProject = (p) => {
    setSelected((prev) =>
      prev.includes(p.title) ? prev.filter((t) => t !== p.title) : [...prev, p.title]
    );
  };

  const selectedProjects = useMemo(() => projects.filter((p) => byTitle.has(p.title)), [byTitle]);

  return (
    <div>
      <div className="flex items-center justify-normal gap-12">
        <BodyBase textColor="text-sub-heading" extraClass="w-[35%]">
          PROJECTS open for investment
        </BodyBase>
        <div className="grid grid-cols-3 w-[65%] items-center justify-normal gap-5">
          <SelectInput name="Company" />
          <SelectInput name="Project Type" />
          <SelectInput name="Location" />
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 items-stretch justify-normal gap-5">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            isSelected={byTitle.has(project.title)}
            onToggle={toggleProject}
          />
        ))}
      </div>
      <div className="my-5 flex items-center justify-between">
        <BodySmall>Showing 6 out of 300</BodySmall>
        <div className="flex items-center justify-normal gap-3">
          <div className="border border-border-primary rounded-md bg-bg-primary-2 p-1">
            <ChevronLeft />
          </div>
          <BodyBase textColor={`text-sub-heading`}>Page 1 of 20</BodyBase>
          <div className="border border-border-primary rounded-md bg-bg-primary-2 p-1">
            <ChevronRight />
          </div>
        </div>
      </div>
      <RoundedButton label="Continue" bg="bg-bg-dusky-plum-base my-5" rounded="rounded-md" />
      <div className="mt-10 py-5 border-t border-t-border-primary">
        <CaptionExtraSmall>
          Fundrise, LLC (“Fundrise“) operates a website at fundrise.com and certain mobile apps (the
          “Platform“). By using the Platform, you accept our Terms of Service and Privacy Policy.
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
          be found at fundrise.com/oc. For investors and potential investors who are residents of
          the State of Washington, please send all correspondence, including any questions or
          comments, to washingtonstate@fundrise.com. <br />
          <br />
          Fundrise takes any potential security issues seriously, and encourages the responsible and
          timely reporting of unknown security issues. Please send any discovered security concerns
          to  © 2025 Fundrise, LLC. All Rights Reserved. eREIT, eFund and eDirect are trademarks of
          Rise Companies Corp. Proudly designed and coded in Washington, D.C. <br />
          <br />© 2025 Fundrise, LLC. All Rights Reserved. eREIT, eFund and eDirect are trademarks
          of Rise Companies Corp. Proudly designed and coded in Washington, D.C.
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

          {/* <div className="max-h-[55vh] overflow-auto divide-y divide-border-primary">
            {selectedProjects.map((p) => (
              <div key={p.title} className="px-5 py-4 flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-sora text-[15px] font-semibold text-sub-heading truncate">
                    {p.title}
                  </p>
                  <p className="text-sm text-sub-title">{p.developer}</p>
                  <p className="text-sm text-sub-title">{p.location}</p>
                </div>

                <button
                  onClick={() => toggleProject(p)}
                  className="shrink-0 inline-flex items-center justify-center h-8 w-8 rounded-md border border-btext-1-base text-btext-1-base"
                  title="Remove"
                >
                  <X size={16} />
                </button>
              </div>
            ))}
          </div> */}

          <div className="px-5 py-4 border-t border-border-primary flex items-center justify-center">
            {/* <span className="text-sm text-sub-title">Ready to proceed?</span> */}
            <button
              className="px-4 py-2 rounded-md border border-btext-1-base text-btext-1-base font-display text-sm font-bold"
              onClick={() => setCurrentPage?.('review')}
            >
              Continue
            </button>
          </div>
        </aside>
      )}
    </div>
  );
}
