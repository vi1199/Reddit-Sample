import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import React from 'react';
import {Text} from './Text';

interface Props extends TouchableOpacityProps {
  title?: string;
  tSize?: number;
  tColor?: string;
}

export const Button = (props: Props) => {
  const {style, title, tSize, tColor, ...rest} = props;
  return (
    <TouchableOpacity style={style} {...rest}>
      {props.children}
      <Text style={{fontSize: tSize, color: tColor}} title={title} />
    </TouchableOpacity>
  );
};
