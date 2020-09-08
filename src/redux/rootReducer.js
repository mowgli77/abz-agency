import {combineReducers} from 'redux'
import {usersReducer} from './usersReducer'
import {reducer as formReducer} from 'redux-form'


const rootReducer = combineReducers({
    users: usersReducer,
    form: formReducer
})
export default rootReducer