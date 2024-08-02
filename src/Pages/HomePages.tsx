import TaskForm from "../Components/TaskForm";
import TaskList from "../Components/TaskList";

const HomePages = () => {
  return (
  <div className="flex flex-col gap-10 justify-center">
    <TaskForm/>
    <TaskList/>
  </div>
  );
};

export default HomePages;
