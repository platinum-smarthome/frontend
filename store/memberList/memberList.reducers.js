import {
  FETCH_MEMBER_LIST,
  FETCH_MEMBER_LIST_LOADING,
  FETCH_MEMBER_LIST_ERROR
} from './memberList.actionType'

const initialState = {
  fetchMemberListLoading: true,
  users: [],
  fetchMemberListError: false,
}

const reducers = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_MEMBER_LIST:{
      return {
        ...state,
        users: [ ...action.payload ],
        fetchMemberListLoading: false
      }}
    case FETCH_MEMBER_LIST_LOADING:
      return {
        ...state,
        fetchMemberListLoading: true
      }
    case FETCH_MEMBER_LIST_ERROR:
      return {
        ...state,
        fetchMemberListLoading: false,
        fetchMemberListError: true
      }
    default:
      return state
  }
}

export default reducers