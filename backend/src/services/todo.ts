import { v4 as uuid } from "uuid"

import { useCollection } from "./db"
import { TodoItem } from "../models/todo"

/**
 * get all todo items in the database
 */
export const getTodos = async (): Promise<TodoItem[]> => {
  const todoCollection = await useCollection<TodoItem>("todo")
  return await todoCollection.find({}).toArray()
}

/**
 * get a todo item with the given ID
 */
export const getTodoByID = async (_id: string): Promise<TodoItem> => {
  const todoCollection = await useCollection<TodoItem>("todo")
  return await todoCollection.findOne<TodoItem>({ _id })
}

/**
 * Create a new Todo item and store it in the database
 */
export const addTodo = async (todo: TodoItem): Promise<TodoItem> => {
  const todoCollection = await useCollection<TodoItem>("todo")
  const _id = uuid()
  const item: TodoItem = { ...todo, _id, complete: false }
  const { result } = await todoCollection.insertOne(item)
  if (!result.ok) {
    throw new Error("Could not insert TodoItem")
  }
  return item
}

/**
 * mark a todo item as complete
 */
export const completeTodo = async (_id: string): Promise<TodoItem> => {
  const todoCollection = await useCollection<TodoItem>("todo")
  const { result } = await todoCollection.updateOne({ _id }, {
    $set: { complete: true },
  })
  if (!result.ok) {
    throw new Error("Could not complete TodoItem")
  }
  return await getTodoByID(_id)
}
