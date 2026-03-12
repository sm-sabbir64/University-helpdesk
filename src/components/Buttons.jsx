import Container from "./Container";

const Buttons = () => {
    return (
        <Container>
             <div className="flex justify-end gap-1 mb-12">
          <button className="bg-purple-100 text-purple-500 px-4 py-1 font-semibold text-lg rounded-l-lg cursor-pointer">
            All
          </button>
          <button className="bg-purple-100 text-green-500 px-4 py-1 font-semibold text-lg cursor-pointer">
            Pending
          </button>
          <button className="bg-purple-100 text-orange-500 px-4 py-1 font-semibold text-lg cursor-pointer">
            Submited
          </button>
          <button className="bg-purple-100 text-red-500 px-4 py-1 font-semibold text-lg rounded-r-lg cursor-pointer">
            Reviews
          </button>
        </div>
      </Container>
    );
};

export default Buttons;