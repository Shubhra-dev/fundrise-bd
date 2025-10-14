import DOMPurify from 'dompurify';
import SubHeading from '../../components/text/SubHeading';
function KeyTakeaways({ title, editorData, id }) {
  return (
    <div id={id} className="p-[30px] bg-bg-secondary">
      <SubHeading>{title}</SubHeading>
      <div
        className="pl-4 text-sm text-normal font-sora list-disc list-inside mt-2 dark:text-sub-title"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(editorData) }}
      ></div>
    </div>
  );
}

export default KeyTakeaways;
