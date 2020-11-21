/*
 *
 *  *
 *  *  * Author : Kouloughli Hemza
 *  *  * FileName : addMedia.js
 *  *  * Date :  11/14/20, 6:32 PM.
 *  *  * Permission to use, copy, modify, and/or distribute this software for any
 *  *  * purpose with or without fee is NOT ALLOWED, provided that the above
 *  *  * copyright notice and this permission notice appear in all copies.
 *  *  * Copyright (c) 2020
 *  *
 *
 */

import * as actionTypes from "../actionTypes";
import api from "../../../api/api";

export const initAddMediaRequest = () => {
    return {
        type: actionTypes.INIT_ADD_MEDIA_REQUEST,
    };
};

export const startAddMediaRequest = (formData,callback,setFiles) => {
    return (dispatch) => {
        dispatch(initAddMediaRequest());
        api.post(`media`,formData)
            .then((res) => {
                dispatch(addMediaRequestSuccess(res.data.data));
                callback(false)
                setFiles([])
            })
            .catch((err) => {
                let errors = "Uknown error"
                if( err.response){
                    errors = {
                        fieldsErrors: err.response.data.errors,
                        message: err.response.data.message,
                    };
                }
                dispatch(addMediaRequestFailed(errors));
            });
    };
};

export const addMediaRequestSuccess = (media) => {
    return {
        type: actionTypes.ADD_MEDIA_REQUEST_SUCCESS,
        file : media,
    };
};

export const addMediaRequestFailed = (err) => {
    return {
        type: actionTypes.ADD_MEDIA_REQUEST_FAILED,
        err,
    };
};
