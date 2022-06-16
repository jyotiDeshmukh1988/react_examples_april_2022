import { useState, useCallback } from "react";
import Todos from "./ToDo";

const UseCallBackDemo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo1", "todo2"]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  //   const addTodo = () => {
  //     setTodos((t) => [...t, "New Todo"]);
  //   };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, []);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};
export default UseCallBackDemo;
