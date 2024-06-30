import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFielter from "./TodoFielter";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);
  console.log(todos);
  const sortingTodo = [...todos].sort(
    (a, b) => Number(a.isCompleted) - Number(b.isCompleted)
  );
  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFielter />
      </div>
      <div className="bg-primary-gradient w-full h-[500px] rounded-xl p-[5px] ">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {sortingTodo?.map((item) => (
            <TodoCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
