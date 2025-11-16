import DOMPurify from 'dompurify';
import he from 'he';

function normalizeHtml(raw) {
  if (!raw) return '';

  let s = String(raw).trim();

  // 1) If API included surrounding quotes, remove them
  if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
    s = s.slice(1, -1);
  }

  // 2) Unescape slashes: <\/p> -> </p>, https:\/\/... -> https://...
  s = s.replace(/\\\//g, '/');

  // 3) Decode HTML entities (&#39;, &nbsp;, etc.)
  const decoded = he.decode(s);

  // 4) Sanitize, allowing the tags/attrs we know we need
  const clean = DOMPurify.sanitize(decoded, {
    ADD_TAGS: ['img'],
    ADD_ATTR: ['href', 'src', 'alt', 'target', 'rel'],
  });

  // 5) Optional: ensure external links are safe
  return clean.replace(/target="_blank"/g, 'target="_blank" rel="noopener noreferrer"');
}

export default function RenderRichText({ html }) {
  const safeHtml = normalizeHtml(html);

  console.log('RAW >>>', html);
  console.log('NORMALIZED >>>', safeHtml);

  return (
    <div
      className="mt-2 text-sub-heading font-normal text-base font-workSans"
      dangerouslySetInnerHTML={{ __html: safeHtml }}
    />
  );
}
