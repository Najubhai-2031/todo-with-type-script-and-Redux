import React from "react";

type todo = {
  text: string | null;
  id: number | null;
};

export const addTodo: any = (todo: todo) => {
  return (dispatch: any) => {
    dispatch({
      type: "ADD_TODO",
      payload: { ...todo },
    });
  };
};

export const deleteTodo: any = (id: number) => {
  return (dispatch: any) => {
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  };
};

export const editTodo: any = (id: number) => {
  return (dispatch: any) => {
    dispatch({
      type: "EDIT_TODO",
      payload: id,
    });
  };
};
