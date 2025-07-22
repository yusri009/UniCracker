import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CourseOrder from "./pages/CourseOrder";
import AboutUs from "./pages/AboutUs";
import LoginRegister from "./pages/LoginRegister";
import ScrollToTop from "./components/ScrollToTop";
import UniBot from "./components/UniBot";

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
