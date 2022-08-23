import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import Mid from "./Components/Mid";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Mid />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
