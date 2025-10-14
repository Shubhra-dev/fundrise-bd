import React from 'react';
import SectionLayout from '../../ui/SectionLayout';
import IOIDistributionChart from './IOIDistributionChart';
import KeyTakeaways from './KeyTakeaways';
import PerformanceChart from './PerformanceChart';
import BarChartComponent from './BarChartComponent';
import PieDistributionChart from './PieDistributionChart';
import DOMPurify from 'dompurify';
import SubHeading from '../../components/text/SubHeading';

function ContentContainer({ contents = [] }) {
  return (
    <SectionLayout padding={`py-0`}>
      <div className="bg-white px-2 sm:px-8 py-10 flex items-start justify-normal gap-10">
        <div className="w-full">
          {contents.map((item, index) => (
            <React.Fragment key={index}>
              {item.content_type === `key_takeaways` && (
                <KeyTakeaways editorData={item.data} title={item.title} id={index} />
              )}
              {item.content_type === `text` && (
                <div className="mt-16" id={index}>
                  <SubHeading>{item.title}</SubHeading>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(item.data),
                    }}
                    className="mt-5 text-textParagraph dark:text-textParagraphDark font-normal text-base font-workSans"
                  ></div>
                </div>
              )}
              <div className="mt-16">
                {item.content_type === `graph` && item.data.chart_type === 'line' && (
                  <PerformanceChart content={item} id={index} />
                )}
                {/* {item.content_type === `graph` && item.data.chart_type === '' && (
                  <AIPrimaryFundingChart id={index} />
                )} */}
                {item.content_type === `graph` && item.data.chart_type === 'bar' && (
                  <BarChartComponent data={item.data} title={item.title} id={index} />
                )}
                {item.content_type === `graph` && item.data.chart_type === 'bar_distributed' && (
                  <IOIDistributionChart data={item.data} title={item.title} id={index} />
                )}
                {item.content_type === `graph` && item.data.chart_type === 'pie' && (
                  <PieDistributionChart data={item.data} title={item.title} id={index} />
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
}

export default ContentContainer;
