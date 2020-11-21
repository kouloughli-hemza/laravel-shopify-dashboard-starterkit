/*
 *
 *  *
 *  *  * Author : Kouloughli Hemza
 *  *  * FileName : store.js
 *  *  * Date :  11/14/20, 6:17 PM.
 *  *  * Permission to use, copy, modify, and/or distribute this software for any
 *  *  * purpose with or without fee is NOT ALLOWED, provided that the above
 *  *  * copyright notice and this permission notice appear in all copies.
 *  *  * Copyright (c) 2020
 *  *
 *
 */

import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunk from "redux-thunk"
import media from "./reducers/media/media";

const rootReducer = combineReducers({
    media
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)

export default store

