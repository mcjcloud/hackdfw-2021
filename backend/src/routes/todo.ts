import express, { Request, Response } from "express"
import { addTodo, completeTodo, getTodos } from "../services/todo"

// handles all requests made to the /todo route
export const todoRouter = express.Router()

/**
 * GET /
 * fetch all to-do items in the database
 */
todoRouter.get("/", async (_: Request, res: Response) => {
  try {
    const todos = await getTodos()
    return res.status(200).json({ todos })
  } catch (error) {
    return res.status(500).json({ error })
  }
})

/**
 * POST /
 * create a new to-do item by providing a new label
 */
todoRouter.post("/", async (req: Request, res: Response) => {
  // make sure they included a todo item
  if (!req.body?.todo?.label) {
    return res.status(400).json({ error: "Invalid request body" })
  }
  try {
    const todo = await addTodo(req.body?.todo)
    return res.status(200).json({ todo })
  } catch (error) {
    return res.status(500).json({ error })
  }
})

/**
 * POST /:id/complete
 * mark an existing to-do item as complete
 */
todoRouter.post("/:id/complete", async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const todo = await completeTodo(id)
    if (!todo) {
      return res.status(404).json({ error: "Item not found" })
    }
    return res.status(200).json({ todo })
  } catch (error) {
    return res.status(500).json({ error })
  }
})
