import {
    GET_MORE_USERS,
    GET_USERS,
    GET_TOTAL_USERS,
    SET_CURRENT_PAGE,
    BUTTON_DISABLED,
    SUBMIT_SUCCEEDED,
    OPEN_REGISTER_MODAL,
    OPEN_ERROR_MODAL,
    SHOW_BURGER_MENU
} from './types'

let initialState = {
    users: [],
    total_users: null,
    currentPage: 1,
    pageSize: 6,
    isDisabled: false,
    submitSucceeded: false,
    isOpenRegisterModal: false,
    error: false,
    isBurgerOpen: false
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            }
        case GET_TOTAL_USERS:
            return {
                ...state,
                total_users: action.payload
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        case GET_MORE_USERS:
            return {
                ...state,
                users: state.users.concat(action.payload)
            }
        case BUTTON_DISABLED:
            return {
                ...state,
                isDisabled: action.payload
            }
        case SUBMIT_SUCCEEDED:
            return {
                ...state,
                submitSucceeded: action.payload
            }
        case OPEN_REGISTER_MODAL:
            return {
                ...state,
                isOpenRegisterModal: action.payload
            }
        case OPEN_ERROR_MODAL:
            return {
                ...state,
                error: action.payload
            }
        case SHOW_BURGER_MENU:
            return {
                ...state,
                isBurgerOpen: action.payload
            }

        default:
            return state;
    }
}
