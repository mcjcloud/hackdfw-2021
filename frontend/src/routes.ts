import { RouteProps } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Signup from "./pages/SignupPage/SignupPage";
import Profile from "./pages/ProfilePage";
import GroupPage from "./pages/GroupPage";

const routes: RouteProps[] = [
  { path: "/", component: HomePage, exact: true },
  { path: "/signup", component: Signup, exact: true },
  { path: "/profile", component: Profile, exact: true },
  { path: "/group/:id", component: GroupPage, exact: true },
];

export default routes;
