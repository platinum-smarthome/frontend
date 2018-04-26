import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import memberListReducer from '../../store/memberList/memberList.reducers';

const middlewares = [];
const mockStore = configureStore(middlewares);
const fetchMemberList = () => ({ type: 'FETCH_MEMBER_LIST' });

describe('test actions notification logs', () => {
  it('should dispatch action fetchMemberList', () => {
    const initialState = {}
    const store = mockStore(initialState)
    store.dispatch(fetchMemberList())
    const actions = store.getActions()
    const expectedPayload = { type: 'FETCH_MEMBER_LIST' }
    expect(actions).toEqual([expectedPayload])
  });
});

describe('test reducer member list', () => {
  it('reducers initialState', () => {
    let wrapper = memberListReducer(undefined, {})
    expect(wrapper).toEqual({ 
      users: [],
      fetchMemberListLoading: true,
      fetchMemberListError: false,
    })
  });
});