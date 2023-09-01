import "./app.sass";
import "./sass/sticky.sass";
import OpenPage from "./screens/OpenPage";
import PicturePage from "./screens/PicturePage";
import BannersPage from "./screens/BannersPage";
import PortfolioPage from "./screens/PortfolioPage";
import Contact from "./screens/ContactPage";

function App() {
  return (
    <div className="holster">
      <div className="ctn">
        <OpenPage />
        <PicturePage />
        <BannersPage />
        <PortfolioPage />
        <Contact />
      </div>
    </div>
  );
}

export default App;
