/*
 *
 *  *
 *  *  * Author : Kouloughli Hemza
 *  *  * FileName : GettingStarted.js
 *  *  * Date :  11/12/20, 3:37 PM.
 *  *  * Permission to use, copy, modify, and/or distribute this software for any
 *  *  * purpose with or without fee is NOT ALLOWED, provided that the above
 *  *  * copyright notice and this permission notice appear in all copies.
 *  *  * Copyright (c) 2020
 *  *
 *
 */

import React from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import { Icon, Heading, Button } from '@shopify/polaris';
import {
  AddProductMajor,
  OrderStatusMinor,
  PaymentsMajor,
  SlideshowMajor,
} from '@shopify/polaris-icons';
import './gettingStarted.css';
import {
  TabContentContainer,
  TabsContentLeft,
  TabsContentRight,
  TabsLeftActionHolder,
  TabsContentHeading,
} from '../../../styles/GettingStarted/gettingStarted';
import { useHistory } from 'react-router';

const GettingStarted = () => {
  const history = useHistory();

  return (
    <Tabs defaultTab="vertical-tab-one" vertical>
      <TabList>
        <Tab tabFor="vertical-tab-one">
          <span className="tabs-icon">
            <Icon source={AddProductMajor} color="inkLightest" />
          </span>
          Add Product
        </Tab>
        <Tab tabFor="vertical-tab-two">
          <span className="tabs-icon">
            <Icon source={SlideshowMajor} color="inkLightest" />
          </span>
          Upload Design
        </Tab>
        <Tab tabFor="vertical-tab-three">
          <span className="tabs-icon">
            <Icon source={OrderStatusMinor} color="inkLightest" />
          </span>
          Check Orders
        </Tab>
        <Tab tabFor="vertical-tab-four">
          <span className="tabs-icon">
            <Icon source={PaymentsMajor} color="inkLightest" />
          </span>
          Setup payments
        </Tab>
      </TabList>

      <TabPanel tabId="vertical-tab-one">
        <TabContentContainer>
          <TabsContentLeft>
            <TabsContentHeading>
              <Heading>Create and add New product</Heading>
            </TabsContentHeading>
            <p>Add more products or move on to another tip.</p>
            <TabsLeftActionHolder>
              <Button primary size="small">
                Create product
              </Button>
            </TabsLeftActionHolder>
          </TabsContentLeft>
          <TabsContentRight>
            <img src="https://cdn.shopify.com/shopifycloud/shopify/assets/admin/home/onboarding/home-onboard-prod-complete-b2bdb8d2f037f3e8dcb82d48cd28890f64d110732716c351b1a6369a7a54ced0.svg" />
          </TabsContentRight>
        </TabContentContainer>
      </TabPanel>

      <TabPanel tabId="vertical-tab-two">
        <TabContentContainer>
          <TabsContentLeft>
            <TabsContentHeading>
              <Heading>Upload your first design</Heading>
            </TabsContentHeading>
            <p>Upload your first design for later use when creating a new product.</p>
            <TabsLeftActionHolder>
              <Button primary size="small" onClick={() => history.push('/podify/app/media')}>
                Upload design
              </Button>
            </TabsLeftActionHolder>
          </TabsContentLeft>
          <TabsContentRight>
            <img src="https://cdn.shopify.com/shopifycloud/shopify/assets/admin/home/onboarding/home-onboard-prod-complete-b2bdb8d2f037f3e8dcb82d48cd28890f64d110732716c351b1a6369a7a54ced0.svg" />
          </TabsContentRight>
        </TabContentContainer>
      </TabPanel>

      <TabPanel tabId="vertical-tab-three">
        <TabContentContainer>
          <TabsContentLeft>
            <TabsContentHeading>
              <Heading>Create and add New product</Heading>
            </TabsContentHeading>
            <p>Add more products or move on to another tip.</p>
            <TabsLeftActionHolder>
              <Button primary size="small">
                Create product
              </Button>
            </TabsLeftActionHolder>
          </TabsContentLeft>
          <TabsContentRight>
            <img src="https://cdn.shopify.com/shopifycloud/shopify/assets/admin/home/onboarding/home-onboard-prod-complete-b2bdb8d2f037f3e8dcb82d48cd28890f64d110732716c351b1a6369a7a54ced0.svg" />
          </TabsContentRight>
        </TabContentContainer>
      </TabPanel>

      <TabPanel tabId="vertical-tab-four">
        <TabContentContainer>
          <TabsContentLeft>
            <TabsContentHeading>
              <Heading>Start selling with PODIFY</Heading>
            </TabsContentHeading>
            <p>
              Set up your payment method to start accepting orders. You’ll need to provide some
              basic information about your business.
            </p>
            <TabsLeftActionHolder>
              <Button primary size="small">
                Create product
              </Button>
            </TabsLeftActionHolder>
          </TabsContentLeft>
          <TabsContentRight>
            <img src="https://cdn.shopify.com/shopifycloud/shopify/assets/admin/home/onboarding/home-onboard-payments-compliance-incomplete-3c6b4faab91c9bce2ef0725360461a748bb138ab27f88b5c18e5cb6be78105e9.svg" />
          </TabsContentRight>
        </TabContentContainer>
      </TabPanel>
    </Tabs>
  );
};
export default GettingStarted;
