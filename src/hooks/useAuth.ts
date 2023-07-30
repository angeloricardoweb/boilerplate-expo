import useAuthenticatedStore from '@stores/useAuthenticatedStore';
export function useAuth() {
  const { isAuthenticated, setIsAuthenticated } = useAuthenticatedStore();
  
  return {
    isAuthenticated,
    setIsAuthenticated,
  };
}
