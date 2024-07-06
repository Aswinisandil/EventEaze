import logo from "./logo.svg";
import "./App.css";
import CircleCardSlider from "./Components/Common/CircleCardSlider";
import { HeroCardData } from "./StaticData/HomePageData";

function App() {
  return (
    <div className="App">
      <CircleCardSlider sliderData={HeroCardData} />
    </div>
  );
}

export default App;
