import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DashboardRoutes } from './DashboardRoutes';
import { AuthRoutes } from './AuthRoutes';
import useAuthenticatedStore from '@stores/useAuthenticatedStore';

export function Routes() {
  const { isAuthenticated } = useAuthenticatedStore();
  return (
    <NavigationContainer>
      {isAuthenticated ? <DashboardRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
