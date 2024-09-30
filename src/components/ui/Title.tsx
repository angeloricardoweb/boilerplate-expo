import React from 'react';
import { Text } from 'react-native';

interface Props {
  text: string;
  align?: 'center' | 'left' | 'right';
}

export default function Title({ text, align = 'left' }: Props) {
  return (
    <Text
      style={{
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: align,
        color: '#ffffff',
      }}
    >
      {text}
    </Text>
  );
}
