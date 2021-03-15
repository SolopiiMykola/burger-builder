import {put } from "redux-saga/effects";

import * as actions from '../store/actions/actionTypes'
function* logout(action) {
    yield localStorage.removeItem('token');
    yield localStorage.removeItem('expirationDate');
    yield localStorage.removeItem('userId');
    yield put({
        type: actions.AUTH_LOGOUT
    });
}