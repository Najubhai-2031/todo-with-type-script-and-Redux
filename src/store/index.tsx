import { applyMiddleware, compose, createStore } from "redux";
import reduxThunk from "redux-thunk";
import TodoReducer from "./TodoReducer";

const composeEnhancers: any = compose;

// console.log("composeEnhancers", composeEnhancers);

const store = createStore(
  TodoReducer,
  composeEnhancers(applyMiddleware(reduxThunk))
);

store.subscribe(() => {
  // console.log("store data:", store.getState());
});

export default store;
