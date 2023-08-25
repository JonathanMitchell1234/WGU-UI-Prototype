import './App.css';
import ResponsiveAppBar from './Components/nav';
import Hero from './Components/hero';
import MediaCard from './Components/about';
import Intro from './Components/intro';
import MoreInfo from './Components/moreinfo';

function App() {
  return (
<div className="App">
      <ResponsiveAppBar />
      <Hero />
      <Intro />
      <MediaCard />
      <MoreInfo />
</div>
  );
}

export default App;
