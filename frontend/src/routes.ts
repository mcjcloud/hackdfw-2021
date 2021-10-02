import { RouteProps } from "react-router-dom"

import HomePage from "./pages/HomePage"
import TodoPage from "./pages/TodoPage"

const routes: RouteProps[] = [
  { path: "/", component: HomePage, exact: true },
  { path: "/todo", component: TodoPage },
]
export default routes
