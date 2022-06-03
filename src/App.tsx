import React from 'react';
import { Grommet } from 'grommet';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/es/integration/react';
import { AllRoutes } from '@/routes/Routes';
import { THEME } from '@/constants';
import { store, persistor } from '@/user/store';
import { Layout } from '@/sharedComponents/layout/Layout/Layout';
import '@/styles/style.scss';

export const App = () => {
  return (
    <Provider store={store}>
      <Grommet theme={THEME}>
        <BrowserRouter>
          <PersistGate loading={null} persistor={persistor}>
            <Layout>
              <AllRoutes />
            </Layout>
          </PersistGate>
        </BrowserRouter>
      </Grommet>
    </Provider>
  );
};
