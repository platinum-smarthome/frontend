import { GET_DATA_SUCCESS, GET_DATA_LOADING, GET_DATA_ERROR } from './data.actionType'
import firebase from 'firebase'
import { database } from '../../firebase/firebase'

export const getData = () => {
  return dispatch => {
    dispatch(getDataLoading())
    return database.ref(`/smarthome`).on('value', (snap) => {
      const data = snap.val()
      console.log(data)
      dispatch(getDataSuccess(data))
    }, (err) => {
      dispatch(getDataError())
    })
  }
}

const getDataSuccess = (payload) => ({
  type: GET_DATA_SUCCESS,
  data: payload
})

const getDataLoading = () => ({
  type: GET_DATA_LOADING,
})

const getDataError = () => ({
  type: GET_DATA_ERROR
})