import { useNavigate } from 'react-router-dom';
import BodyBase from '../../components/text/BodyBase';

function MenuItem({ name, active, children, link }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(link)}
      className={`flex items-center rounded-md cursor-pointer justify-normal px-7 py-2.5 group hover:shadow-[0px_2px_4px_1px_rgba(0,0,0,0.06)] gap-3 ${active ? 'shadow-[0px_2px_4px_1px_rgba(0,0,0,0.06)]' : ''}`}
    >
      {children}
      <BodyBase textColor={active ? 'text-btext-2-dark' : 'text-paragraph'}>{name}</BodyBase>
    </div>
  );
}

export default MenuItem;
