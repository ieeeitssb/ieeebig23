import "./App.css";
import Footer from "./Component/Footer";
import MainContent from "./MainContent";
import Navbar from "./Component/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
