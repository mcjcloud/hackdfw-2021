import { RouteProps } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Signup from "./pages/SignupPage";
import Interests from "./pages/InterestsPage";
import ProfilePage from "./pages/ProfilePage";
import GroupPage from "./pages/GroupPage";

const routes: RouteProps[] = [
  { path: "/", component: HomePage, exact: true },
  { path: "/signup", component: Signup, exact: true },
  { path: "/details", component: Interests, exact: true },
  { path: "/profile", component: ProfilePage, exact: true },
  { path: "/group/:id", component: GroupPage, exact: true },
];

export default routes;
