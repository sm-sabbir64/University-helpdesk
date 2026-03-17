import { use, useState } from "react";
import Container from "./Container";

const Toggle_btns = ({ fetchPromise }) => {
  const [toggleStatus, setToggleStatus] = useState("All");
  const intialData = use(fetchPromise);
  console.log(intialData);

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

      <div>
        {intialData.map((issue) => {
          return (
            <div
              key={issue.id}
              className="shadow-md rounded-md cursor-pointer border-slate-100">
              <div>
                <img src={issue.image} title={issue.name} alt={issue.name}  className="w-20 h-20 rounded-full" />
                <h2 className="font-semibold text-lg">{issue.name}</h2>
                <p>{issue.email}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Toggle_btns;
