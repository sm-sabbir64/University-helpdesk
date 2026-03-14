import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Toggle_btns from "./components/Toggle_btns";
import CountBox from "./components/CountBox";


const App = () => {
  return (
    <div>
      <Navbar></Navbar>

      <CountBox></CountBox>

      <Toggle_btns></Toggle_btns>

      <Footer></Footer>
    </div>
  );
};

export default App;
