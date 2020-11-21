/*
 *
 *  *
 *  *  * Author : Kouloughli Hemza
 *  *  * FileName : media.js
 *  *  * Date :  11/14/20, 6:21 PM.
 *  *  * Permission to use, copy, modify, and/or distribute this software for any
 *  *  * purpose with or without fee is NOT ALLOWED, provided that the above
 *  *  * copyright notice and this permission notice appear in all copies.
 *  *  * Copyright (c) 2020
 *  *
 *
 */

import * as actionTypes from '../../actions/actionTypes';

const initState = {
  files: [],
  meta: {},
  isFetching: false,
  hasError: null,
  isLoading: false,
};

const media = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.INIT_MEDIA_REQUEST:
      return {
        ...state,
        isFetching: true,
        hasError: null,
        files: [],
        meta: {},
      };
    case actionTypes.MEDIA_REQUEST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        files: action.files,
        meta: action.meta,
      };
    case actionTypes.MEDIA_REQUEST_FAILED:
      return {
        ...state,
        isFetching: false,
        hasError: action.error,
        files: [],
        meta: {},
      };

    /*  ========= Adding Media ============= */
    case actionTypes.INIT_ADD_MEDIA_REQUEST:
      return {
        ...state,
        isLoading: true,
        hasError: null,
      };

    case actionTypes.ADD_MEDIA_REQUEST_SUCCESS:
      return {
        ...state,
        files: state.files.concat(action.file),
        isLoading: false,
      };
    case actionTypes.ADD_MEDIA_REQUEST_FAILED:
      return {
        ...state,
        isLoading: false,
        hasError: action.err,
      };

    /* This part for deleting Media*/
    case actionTypes.INIT_DELETE_MEDIA_REQUEST:
      return {
        ...state,
        isLoading: true,
        hasError: null,
      };

      case actionTypes.DELETE_MEDIA_REQUEST_SUCCESS:
      const oldMedia = [...state.files];
      const updatedMedia = oldMedia.filter(oldMedia => !action.ids.includes(oldMedia.id));

      return {
        ...state,
        files: updatedMedia,
        isLoading: false,
      };
    case actionTypes.DELETE_MEDIA_REQUEST_FAILED:
      return {
        ...state,
        isLoading: false,
        hasError: action.err,
      };

    default:
      return state;
  }
};
export default media;
