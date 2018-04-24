import {
  FETCH_MEMBER_LIST,
  FETCH_MEMBER_LIST_LOADING,
  FETCH_MEMBER_LIST_ERROR
} from './memberList.actionType'
import { database } from '../../firebase/firebase'
import { searchUser } from '../userData/userData.actions'

export const fetchMemberList = (lastNotified) => { 
  return dispatch => {
    dispatch(fetchMemberListLoading())
    database().ref(`/smarthome/users`).on('value', (snaphot) => {
      let val = snaphot.val()
      if(val) {
        val = Object.values(snaphot.val()).reverse()
      } else { val = [] }
      dispatch(fetchMemberListSuccess(val))
      dispatch(searchUser(val))
    }, (err) => { dispatch(fetchMemberListError()) })
  }
}

export const fetchMemberListSuccess = (payload) => {
  return {
    type: FETCH_MEMBER_LIST,
    payload: payload
  }
}

const fetchMemberListLoading = () => {
  return {
    type: FETCH_MEMBER_LIST_LOADING,
  }
}

const fetchMemberListError = () => {
  return {
    type: FETCH_MEMBER_LIST_ERROR
  }
}
