import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Story from "./components/sections/Story";
import Thieves from "./components/sections/Thieves";
import Summary from "./components/sections/Summary";
import Location from "./components/sections/Location";
import Members from "./components/sections/Members";

const Home = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route
            path={`*`}
            element={
              <div>
                <div>
                  <h3 style={{ textAlign: "center" }}>404 Page Not Found</h3>
                </div>
                <div>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={`${process.env.PUBLIC_URL}/img/404horse.jpg`}
                    alt='404時の画像'
                  />
                </div>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
