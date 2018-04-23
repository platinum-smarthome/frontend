import { 
  CREATE_NEW_HOME_HANDLE_INPUT_CHANGE,
  CREATE_NEW_HOME_LOADING,
  CREATE_NEW_HOME_SUCCESS,
  CREATE_NEW_HOME_ERROR,
  SET_CREATE_NEW_HOME_MESSAGE
} from './createNewHome.actionType';

const initialState = {
  homeName:'',
  homePin:'',
  createNewHomeLoading: false,
  createNewHomeError: false,
  message: '',
}

const reducers = (state={ ...initialState }, action) => {
  switch (action.type) {
    case CREATE_NEW_HOME_HANDLE_INPUT_CHANGE:{
      return {
        ...state,
        [action.payload.name]: action.payload.value
      }}
    case CREATE_NEW_HOME_LOADING:
      return {
        ...state,
        createNewHomeLoading: true
      }
    case CREATE_NEW_HOME_SUCCESS:
      return initialState
    case CREATE_NEW_HOME_ERROR:
      return {
        ...state,
        createNewHomeLoading: false,
        createNewHomeError: true
      }
    case SET_CREATE_NEW_HOME_MESSAGE:
      return {
        ...state,
        message: action.payload
      }
    default:
      return state
  }
}

export default reducers