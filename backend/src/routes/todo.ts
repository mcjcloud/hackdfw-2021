import express, { Request, Response } from "express"
import { getTodos } from "../services/todo"

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