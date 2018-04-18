import { GET_DATA_SUCCESS, GET_DATA_LOADING } from './data.actionType'

const initialState = {
  loading: false,
  error: false,
  data: []
}

export const reducers = (state=initialState, action) => {
  switch(action.type) {
    case GET_DATA_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false
      }
    case GET_DATA_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}