import {getTokenAPI, getUsersAPI, registerAPI} from '../API/api'
import {
    GET_USERS, GET_MORE_USERS, GET_TOTAL_USERS, SET_CURRENT_PAGE, BUTTON_DISABLED, SUBMIT_SUCCEEDED, OPEN_REGISTER_MODAL, OPEN_ERROR_MODAL, SHOW_BURGER_MENU
} from "./types";

const getUsers = (payload) => ({type: GET_USERS, payload})
const getTotalUsers = (payload) => ({type: GET_TOTAL_USERS, payload})
const getMoreUsers = (payload) => ({type: GET_MORE_USERS, payload})
const setButtonDisabled = (payload) => ({type: BUTTON_DISABLED, payload})
const setSubmitSucceeded = (payload) => ({type: SUBMIT_SUCCEEDED, payload})
export const setOpenRegisterModal = (payload) => ({type: OPEN_REGISTER_MODAL, payload})
export const setOpenErrorModal = (payload) => ({type: OPEN_ERROR_MODAL, payload})
export const setShowBurgerMenu = (payload) => ({type: SHOW_BURGER_MENU, payload})
export const setCurrentPage = (payload) => ({type: SET_CURRENT_PAGE, payload})


export const getUsersThunk = (page = 1, count = 6) => async (dispatch) => {
    try {
        let result = await getUsersAPI(page, count)
        dispatch(getUsers(result.data.users))
        dispatch(getTotalUsers(result.data.total_users))
    } catch (e) {
        if (e.hasOwnProperty('response')) {
            dispatch(setOpenErrorModal(e.response.data.message))
        }
    }
}
export const getMoreUsersThunk = (page, count) => async (dispatch) => {
    try {
        dispatch(setButtonDisabled(true))
        let result = await getUsersAPI(page, count)
        dispatch(getMoreUsers(result.data.users))
        dispatch(getTotalUsers(result.data.total_users))
        dispatch(setButtonDisabled(false))
    } catch (e) {
        dispatch(setButtonDisabled(false))
        if (e.hasOwnProperty('response')) {
            dispatch(setOpenErrorModal(e.response.data.message))
        }
    }
}
export const registerThunk = (values) => async (dispatch, getState) => {
    try {
        dispatch(setButtonDisabled(true))
        let result = await getTokenAPI()
        if(result.data.success) {
            let res = await registerAPI(values, result.data.token)
            if (res.data.success) {
                let values = getState().form.registration.values
                let fields = getState().form.registration.fields
                values.name = ''
                values.email = ''
                values.phone = ''
                values.position_id = ''
                values.photo = null

                fields.name.touched = false
                fields.email.touched = false
                fields.phone.touched = false
                fields.position_id.touched = false
                fields.photo.touched = false

                dispatch(setSubmitSucceeded(true))
                dispatch(setButtonDisabled(false))
                dispatch(setOpenRegisterModal(true))
                dispatch(getUsersThunk())
            }
        }
    } catch (e) {
        dispatch(setButtonDisabled(false))
        if (e.hasOwnProperty('response')) {
            dispatch(setOpenErrorModal(e.response.data.message))
        }
    }
}