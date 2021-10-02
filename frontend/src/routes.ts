import { RouteProps } from "react-router-dom"

import HomePage from "./pages/HomePage"
import TodoPage from "./pages/TodoPage"
import Signup from "./pages/SignupPage"
import Interests from "./pages/InterestsPage"
import ProfilePage from "./pages/ProfilePage"

const routes: RouteProps[] = [
  { path: "/", component: HomePage, exact: true },
  // { path: "/todo", component: TodoPage, },
  { path: "/signup", component: Signup,},
  { path: "/details", component: Interests,},
  { path: "/profile", component: ProfilePage }
 ]

export default routes
