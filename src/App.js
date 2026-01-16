import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Review from "./Components/Review";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Work/>
      <Review/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
