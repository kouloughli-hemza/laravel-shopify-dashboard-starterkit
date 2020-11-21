import React from 'react';
import { Page, Card, Frame, DisplayText } from '@shopify/polaris';
import { TitleBar } from '@shopify/app-bridge-react';
import StyledTabs from '../../styles/Tabs/styledTabs';
import GettingStarted from './GettingStarted/GettingStarted';

const Dashboard = () => {

  return (
    <Frame>
      <Page>
        <TitleBar title="Dashboard" />
        <Card title={
            <DisplayText element="h2" size="small">
                You’re off to a great start.
            </DisplayText>
        }>
            <StyledTabs>
              <GettingStarted />
            </StyledTabs>
        </Card>
      </Page>
    </Frame>
  );
};

export default Dashboard;
