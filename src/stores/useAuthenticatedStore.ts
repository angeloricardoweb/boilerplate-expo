import { create } from 'zustand';

type UserStoreType = {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
};

const useAuthenticatedStore = create<UserStoreType>((set) => ({
  isAuthenticated: false,
  setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
}));

export default useAuthenticatedStore;
