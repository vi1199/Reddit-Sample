import {Provider} from 'react-redux';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator} from './navigation/AppNavigator';
import {store} from './store/store';
import {AppInit} from './components/app/AppInit';
import ErrorBoundary from './components/app/errorBoundry/ErrorBoundry';
import {AppProvider} from './components/app/context/AppProvider';

export const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ErrorBoundary>
          <AppProvider>
            <AppNavigator />
          </AppProvider>
        </ErrorBoundary>
      </NavigationContainer>
    </Provider>
  );
};
