/*
 *
 *  *
 *  *  * Author : Kouloughli Hemza
 *  *  * FileName : MediaManager.js
 *  *  * Date :  11/13/20, 3:38 PM.
 *  *  * Permission to use, copy, modify, and/or distribute this software for any
 *  *  * purpose with or without fee is NOT ALLOWED, provided that the above
 *  *  * copyright notice and this permission notice appear in all copies.
 *  *  * Copyright (c) 2020
 *  *
 *
 */

import React, { useCallback, useEffect, useState } from 'react';
import { Page } from '@shopify/polaris';
import List from './List';
import LoadingList from '../UI/LoadingList';
import withErrorHandling from '../../hoc/withErrorHandling';
import api from '../../api/api';

const MediaManager = () => {
  const [isLoading, setLoading] = useState(true);
  const [active, setActive] = useState(false);
  const handleModalChange = useCallback(() => setActive(!active), [active]);

  const content = isLoading ? (
    <LoadingList />
  ) : (
    <List modalActive={active} handleModalChange={handleModalChange} />
  );

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Page
      title="Designs"
      primaryAction={{ content: 'Add design', onAction: () => handleModalChange() }}
    >
      {content}
    </Page>
  );
};
export default withErrorHandling(MediaManager, api);
