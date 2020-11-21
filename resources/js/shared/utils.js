/*
 *
 *  *
 *  *  * Author : Kouloughli Hemza
 *  *  * FileName : utils.js
 *  *  * Date :  11/14/20, 7:08 PM.
 *  *  * Permission to use, copy, modify, and/or distribute this software for any
 *  *  * purpose with or without fee is NOT ALLOWED, provided that the above
 *  *  * copyright notice and this permission notice appear in all copies.
 *  *  * Copyright (c) 2020
 *  *
 *
 */

export const setErrorMessage = (status) => {
    switch (status) {
        case 404: {
            return "error_page_404";
        }
        case 401: {
            return "error_page_401";
        }
        case 500: {
            return "error_page_500";
        }
        case 422: {
            return "error_page_422";
        }
        default:
            return "unexpected_error";
    }
};
