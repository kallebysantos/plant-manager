import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';

type ButtonProps = TouchableOpacityProps & {
  title: string;
};

export function Button({title, ...props}: ButtonProps) {
  return (
    <TouchableOpacity
      className="h-14 items-center justify-center rounded-lg bg-green-500"
      activeOpacity={0.7}
      {...props}>
      <Text className="text-base text-white  font-heading">{title}</Text>
    </TouchableOpacity>
  );
}
