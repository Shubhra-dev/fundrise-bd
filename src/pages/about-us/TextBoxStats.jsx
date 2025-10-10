import BodyBase from '../../components/text/BodyBase';
import Title from '../../components/text/Title';

function TextBoxStats({ title, detail }) {
  return (
    <div>
      <Title textColor={`text-white`} align={`text-center`}>
        {title}
      </Title>
      <BodyBase
        textColor={`text-white`}
        extraClass={`mt-[5px]`}
        fontWeight={`font-normal`}
        align={`text-center`}
      >
        {detail}
      </BodyBase>
    </div>
  );
}

export default TextBoxStats;
