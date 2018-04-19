import { combineReducers } from 'redux'
import Data from './data/data.reducers'
import CreateNewHome from './createNewHome/createNewHome.reducers'
import AddNewUser from './addNewUser/addNewUser.reducers'
import Sensor from './sensors/sensor.reducers'
import HomeData from './homeData/homeData.reducers'
import UserData from './userData/userData.reducers'

const reducers = combineReducers({
  addNewUserReducer: AddNewUser,
  data: Data,
  CreateNewHomeReducer: CreateNewHome,
  sensors: Sensor,
  HomeData: HomeData,
  UserData: UserData
})

export default reducers