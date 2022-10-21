import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "./store/TodoAction";

type item = {
  id: number | null;
  value: string | null;
};

type todos = {
  text: string | null;
  id: number | null;
};

type abc = {
  todoList: Array<item>;
};

const Todo = () => {
  const todoLists = useSelector((todo: abc) => todo?.todoList);
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  const handleAddTodo = (e: any) => {
    e.preventDefault();
    dispatch(addTodo({ todo, id: Date.now() }));
    setTodo("");
  };

  const handleEditTodo = (id: number | null) => {
    dispatch(editTodo(id));
  };

  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };

  if (!todoLists) {
    return (
      <React.Fragment>
        <form onSubmit={handleAddTodo}>
          Enter Todo:
          <input onChange={(e) => setTodo(e.target.value)} value={todo} />
          <button>Add Todo</button>
        </form>
        <div>
          <h5>No Todos...</h5>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <form onSubmit={handleAddTodo}>
          Enter Todo:{" "}
          <input onChange={(e) => setTodo(e.target.value)} value={todo} />
          <button>Add Todo</button>
        </form>
        {todoLists.map((item: any) => {
          return (
            <React.Fragment>
              <p>
                {item?.todo}
                <button onClick={() => handleEditTodo(item?.id)}>Edit</button>
                <button onClick={() => handleDeleteTodo(item?.id)}>
                  Delete
                </button>
              </p>
            </React.Fragment>
          );
        })}
      </React.Fragment>
    );
  }
};

export default Todo;
