import {ActivityIndicator, StyleSheet} from 'react-native';
import {View} from '../app/View';
import {WebView} from 'react-native-webview';
import React from 'react';
import {Config} from '../network/config';
import {clientId, redirectUri, scopes, userAuthUrl} from '@src/utils/constants';
import 'url-search-params-polyfill';
import isEmpty from 'lodash/isEmpty';
import {setAccessToken} from './actions/userLogin';
import {useAppDispatch} from '@src/store/hooks';

export const LoginModal = () => {
  const dispatch = useAppDispatch();
  const renderLoading = () => {
    return (
      <View style={{flex: 1}}>
        <ActivityIndicator animating size={'large'} color="blue" />
      </View>
    );
  };
  const monitorUrl = navState => {
    const {url = ''} = navState;
    if (url.includes('access_token')) {
      let queryString = new URLSearchParams(url);
      let accessToken = queryString.get(redirectUri + '#access_token');
      if (!isEmpty(accessToken)) {
        setAccessToken(accessToken, dispatch);
      }
    }
  };
  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri: userAuthUrl,
        }}
        javaScriptEnabled
        onError={syntheticEvent => {
          const {nativeEvent} = syntheticEvent;
          console.log('WebView error: ', nativeEvent);
        }}
        onNavigationStateChange={monitorUrl}
        renderLoading={renderLoading}
        startInLoadingState
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
