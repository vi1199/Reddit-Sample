import {View as RNView, ViewProps} from 'react-native';
import React from 'react';

interface Props extends ViewProps {}

export const View = (props: Props) => {
  const {style, ...rest} = props;
  return (
    <RNView style={style} {...rest}>
      {props.children}
    </RNView>
  );
};
