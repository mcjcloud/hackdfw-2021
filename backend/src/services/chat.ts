import { v4 as uuid } from "uuid"

import { useCollection } from "./db"
import { Message } from "../models/chat"

export const getMessages = async (): Promise<Message[]> => {
  const chatCollection = await useCollection<Message>("message")
  return await chatCollection.find({}).toArray()
}

export const getMessagesByID = async (_id: string): Promise<Message> => {
  const chatCollection = await useCollection<Message>("message")
  return await chatCollection.findOne<Message>({ _id })
}

export const postMessage = async (message: string) => {
  const chatCollection = await useCollection<Message>("message")
  const _id = uuid()
  const item: Message = { message, _id}
  return await chatCollection.insertOne(item)
}