import Enzyme, { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
  FETCH_MEMBER_LIST,
  FETCH_MEMBER_LIST_LOADING,
  FETCH_MEMBER_LIST_ERROR
} from '../store/memberList/memberList.actionType';
import reducer from '../store/memberList/memberList.reducers';

let mockAction = {
  type: '',
  payload: {}
}

let mockState = {
  fetchMemberListLoading: true,
  users: [],
  fetchMemberListError: false,
}

let mockUser = {
  username: 'Bambang',
  email: 'bambang@gmail.com',
  pin: "123456",
  deviceId: "123456"
}

let result

describe('sensor.reducers Test', () => {

  it('Test reducers with action.type FETCH_MEMBER_LIST', () => {
    mockAction.type = FETCH_MEMBER_LIST
    mockAction.payload = [mockUser, mockUser, mockUser]
    result = reducer(mockState, mockAction)
    expect(result).toEqual({
      ...mockState,
      users: [ ...mockAction.payload ],
      fetchMemberListLoading: false
    })
    expect(result.fetchMemberListLoading).toEqual(false)
    expect(result.users.length).toEqual(3)
    expect(result.users[0]).toEqual(mockUser)
  })

  it('Test reducers with action.type FETCH_MEMBER_LIST_LOADING', () => {
    mockAction.type = FETCH_MEMBER_LIST_LOADING
    result = reducer(mockState, mockAction)
    expect(result).toEqual({
      ...mockState,
      fetchMemberListLoading: true
    })
    expect(result.fetchMemberListLoading).toEqual(true)
  })

  it('Test reducers with action.type FETCH_MEMBER_LIST_ERROR', () => {
    mockAction.type = FETCH_MEMBER_LIST_ERROR
    result = reducer(mockState, mockAction)
    expect(result).toEqual({
      ...mockState,
      fetchMemberListLoading: false,
      fetchMemberListError: true
    })
    expect(result.fetchMemberListLoading).toEqual(false)
    expect(result.fetchMemberListError).toEqual(true)
  })
  
})