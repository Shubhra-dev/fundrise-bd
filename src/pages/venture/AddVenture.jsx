import SectionLayout from '../../ui/SectionLayout';

import Bg from '../../assets/Bg2.jpg';
import Title from '../../components/text/Title';
import PrimaryButton from '../../components/buttons/PrimaryButton';

function AddVenture({ text = `Add venture to your portfolio` }) {
  return (
    <SectionLayout bgImg={Bg}>
      <Title align={`text-center`}>{text}</Title>
      <div className="mt-7 w-max m-auto">
        <PrimaryButton label="Get Sarted" rightIcon={1} />
      </div>
    </SectionLayout>
  );
}

export default AddVenture;
