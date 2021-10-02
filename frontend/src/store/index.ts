import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import todo, { TodoAction } from "./todo";
import member, { MemberAction } from "./member";
import group, { GroupAction } from "./group";

// Action Types
export type Action = TodoAction | MemberAction | GroupAction;

const reducer = combineReducers({ todo, member, group });
export type State = ReturnType<typeof reducer>;

// create the redux store
export default createStore<State, any, any, any>(
  reducer,
  {},
  applyMiddleware(thunk)
);
