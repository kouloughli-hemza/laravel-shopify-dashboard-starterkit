/*
 *
 *  *
 *  *  * Author : Kouloughli Hemza
 *  *  * FileName : api.js
 *  *  * Date :  11/14/20, 6:35 PM.
 *  *  * Permission to use, copy, modify, and/or distribute this software for any
 *  *  * purpose with or without fee is NOT ALLOWED, provided that the above
 *  *  * copyright notice and this permission notice appear in all copies.
 *  *  * Copyright (c) 2020
 *  *
 *
 */

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://bb3e2a08fcf9.ngrok.io/api/podify',
});

export default api;
