import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import CourseOrder from "./pages/CourseOrder";
import AboutUs from "./pages/AboutUs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import LoginRegister from "./pages/LoginRegister";
import { useLocation } from "react-router-dom";
import UniBot from "./components/UniBot";

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <div className="App">
      <ScrollToTop />
      <div>
        {!isLoginPage && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courseorder" element={<CourseOrder />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/login" element={<LoginRegister />} />
        </Routes>
        {!isLoginPage && <UniBot />}
        {!isLoginPage && <Footer />}
      </div>
    </div>
  );
}

export default App;
