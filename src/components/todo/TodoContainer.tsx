// import { useAppSelector } from "@/redux/hook";
import { useGetTodosQuery } from "@/redux/api/api";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFielter from "./TodoFielter";
// import TodoFielter from "./TodoFielter";

const TodoContainer = () => {
  // from local state
  // const { todos } = useAppSelector((state) => state.todos);

  // console.log(todos);

  // from server
  const { data: todos, isLoading, isError } = useGetTodosQuery(undefined);

  if (isLoading) {
    return <p>Loading...</p>; // Corrected loading text
  }
  if (isError) {
    return <p>Error, error.message</p>;
  }

  // Check if todos is defined before sorting
  const sortedTodos = todos
    ? [...todos].sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted))
    : [];

  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFielter />
      </div>
      <div className="bg-primary-gradient w-full h-[500px] rounded-xl p-[5px] ">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {sortedTodos.map((item) => (
            <TodoCard key={item?.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
