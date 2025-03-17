import Navbar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Lessons from "./components/Lessons/Lessons";
import Community from "./components/Community/Community";

function App() {


  return (
    <div className="w-full">
      
        <Navbar/>
        <Header/>
        <Lessons/>
        <Community/>
   
    </div>
  );

};

export default App;
