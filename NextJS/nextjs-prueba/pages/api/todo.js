import { todos } from "../../data/todos"

export default function handler(req, res) {
  const { id } = req.query
  const todo = todos.find(todo => todo.id == id)
  res.status(200).json(todo)
}
