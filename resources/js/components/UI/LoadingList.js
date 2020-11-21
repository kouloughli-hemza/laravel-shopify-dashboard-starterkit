/*
 *
 *  *
 *  *  * Author : Kouloughli Hemza
 *  *  * FileName : LoadingList.js
 *  *  * Date :  11/8/20, 9:38 PM.
 *  *  * Permission to use, copy, modify, and/or distribute this software for any
 *  *  * purpose with or without fee is NOT ALLOWED, provided that the above
 *  *  * copyright notice and this permission notice appear in all copies.
 *  *  * Copyright (c) 2020
 *  *
 *
 */
import React from 'react';
import {
  SkeletonPage,
  Layout,
  Card,
  TextContainer,
  SkeletonBodyText,
  SkeletonDisplayText,
} from '@shopify/polaris';

const LoadingList = () => (
  <SkeletonPage primaryAction secondaryActions={2}>
    <Layout>
      <Layout.Section>
        <Card sectioned>
          <SkeletonBodyText />
        </Card>
        <Card sectioned>
          <TextContainer>
            <SkeletonDisplayText size="small" />
            <SkeletonBodyText />
          </TextContainer>
        </Card>
        <Card sectioned>
          <TextContainer>
            <SkeletonDisplayText size="small" />
            <SkeletonBodyText />
          </TextContainer>
        </Card>
      </Layout.Section>
    </Layout>
  </SkeletonPage>
);

export default LoadingList;
