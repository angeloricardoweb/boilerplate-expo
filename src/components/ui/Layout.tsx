import React from 'react';
import { View } from 'react-native';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <View className="flex-1 bg-bgPrimary">{children}</View>;
}
