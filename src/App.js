import "./App.scss";
import HomeBanner from "./components/common/HomeBanner";
import HomeMain from "./components/common/HomeMain";
import Navbar from "./components/common/Navbar";
function App() {
  return (
    <>
      <Navbar />

      <HomeBanner />

      <HomeMain />
    </>
  );
}

export default App;
