import "./app.sass";
import "./sass/sticky.sass";
import OpenPage from "./screens/OpenPage";
import PicturePage from "./screens/PicturePage";
import BannersPage from "./screens/BannersPage";
import PortfolioPage from "./screens/PortfolioPage";
import Contact from "./screens/ContactPage";

// const OpenPage = lazy(() => import("./screens/OpenPage"));
// const PicturePage = lazy(() => import("./screens/PicturePage"));
// const BannersPage = lazy(() => import("./screens/BannersPage"));
// const PortfolioPage = lazy(() => import("./screens/PortfolioPage"));
// const Contact = lazy(() => import("./screens/ContactPage"));

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
