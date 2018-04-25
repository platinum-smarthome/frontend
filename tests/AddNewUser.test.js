import React from 'react';
import renderer from 'react-test-renderer';
import AddNewUser from '../screens/AddNewUser'
import configureStore from 'redux-mock-store'
const middlewares = []
const mockStore = configureStore(middlewares)

const CreateNewUserHandleInputChange = () => ({ type: 'CREATE_NEW_USER_HANDLE_INPUT_CHANGE' })
const CREATENEWUSERSUCCESS = () => ({ type: 'CREATE_NEW_USER_SUCCESS' })

describe('<AddNewUser />', () => {
  it('should dispatch action createNewUserHandleInputChange', () => {
    const initialState = {}
    const store = mockStore(initialState)
    store.dispatch(CreateNewUserHandleInputChange())
    const actions = store.getActions()
    const expectedPayload = { type: 'CREATE_NEW_USER_HANDLE_INPUT_CHANGE' }
    expect(actions).toEqual([expectedPayload])
  });

  it('should dispatch action CREATE_NEW_USER_SUCCESS', () => {
    const initialState = {}
    const store = mockStore(initialState)
    store.dispatch(CREATENEWUSERSUCCESS())
    const actions = store.getActions()
    const expectedPayload = { type: 'CREATE_NEW_USER_SUCCESS' }
    expect(actions).toEqual([expectedPayload])
  });
})