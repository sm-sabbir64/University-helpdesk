

const Card = ({ issue }) => {
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
          <span
            className={`font-semibold py-1 px-2 shadow mr-2 rounded-md ${issue.priority == "High" ? "text-red-500 bg-red-100" : issue.priority == "Medium" ? "text-yellow-500 bg-yellow-100" : "text-green-500 bg-green-100"}`}
          >
            {issue.priority}
          </span>
          <span
            className={`font-semibold py-1 px-2 shadow mr-2 rounded-md ${issue.status == "Pending" ? "text-red-500 bg-red-100" : issue.status == "Reviewed" ? "text-yellow-500 bg-yellow-100" : "text-green-500 bg-green-100"}`}
          >
            {issue.status}
          </span>
        </div>
      </div>

      <p className="text-[17px]">{issue.description}</p>
    </div>
  );
};

export default Card;
