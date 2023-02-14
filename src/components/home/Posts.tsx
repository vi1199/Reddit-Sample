import {useAppDispatch} from '@src/store/hooks';
import React from 'react';
import {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Text} from '../app/Text';
import {View} from '../app/View';
import {getPosts} from './actions/posts';

export const Posts = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log('--called effect');

    dispatch(getPosts());
  }, []);
  return (
    <View style={styles.container}>
      <Text title="center" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
