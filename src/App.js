import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import LandingPage from "./components/landingpage/LandingPage";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
