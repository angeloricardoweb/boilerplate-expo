import { Alert } from 'react-native';
import { api } from '@services/axios';
import { useMutation } from 'react-query';
import { useAuth } from './useAuth';
import { setToken } from '@storage/token';

type LoginProps = {
  email: string;
  password: string;
};

async function login(props: LoginProps) {
  return await api
    .post('https://api-temp-hermes.vercel.app/api/auth/login', {
      email: props.email,
      password: props.password,
    })
    .then((response) => response.data);
}

export function useLogin() {
  const { setIsAuthenticated } = useAuth();

  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setIsAuthenticated(true);
      setToken(data.results.token);
    },
    onError: (error: any) => {
      Alert.alert('Ops!', error.response.data.message);
    },
  });
}
