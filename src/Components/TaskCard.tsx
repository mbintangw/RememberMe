import { useState } from "react";
import { FaCheck, FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
const TaskCard = () => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(!modal);
  };
  return (
    <main className="flex flex-wrap justify-center items-center gap-10 mx-10">
      <div className="flex flex-col  gap-7 p-6 bg-tertiary rounded-lg w-96">
        <div className="flex items-center justify-between gap-10 ">
          <div className="border-2 w-6 h-6 rounded-full border-stroke bg-green-500 "></div>
          <h1>Task Name</h1>
          <div className="flex gap-3">
            <FaCheck />
            <FaEdit />
            <FaDeleteLeft />
          </div>
        </div>

        <div className="border-b-2 flex justify-between">
          <p>Tanggal</p>
          <button onClick={openModal}>
            {modal ? <BiSolidUpArrow /> : <BiSolidDownArrow />}
          </button>
        </div>

        {modal && (
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit et
              illo voluptatem eveniet commodi sapiente accusamus iste quidem
              accusantium molestiae!
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default TaskCard;
