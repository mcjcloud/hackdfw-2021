import express, { Request, Response } from "express"
import { getMessages, postMessage} from "../services/chat"

export const chatRouter = express.Router()

chatRouter.get("/", async (_: Request, res: Response) => {
  try {
    const messages = await getMessages()
    return res.status(200).json({ messages })
  } catch (error) {
    return res.status(500).json({ error })
  }
})

chatRouter.post("/", async (req: Request, res: Response) => {
  console.debug("BODY", req.body);
  if (!req.body) {
    return res.status(400).json({ error: "Invalid request body" })
  }
  try {
    const message = await postMessage(req.body)
    return res.status(200).json({ message })
  } catch (error) {
    return res.status(500).json({ error })
  }
})