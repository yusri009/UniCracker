import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CourseOrder from "./pages/CourseOrder/CourseOrder";
import AboutUs from "./pages/AboutUs/AboutUs";
import LoginRegister from "./pages/LoginRegister/LoginRegister";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import UniBot from "./components/UniBot/UniBot";

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <>
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
    </>
  );
}

export default App;
