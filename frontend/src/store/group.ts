import { Dispatch } from "redux";
import { State as RootState } from ".";
import { Group } from "../models";

const API_ENDPOINT = "http://localhost:8080";

export interface GroupState {
  groups: {
    [groupId: string]: {
      group?: Group;
      fetching: boolean;
      error: any;
    };
  };
}

export interface GroupErrored {
  type: "GROUP_ERRORED";
  payload: {
    groupId: string;
    error: any;
  };
}

export interface GroupFetchedStarted {
  type: "GROUP_FETCHED_STARTED";
  payload: {
    groupId: string;
  };
}
export interface GroupFetchedEnded {
  type: "GROUP_FETCHED_ENDED";
  payload: {
    groupId: string;
    group?: Group;
    error?: any;
  };
}

export type GroupAction =
  | GroupErrored
  | GroupFetchedStarted
  | GroupFetchedEnded;

const defaultState: GroupState = {
  groups: {},
};

const reducer = (
  state: GroupState = defaultState,
  action: GroupAction
): GroupState => {
  switch (action.type) {
    case "GROUP_ERRORED": {
      return {
        ...state,
        groups: {
          ...state.groups,
          [action.payload.groupId]: {
            ...state.groups[action.payload.groupId],
            fetching: false,
            error: action.payload.error,
          },
        },
      };
    }
    case "GROUP_FETCHED_STARTED": {
      return {
        ...state,
        groups: {
          ...state.groups,
          [action.payload.groupId]: {
            ...state.groups[action.payload.groupId],
            fetching: true,
          },
        },
      };
    }
    case "GROUP_FETCHED_ENDED": {
      return {
        ...state,
        groups: {
          ...state.groups,
          [action.payload.groupId]: {
            ...state.groups[action.payload.groupId],
            fetching: false,
            group: action.payload.group,
            error: action.payload.error,
          },
        },
      };
    }
    default:
      return state;
  }
};
export default reducer;

export const fetchGroupById =
  (groupId: string) => async (dispatch: Dispatch) => {
    dispatch({ type: "GROUP_FETCHED_STARTED", payload: { groupId } });
    // TODO maybe use API
    const group: Group = {
      guid: "456",
      avatar: "",
      groupName: "My group",
      groupDescription: "A test group",
      members: [],
      schedule: [],
      channels: [],
      posts: [],
    };
  };

export const selectGroup =
  (groupId: string) =>
  (state: RootState): Group | undefined =>
    state.group.groups[groupId]?.group;
