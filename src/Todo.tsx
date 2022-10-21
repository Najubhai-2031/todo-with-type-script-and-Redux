import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "./store/TodoAction";

type itemType = {
  id: number | null;
  todo: string | null;
};

type todoListType = {
  todoList: Array<itemType>;
};

const Todo = () => {
  const todoLists = useSelector((todo: todoListType) => todo?.todoList);
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

  const handleDeleteTodo = (id: number | null) => {
    dispatch(deleteTodo(id));
  };

  return (
    <React.Fragment>
      <form onSubmit={handleAddTodo}>
        Enter Todo:
        <input onChange={(e) => setTodo(e.target.value)} value={todo} />
        <button>Add Todo</button>
      </form>
      {!todoLists ? (
        <div>
          <h5>No Todos...</h5>
        </div>
      ) : (
        <>
          {todoLists.map((item: itemType) => {
            return (
              <React.Fragment>
                <p>
                  {item?.todo}
                  <button
                    onClick={() => handleEditTodo(item?.id)}
                    style={{ marginRight: "3px" }}
                  >
                    Edit
                  </button>
                  <button onClick={() => handleDeleteTodo(item?.id)}>
                    Delete
                  </button>
                </p>
              </React.Fragment>
            );
          })}
        </>
      )}
    </React.Fragment>
  );
};

export default Todo;
