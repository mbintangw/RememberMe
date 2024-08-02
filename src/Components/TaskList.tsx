import { ListType } from "../types/ListType";
import TaskCard from "./TaskCard";

const TaskList = ({ title, icon }: ListType) => {
  return (
    <main className="w-1/3 flex flex-col items-center gap-20 ">
      <h2 className="flex gap-2 items-center text-white text-2xl">{icon} {title}</h2>
      <TaskCard />
    </main>
  )
}

export default TaskList
