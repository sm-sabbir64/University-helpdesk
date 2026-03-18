import { use, useState } from "react";
import Container from "./Container";
import Card from "./Card";



const Toggle_btns = ({ fetchPromise }) => {
  const [toggleStatus, setToggleStatus] = useState("All");
  const intialData = use(fetchPromise);
  const [data, setData] = useState(intialData)
  // console.log(data);



  return (
    <>
     
      <Container>
        <div className="flex justify-end gap-1 mb-12 my-12 mx-8">
          <button
            className={`toggle-btn rounded-l-lg ${toggleStatus == "All" && "!bg-purple-500 !text-white"}`}
            onClick={() => setToggleStatus("All")}
          >
            All
          </button>
          <button
            className={`toggle-btn ${toggleStatus == "Pending" && "!bg-purple-500 !text-white"}`}
            onClick={() => setToggleStatus("Pending")}
          >
            Pending
          </button>
          <button
            className={`toggle-btn ${toggleStatus == "Submited" && "!bg-purple-500 !text-white"}`}
            onClick={() => setToggleStatus("Submited")}
          >
            Submited
          </button>
          <button
            className={`toggle-btn rounded-r-lg ${toggleStatus == "Reviews" && "!bg-purple-500 !text-white"}`}
            onClick={() => setToggleStatus("Reviews")}
          >
            Reviews
          </button>
        </div>
      </Container>

      {/* Card section start here */}
      <div className="grid grid-cols-3 gap-4 max-w-8xl mx-auto px-19 mb-15">
        {data.map((issue, ind) => {
          return <Card key={ind} issue={issue}></Card>;
        })}
      </div>
    </>
  );
};

export default Toggle_btns;
