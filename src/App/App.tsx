import "./App.css";
import { Infrastructure } from "../Infrastructure";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages";
import { Footer, Header } from "../Layout";

const MainContent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

const App = () => {
  return (
    <Infrastructure>
      <Header />
      <MainContent />
      <Footer />
    </Infrastructure>
  );
};

export default App;
