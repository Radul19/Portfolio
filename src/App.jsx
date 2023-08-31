// import "./app.sass";
import "./sass/sticky.sass";
import OpenPage from "./screens/OpenPage";
import BannersPage from "./screens/BannersPage";
import Contact from "./screens/ContactPage";
import PicturePage from "./screens/PicturePage";
import PortfolioPage from "./screens/PortfolioPage";
import StickyTest from "./screens/StickyTest";

function App() {
  return (
    <div className="root">
      {/* <StickyTest/> */}
      <div className="holster">
        <div className="ctn">
          <OpenPage />
          <PicturePage />
          <BannersPage />
          <PortfolioPage />
          <Contact />
        </div>
      </div>
      {/* <OpenPage />
      <PicturePage />
      <PortfolioPage />
      <Contact /> */}
    </div>
  );
}

export default App;
