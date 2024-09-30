import React from 'react';
import { Text } from 'react-native';

interface Props {
  text: string;
  align?: 'center' | 'left' | 'right';
}

export default function Paragraph({ text, align = 'left' }: Props) {
  return (
    <Text
      style={{
        fontSize: 14,
        textAlign: align,
        color: '#ffffff',
        marginTop: 8,
      }}
    >
      {text}
    </Text>
  );
}
