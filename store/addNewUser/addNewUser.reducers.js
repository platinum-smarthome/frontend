import { 
  CREATE_NEW_USER_HANDLE_INPUT_CHANGE,
  CREATE_NEW_USER_LOADING,
  CREATE_NEW_USER_SUCCESS,
  CREATE_NEW_USER_ERROR
} from './addNewUser.actionType';

const initialState = {
  username: '',
  email: '',
  pin: '',
  addNewUserLoading: false,
  addNewUserError: false,
}

const reducers = (state={ ...initialState }, action) => {
  switch (action.type) {
    case CREATE_NEW_USER_HANDLE_INPUT_CHANGE:{
      return {
        ...state,
        [action.payload.name]: action.payload.value
      }}
    case CREATE_NEW_USER_LOADING:
      return {
        ...state,
        addNewUserLoading: true
      }
    case CREATE_NEW_USER_SUCCESS:
      return initialState
    case CREATE_NEW_USER_ERROR:
      return {
        ...state,
        addNewUserLoading: false,
        addNewUserError: true
      }
    default:
      return state
  }
}

export default reducers