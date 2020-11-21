/*
 *
 *  *
 *  *  * Author : Kouloughli Hemza
 *  *  * FileName : withErrorHandling.js
 *  *  * Date :  11/16/20, 6:18 PM.
 *  *  * Permission to use, copy, modify, and/or distribute this software for any
 *  *  * purpose with or without fee is NOT ALLOWED, provided that the above
 *  *  * copyright notice and this permission notice appear in all copies.
 *  *  * Copyright (c) 2020
 *  *
 *
 */

import React, { useState, Fragment, useEffect } from 'react';
import { Toast, Frame } from '@shopify/polaris';
import { getSessionToken } from '@shopify/app-bridge-utils';
import { useAppBridge } from '@shopify/app-bridge-react';

const withErrorHandling = (Component, axios) => {
    return function WrappedComponent(props) {
        const [error, setError] = useState(null);
        const [isError, setIsError] = useState(false);
        const appBridgeInstance = useAppBridge();

        const confirmErrorHandler = () => {
            setError(null);
            setIsError(true);
        };

        const reqInterceptor = axios.interceptors.request.use((req) => {
            setError(null);
            setIsError(true);

            return getSessionToken(appBridgeInstance) // requires an App Bridge instance
                .then((token) => {
                    // append your request headers with an authenticated token
                    req.headers['Authorization'] = `Bearer ${token}`;
                    return req;
                });
        });
        const resInterceptor = axios.interceptors.response.use(
            (res) => res,
            (error) => {
                let customError = null;
                if (error.response) {
                    if (error.response.status === 404) {
                        customError = 'The requested page was not found';
                    } else {
                        customError = 'Error occurred, retry again.';
                    }
                } else {
                    customError = 'Error occurred, retry again.';
                }
                setError(customError);
                setIsError(true);
            },
        );

        useEffect(() => {
            // Will unmount
            return () => {
                axios.interceptors.request.eject(reqInterceptor);
                axios.interceptors.response.eject(resInterceptor);
            };
        }, []);

        const showError = error ? (
            <Toast content={error} onDismiss={confirmErrorHandler} error={isError} />
        ) : null;
        return (
            <Fragment>
                <Component {...props} />
                <Frame>{showError}</Frame>
            </Fragment>
        );
    }

};
export default withErrorHandling;
