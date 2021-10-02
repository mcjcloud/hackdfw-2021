import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"

import todo, { TodoAction } from "./todo"

// Action Types
export type Action = TodoAction

const reducer = combineReducers({ todo })
export type State = ReturnType<typeof reducer>

// create the redux store
export default createStore<State, any, any, any>(reducer, {}, applyMiddleware(thunk))
