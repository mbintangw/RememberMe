import { TbTargetArrow } from "react-icons/tb";
import { LuCalendarClock } from "react-icons/lu";
import { FaRegCircleCheck } from "react-icons/fa6";


const TaskList = () => {
  return (
    <main className="flex flex-wrap justify-evenly items-center">
      <section className="flex items-center gap-3"> <TbTargetArrow /> To do</section>
      <section className="flex items-center gap-3"><LuCalendarClock />Due Date</section>
      <section className="flex items-center gap-3"><FaRegCircleCheck />Completed</section>
    </main>
  )
}

export default TaskList
