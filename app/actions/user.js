import * as c from "../helpers/constants";

export function setUser(user) {
    return dispatch => dispatch({ type: c.SET_USER, user });
}

export function updateInfo(data) {
    return dispatch => dispatch({ type: c.UPDATE_USER, data });
}

export function logout() {
    return dispatch => dispatch({ type: c.LOGOUT });
}

export function newTransaction(data) {
    return dispatch => dispatch({ type: c.NEW_TRANSACTION, data });
}

export function undoTransaction(id) {
    return dispatch => dispatch({ type: c.UNDO_TRANSACTION, id });
}
