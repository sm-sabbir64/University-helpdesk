import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Toggle_btns from "./components/Toggle_btns";
import IssuesManagement from "./components/IssuesManagement";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>

      <IssuesManagement></IssuesManagement>

      <Toggle_btns></Toggle_btns>

      <Footer></Footer>
    </div>
  );
};

export default App;
