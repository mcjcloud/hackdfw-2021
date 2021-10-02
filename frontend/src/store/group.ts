import { TodoItem } from "../models/todo"
import { State as RootState } from "./index"
import { Dispatch } from "redux"

const API_ENDPOINT = "http://localhost:8080"

// State type
// this interface represents the schema for the Todo state
export interface TodoState {
  fetchError?: any
  createError?: any
  completeError?: any
  uncompleteError?: any
  isFetchingTodos: boolean
  isCreatingTodo: boolean
  isCompletingTodo: boolean
  isUncompletingTodo: boolean
  todos: TodoItem[]
}

// Action Types
// these represent the redux actions that can be dispatched

export interface TodoErrored {
  type: "TODO_ERRORED",
  payload: {
    fetchError?: any
    createError?: any
    completeError?: any
    uncompleteError?: any
  }
}

export interface TodosFetchedStarted { type: "TODOS_FETCHED_STARTED" }
export interface TodosFetched {
  type: "TODOS_FETCHED"
  payload: {
    todos: TodoItem[]
  }
}

export interface TodoCreatedStarted { type: "TODO_CREATED_STARTED" }
export interface TodoCreated {
  type: "TODO_CREATED"
  payload: {
    todo: TodoItem
  }
}

export interface TodoCompletedStarted { type: "TODO_COMPLETED_STARTED" }
export interface TodoCompleted {
  type: "TODO_COMPLETED"
  payload: {
    todo: TodoItem
  }
}

// TodoAction type
// this is a type which can refer to any of the action types defined above
// this is useful for the reducer
export type TodoAction =
  | TodoErrored
  | TodosFetched
  | TodosFetchedStarted
  | TodoCreated
  | TodoCreatedStarted
  | TodoCompleted
  | TodoCompletedStarted

// Default state
// when the app initializes, this will be the default redux state
const defaultState: TodoState = {
  isFetchingTodos: false,
  isCreatingTodo: false,
  isCompletingTodo: false,
  isUncompletingTodo: false,
  todos: [],
}

// Reducer
const reducer = (state: TodoState = defaultState, action: TodoAction): TodoState => {
  switch (action.type) {
    case "TODO_ERRORED": {
      return { ...state, ...action.payload }
    }
    case "TODOS_FETCHED_STARTED": {
      return { ...state, isFetchingTodos: true }
    }
    case "TODOS_FETCHED": {
      return {
        ...state,
        isFetchingTodos: false,
        todos: action.payload.todos,
      }
    }
    case "TODO_CREATED_STARTED": {
      return { ...state, isCreatingTodo: true }
    }
    case "TODO_CREATED": {
      return {
        ...state,
        isCreatingTodo: false,
        todos: [
          ...state.todos,
          action.payload.todo,
        ]
      }
    }
    case "TODO_COMPLETED_STARTED": {
      return { ...state, isCompletingTodo: true }
    }
    case "TODO_COMPLETED": {
      return {
        ...state,
        isCompletingTodo: false,
        todos: state.todos.reduce((todos, nextTodo) => {
          if (nextTodo._id === action.payload.todo._id) {
            return [...todos, action.payload.todo]
          }
          return [...todos, nextTodo]
        }, [] as TodoItem[]),
      }
    }
    default: {
      return state
    }
  }
}
export default reducer

// Actions
// these are dispatchable functions which update the redux state

export const fetchTodos = () => async (dispatch: Dispatch) => {
  dispatch({ type: "TODOS_FETCHED_STARTED" })
  const response = await fetch(`${API_ENDPOINT}/todo`).then(r => r.json())
  if (!!response && !!response.todos) {
    dispatch({ type: "TODOS_FETCHED", payload: { todos: response.todos } })
  } else {
    dispatch({ type: "TODO_ERRORED", payload: { fetchError: response?.error ?? "Error fetching Todo items" } })
  }
}

export const createTodo = (todo: TodoItem) => async (dispatch: Dispatch) => {
  dispatch({ type: "TODO_CREATED_STARTED" })
  const response = await fetch(`${API_ENDPOINT}/todo`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ todo })
  }).then(r => r.json())

  if (!!response && !!response.todo) {
    dispatch({ type: "TODO_CREATED", payload: { todo: response.todo } })
  } else {
    dispatch({ type: "TODO_ERRORED", payload: { createError: response?.error ?? "Error creating Todo item" } })
  }
}

export const completeTodo = (guid: string) => async (dispatch: Dispatch) => {
  dispatch({ type: "TODO_COMPLETED_STARTED" })
  const response = await fetch(`${API_ENDPOINT}/todo/${guid}/complete`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(r => r.json())

  if (!!response && !!response?.todo) {
    dispatch({ type: "TODO_COMPLETED", payload: { todo: response.todo } })
  } else {
    dispatch({ type: "TODO_ERRORED", payload: { completeError: response?.error ?? "Error completing Todo item" } })
  }
}

// Selectors
// these are functions to be used by useSelector in order to get data from redux

export const selectTodos = (state: RootState): TodoItem[] => state.todo.todos ?? []
export const selectCompleteTodos = (state: RootState): TodoItem[] => state.todo.todos.filter(item => item.complete) ?? []
export const selectIncompleteTodos = (state: RootState): TodoItem[] => state.todo.todos.filter(item => !item.complete) ?? []
