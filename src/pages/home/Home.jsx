import BetterPortfolio from './BetterPortfolio';
import ExploreOfferings from './ExploreOfferings';
import GettingRewarded from './GettingRewarded';
import HighPerformance from './HighPerformance';
import HomeHero from './HomeHero';
import TearingDown from './TearingDown';
import WaysToInvest from './WaysToInvest';

function Home() {
  return (
    <>
      <HomeHero />
      <GettingRewarded />
      <TearingDown />
      <ExploreOfferings />
      <HighPerformance />
      <WaysToInvest />
      <BetterPortfolio />
    </>
  );
}

export default Home;
