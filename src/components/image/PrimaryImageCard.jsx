import HomeHero from '../../assets/HomeHero.jpg';
function PrimaryImageCard() {
  return (
    <div className="chamfer-tr">
      <img src={HomeHero} alt="image card" className="w-full h-auto" />
    </div>
  );
}

export default PrimaryImageCard;
