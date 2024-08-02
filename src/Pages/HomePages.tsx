import TaskForm from "../Components/TaskForm";
import TaskList from "../Components/TaskList";
import { TbTargetArrow } from "react-icons/tb";
import { LuCalendarClock } from "react-icons/lu";
import { FaRegCircleCheck } from "react-icons/fa6";

const HomePages = () => {
  return (
    <div className="flex flex-col gap-20 justify-center">
      <TaskForm />
      <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly items-center gap-20">
        <TaskList title="To do" icon={<TbTargetArrow />} />
        <TaskList title="Due Date" icon={<LuCalendarClock />} />
        <TaskList title="Completed" icon={<FaRegCircleCheck />} />
      </div>
    </div>
  );
};


export default HomePages;
