import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <button>Filter</button>
      </div>
      <div className="bg-primary-gradient w-full h-[500px] rounded-xl p-[5px] ">
        {/* <div className="flex items-center justify-center p-5 bg-white text-2xl font-bold rounded-md">
          <p>There is no task Panding</p>
        </div> */}
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          <TodoCard />
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
