/*
 *
 *  *
 *  *  * Author : Kouloughli Hemza
 *  *  * FileName : media.js
 *  *  * Date :  11/14/20, 6:18 PM.
 *  *  * Permission to use, copy, modify, and/or distribute this software for any
 *  *  * purpose with or without fee is NOT ALLOWED, provided that the above
 *  *  * copyright notice and this permission notice appear in all copies.
 *  *  * Copyright (c) 2020
 *  *
 *
 */

import * as actionTypes from "../actionTypes";
import api from "../../../api/api";

export const initMediaRequest = () => {
    return {
        type: actionTypes.INIT_MEDIA_REQUEST,
    };
};

export const startMediaRequest = (perPage = 10, page = 1, search = '',sort) => {
    return (dispatch) => {
        dispatch(initMediaRequest());
        api.get(`media?filter[search]=${search}&per_page=${perPage}&page=${page}&sort=${sort}`)
            .then((res) => {
                dispatch(mediaRequestSuccess(res.data.data,res.data?.meta));
            })
            .catch((err) => {
                dispatch(mediaRequestFailed(err));
            });
    };
};

export const mediaRequestSuccess = (media,meta) => {
    return {
        type: actionTypes.MEDIA_REQUEST_SUCCESS,
        files: media,
        meta
    };
};

export const mediaRequestFailed = (error) => {
    return {
        type: actionTypes.MEDIA_REQUEST_FAILED,
        error,
    };
};
