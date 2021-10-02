import { State as RootState } from "./index";
import { Dispatch } from "redux";
import { Member } from "../models";

const API_ENDPOINT = "http://localhost:8080";

export interface MemberState {
  member?: Member;
  loggingIn: boolean;

  fetchError?: any;
  loginError?: any;
  createAccountError?: any;
}

export interface MemberErrored {
  type: "MEMBER_ERRORED";
  payload: {
    fetchError?: any;
    loginError?: any;
    createAccountError: any;
  };
}

export interface LoginStarted {
  type: "LOGIN_STARTED";
}
export interface LoggedIn {
  type: "LOGGED_IN";
  payload: {
    member: Member;
  };
}

export type MemberAction = MemberErrored | LoginStarted | LoggedIn;

const defaultState: MemberState = {
  loggingIn: false,
};

const reducer = (
  state: MemberState = defaultState,
  action: MemberAction
): MemberState => {
  switch (action.type) {
    case "MEMBER_ERRORED": {
      return { ...state, ...action.payload };
    }
    case "LOGIN_STARTED": {
      return { ...state, loggingIn: true };
    }
    case "LOGGED_IN": {
      return { ...state, loggingIn: false, member: action.payload.member };
    }
    default:
      return state;
  }
};
export default reducer;

export const loggin = () => async (dispatch: Dispatch) => {
  dispatch({ type: "LOGIN_STARTED" });
  // TODO: maybe fetch from API?
  const member: Member = {
    guid: "123",
    username: "johndoe",
    name: "John Doe",
    email: "johndoe@mailinator.com",
    interests: [],
    status: "",
    groups: [],
  };
  dispatch({ type: "LOGGED_IN", payload: { member } });
};

export const selectMember =
  () =>
  (state: RootState): Member | undefined =>
    state.member.member;
