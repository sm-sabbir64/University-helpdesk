import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Toggle_btns from "./components/Toggle_btns";
import CountBox from "./components/CountBox";
import { Suspense } from "react";

const fetchIssues = async()=>{
  const result = await fetch("https://jsonplaceholder.typicode.com/posts");
  return result.json()
}

const App = () => {
  const fetchPromise = fetchIssues();

  return (
    <div>
      <Navbar></Navbar>

    {/* Box design*/}
      <CountBox></CountBox>

     {/* toggling-btns design */}
     <Suspense fallback={"Loading......"}>
       <Toggle_btns fetchPromise={fetchPromise}></Toggle_btns>
     </Suspense>
     

      <Footer></Footer>
    </div>
  );
};

export default App;
