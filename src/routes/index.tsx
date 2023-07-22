import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DashboardRoutes } from './DashboardRoutes';

export function Routes() {
  return (
    <NavigationContainer>
      <DashboardRoutes />
    </NavigationContainer>
  );
}
