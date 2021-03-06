import { RouteProps } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Signup from "./pages/SignupPage/SignupPage";
import Profile from "./pages/ProfilePage/ProfilePage";
import GroupPage from "./pages/GroupPage";
import ProfilePage from "./pages/ProfilePage";
import Matches from "./pages/MatchesPage/MatchesPage";
import Join from "./pages/JoinPage/JoinPage";
import Schedule from "./pages/SchedulePage/Schedule";

const routes: RouteProps[] = [
  { path: "/", component: HomePage, exact: true },
  { path: "/signup", component: Signup, exact: true },
  { path: "/profile", component: Profile, exact: true },
  { path: "/me", component: ProfilePage, exact: true},
  { path: "/matches", component: Matches, exact: true },
  { path: "/join", component: Join, exact: true },
  { path: "/schedule", component: Schedule, exact: true },
  { path: "/group/:id", component: GroupPage, exact: true },
];

export default routes;
