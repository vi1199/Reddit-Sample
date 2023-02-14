import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {Posts} from '@src/components/home/Posts';
import {LoginModal} from '@src/components/login/LoginModal';
import {UserLogin} from '@src/components/login/UserLogin';
import {useAppSelector} from '@src/store/hooks';
import {NavScreens} from '@src/utils/constants';
import React from 'react';

const navOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={navOptions}>
      <Stack.Screen name="Login" component={UserLogin} />
      <Stack.Screen name={NavScreens.LOGIN_MODAL} component={LoginModal} />
    </Stack.Navigator>
  );
};

const HomeNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={navOptions}>
      <Stack.Screen name={NavScreens.POSTS} component={Posts} />
    </Stack.Navigator>
  );
};

export const AppNavigator = () => {
  const loginStatus = useAppSelector(state => state.user.loggedIn);
  return loginStatus ? <HomeNavigator /> : <AuthNavigator />;
};
