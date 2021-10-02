/**
 * represents a to-do item when creating and managing the to-do list
 */
export interface TodoItem {
  _id?: string
  label: string
  description?: string
  complete?: boolean
}
