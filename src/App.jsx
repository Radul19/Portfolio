import "./app.sass";
import "./sass/sticky.sass";
import OpenPage from "./screens/OpenPage";
import BannersPage from "./screens/BannersPage";
import Contact from "./screens/ContactPage";
import PicturePage from "./screens/PicturePage";
import PortfolioPage from "./screens/PortfolioPage";

function App() {
  return (
    <div className="root">
      <div className="holster">
        <div className="ctn">
          <OpenPage />
          <PicturePage />
          <BannersPage />
          <PortfolioPage />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
