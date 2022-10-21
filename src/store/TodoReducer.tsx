const initalState = {
  todoList: [],
};

type todo = {
  text: string | null;
  id: number | null;
};

const TodoReducer: any = (state = initalState, action: any) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todoList: [...state.todoList, action.payload] };
    case "DELETE_TODO":
      const deleteTodo = state.todoList.filter(
        (singleTodo: todo) => singleTodo?.id !== action.payload
      );
      return { todoList: [...deleteTodo] };
    case "EDIT_TODO":
      let edit = window.prompt("Update Todo");
      let updatedTodo: any = state.todoList.map((item: todo) => {
        if (item?.id === action.payload) {
          return {
            ...item,
            todo: edit,
            id: action.payload,
          };
        }
        return item;
      });
      return { todoList: [...updatedTodo] };
    default:
      return state;
  }
};

export default TodoReducer;
