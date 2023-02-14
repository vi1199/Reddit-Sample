import {TextProps, Text as RNText} from 'react-native';
import React from 'react';

interface Props extends TextProps {
  title?: string;
}
export const Text = (props: Props) => {
  const {style, title, ...rest} = props;
  return <RNText style={style} {...rest} children={title} />;
};
