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

     
      <div className="grid grid-cols-3 gap-4 max-w-8xl mx-auto px-19 mb-15">
        {intialData.map((issue) => {
          return (
            <div
              key={issue.id}
              className="shadow-md rounded-md cursor-pointer bg-slate-100 p-4"
            >
              <div>
                <img
                  src={issue.image}
                  title={issue.name}
                  alt={issue.name}
                  className="w-20 h-20 rounded-full"
                />
                <h2 className="font-semibold text-lg">{issue.name}</h2>
              </div>

              <div className="flex justify-between">
                <h2 className="font-bold text-[24px]">{issue.subject}</h2>
                <div>
                  <span className={`font-semibold py-1 px-2 shadow ${issue.priority == "High"? "text-red-500 bg-red-100": issue.priority == "Medium"? "text-yellow-500 bg-yellow-100": "text-green-500 bg-green-100"}`}>{issue.priority}</span>
                  <span>{issue.status}</span>
                </div>
              </div>

              <p className="text-[17px]">{issue.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Toggle_btns;
