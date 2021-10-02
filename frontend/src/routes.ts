import { RouteProps } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Signup from "./pages/SignupPage";
import Interests from "./pages/InterestsPage";

const routes: RouteProps[] = [
  { path: "/", component: HomePage, exact: true },
  { path: "/signup", component: Signup, exact: true },
  { path: "/details", component: Interests, exact: true },
];
export default routes;
