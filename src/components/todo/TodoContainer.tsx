// import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFielter from "./TodoFielter";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  // from local state
  // const { todos } = useAppSelector((state) => state.todos);

  // console.log(todos);

  // from server
  const { data: todos, isLoading, isError } = useGetTodosQuery(undefined);
  const sortingTodo = [...todos].sort(
    (a, b) => Number(a.isCompleted) - Number(b.isCompleted)
  );
  if (isLoading) {
    return <p>Loadin....</p>;
  }
  // if (isError) {
  //   return <p>Error</p>;
  // }
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
// 
