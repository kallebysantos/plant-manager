import React from 'react';
import {Text} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {StyledComponent} from 'nativewind';
import {tw} from '../lib/tailwind';
import {Style} from 'twrnc/dist/esm/types';
import clsx from 'clsx';

type States = 'active' | 'default';

type Variants = {
  [key in States]: Style | string;
};

type Props = {
  title: string;
  state?: States;
};

const buttonVariants: Variants = {
  active: clsx`bg-green-100 dark:bg-green-500/40`,
  default: clsx`bg-gray-100 dark:bg-gray-200/10`,
};

const textVariants: Variants = {
  active: clsx`font-semibold text-green-700 dark:text-green-200`,
  default: clsx`text-gray-600 dark:text-white`,
};

export function EnvironmentButton({title, state = 'default'}: Props) {
  return (
    <StyledComponent
      component={RectButton}
      style={tw`rounded-xl`}
      className={clsx(
        'mr-1.5 h-10 w-20 items-center justify-center',
        buttonVariants[state],
      )}
    >
      <Text className={clsx('capitalize', textVariants[state])}>{title}</Text>
    </StyledComponent>
  );
}
