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
