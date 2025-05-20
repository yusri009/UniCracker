import "./App.css";
import ChatBot from "./components/ChatBot";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <ChatBot />
      <Footer />
    </div>
  );
}

export default App;
