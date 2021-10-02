import { RouteProps } from "react-router-dom"

import HomePage from "./pages/HomePage"
import TodoPage from "./pages/TodoPage"
import ProfilePage from "./pages/ProfilePage"

const routes: RouteProps[] = [
  { path: "/", component: HomePage, exact: true },
  { path: "/todo", component: TodoPage },
  { path: "/profile", component: ProfilePage }
]
export default routes
