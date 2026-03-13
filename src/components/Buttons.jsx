import { useState } from "react";
import Container from "./Container";

const Buttons = () => {
  const [toggleStatus, setToggleStatus] = useState("All");

  console.log(toggleStatus);

  return (
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
  );
};

export default Buttons;
