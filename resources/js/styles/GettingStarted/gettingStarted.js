/*
 *
 *  *
 *  *  * Author : Kouloughli Hemza
 *  *  * FileName : gettingStarted.js
 *  *  * Date :  11/12/20, 4:41 PM.
 *  *  * Permission to use, copy, modify, and/or distribute this software for any
 *  *  * purpose with or without fee is NOT ALLOWED, provided that the above
 *  *  * copyright notice and this permission notice appear in all copies.
 *  *  * Copyright (c) 2020
 *  *
 *
 */

/*
 *
 *  *
 *  *  * Author : Kouloughli Hemza
 *  *  * FileName : styledTabs.js
 *  *  * Date :  11/12/20, 2:42 PM.
 *  *  * Permission to use, copy, modify, and/or distribute this software for any
 *  *  * purpose with or without fee is NOT ALLOWED, provided that the above
 *  *  * copyright notice and this permission notice appear in all copies.
 *  *  * Copyright (c) 2020
 *  *
 *
 */
import styled , { css } from "styled-components";

export const TabContentContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const TabsLeftActionHolder = styled.div`
    margin: 3.2rem 0;
    flex-grow: 1;
`
export const TabsContentHeading = styled.div`
    margin-bottom: .8rem;
`


export const TabsContentLeft = styled.div`
    max-width: 28rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 30rem;
`
export const TabsContentRight = styled.div`
    max-width: 12rem;
    width: 100%;
    margin-left: 1.6rem;
    & > img {
        width: 100%;
    }
`


