/*
 *
 *  *
 *  *  * Author : Kouloughli Hemza
 *  *  * FileName : deleteMedia.js
 *  *  * Date :  11/14/20, 6:49 PM.
 *  *  * Permission to use, copy, modify, and/or distribute this software for any
 *  *  * purpose with or without fee is NOT ALLOWED, provided that the above
 *  *  * copyright notice and this permission notice appear in all copies.
 *  *  * Copyright (c) 2020
 *  *
 *
 */

import * as actionTypes from "../actionTypes";
import api from "../../../api/api";

export const initDeleteMediaRequest = () => {
    return {
        type: actionTypes.INIT_DELETE_MEDIA_REQUEST,
    };
};

export const startDeleteMediaRequest = (ids,callback,setPage) => {
    return (dispatch) => {
        dispatch(initDeleteMediaRequest());
        api.delete(`media/${ids}/bulk`)
            .then((res) => {
                dispatch(deleteMediaRequestSuccess(ids));
                callback(false)
                setPage(1)
            })
            .catch((err) => {
                console.log(err)
                let errors = "Uknown error"
                if( err.response){
                    errors = {
                        fieldsErrors: err.response.data.errors,
                        message: err.response.data.message,
                    };
                }
                dispatch(deleteMediaRequestFailed(errors));
            });
    };
};

export const deleteMediaRequestSuccess = (ids) => {
    return {
        type: actionTypes.DELETE_MEDIA_REQUEST_SUCCESS,
        ids
    };
};

export const deleteMediaRequestFailed = (err) => {
    return {
        type: actionTypes.DELETE_MEDIA_REQUEST_FAILED,
        err,
    };
};
