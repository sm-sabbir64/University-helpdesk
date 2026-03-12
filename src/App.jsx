import Container from "./components/Container";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>

      <Container>
        <div className="grid grid-cols-3 gap-5 my-12 mx-8">
          <div className="rounded-md p-7 text-white h-62 bg-gray-600 flex flex-col justify-center items-center">
            <h2 className="font-bold text-[35px]">Pending</h2>
            <p className="font-semibold text-[26px]">0</p>
          </div>
          <div className="rounded-md p-7 text-white h-62 bg-purple-600 flex flex-col justify-center items-center">
            <h2 className="font-bold text-[35px]">Submited</h2>
            <p className="font-semibold text-[26px]">0</p>
          </div>
          <div className="rounded-md p-7 text-white h-62 bg-teal-600 flex flex-col justify-center items-center">
            <h2 className="font-bold text-[35px]">Reviewed</h2>
            <p className="font-semibold text-[26px]">0</p>
          </div>
        </div>
      </Container>

      <Footer></Footer>
    </div>
  );
};

export default App;
