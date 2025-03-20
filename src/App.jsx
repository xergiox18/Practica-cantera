import Navbar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Lessons from "./components/Lessons/Lessons";
import Community from "./components/Community/Community";
import Pixelgrade from "./components/Pixelgrade/Pixelgrade";
import DataReport from "./components/DataReport/DataReport";
import Design from "./components/Design/Design";
import Customers from "./components/Customers/Customers";
import Marketing from "./components/Marketing/Marketing";
import FooterDemo from "./components/Footer/FooterDemo";
import Footer from "./components/Footer/FooterContact";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Lessons />
      <Community />
      <Pixelgrade />
      <DataReport />
      <Design />
      <Customers />
      <Marketing />
      <FooterDemo />
      <Footer />
    </div>
  );
}

export default App;
