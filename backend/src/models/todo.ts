// represents a to-do item which will be fetched from the database
export interface TodoItem {
  _id: string
  label: string
  description?: string
  complete: boolean
}
