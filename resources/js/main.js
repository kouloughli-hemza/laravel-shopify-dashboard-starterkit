import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { AppProvider, Layout } from '@shopify/polaris';
import translations from '@shopify/polaris/locales/en.json';
import { Provider, TitleBar } from '@shopify/app-bridge-react';
import { Provider as ReduxProvider } from 'react-redux';
import store from './store/store';


const Main = () => {
  const config = {
    apiKey: document.getElementById('apiKey').value,
    shopOrigin: document.getElementById('shopOrigin').value,
    forceRedirect: true,
  };


  return (
    <AppProvider features={{ newDesignLanguage: true }} i18n={translations}>
      <Provider config={config}>
        <TitleBar title="Dashboard" />
        <Layout sectioned={true}>
          <Layout.Section>
            <Routes />
          </Layout.Section>
        </Layout>
      </Provider>
    </AppProvider>
  );
};

export default Main;

if (document.getElementById('app')) {
    console.log('hello got it')
  ReactDOM.render(
    <ReduxProvider store={store}>
      <Main />
    </ReduxProvider>,
    document.getElementById('app'),
  );
}
