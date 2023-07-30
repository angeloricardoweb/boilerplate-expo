import {
  View,
  Text,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Alert,
} from 'react-native';

import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '@theme/colors';
import { formStyles, typography } from '@theme/globalStyles';
import Logo from '../../../assets/icon.png';
import { useMutation } from 'react-query';
import { api } from '@services/axios';
import { messageError } from '@services/messageError';
import { useAuth } from '@hooks/useAuth';
import { setToken } from '@storage/token';

type LoginProps = {
  email: string;
  password: string;
};

export function LoginScreen() {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const { setIsAuthenticated } = useAuth();

  const handleLogin = useMutation({
    mutationFn: async (props: LoginProps) => {
      if (!props.email || !props.password) {
        throw messageError('Preencha todos os campos');
      }
      return await api
        .post('https://api-temp-hermes.vercel.app/api/auth/login', {
          email: props.email,
          password: props.password,
        })
        .then((response) => response.data);
    },
    onSuccess: (data) => {
      setIsAuthenticated(true);
      setToken(data.results.token);
    },
    onError: (error: any) => {
      Alert.alert('Ops!', error.response.data.message);
    },
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1"
    >
      <LinearGradient
        colors={['#0a91c7', '#0a91c7']}
        start={[0.0, 0.5]}
        end={[1.0, 0.5]}
        locations={[0.0, 1.0]}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={{ flex: 1, justifyContent: 'center', marginVertical: 32 }}
          >
            <View style={{ paddingHorizontal: 40 }}>
              <View>
                <Image
                  style={{
                    width: 90,
                    height: 60,
                    alignSelf: 'center',
                  }}
                  source={Logo}
                  resizeMode="contain"
                />
              </View>
              <View style={{ marginBottom: 32 }}>
                <Text style={typography.titleClean}>Bem-vindo de volta</Text>
                <Text style={typography.subTitleClean}>Logar na sua conta</Text>
              </View>
              <View style={formStyles.compactInputWrapper}>
                <FontAwesome
                  name="user"
                  size={24}
                  color={colors.primaryBlack}
                />
                <TextInput
                  style={formStyles.compactInput}
                  onChangeText={onChangeEmail}
                  keyboardType="email-address"
                  placeholder="E-mail"
                  value={email}
                />
              </View>

              <View style={{ marginTop: 8, marginBottom: 32 }}>
                <View style={formStyles.compactInputWrapper}>
                  <FontAwesome
                    name="lock"
                    size={24}
                    color={colors.primaryBlack}
                  />
                  <TextInput
                    style={formStyles.compactInput}
                    onChangeText={onChangePassword}
                    secureTextEntry={true}
                    maxLength={6}
                    value={password}
                    placeholder="Senha"
                  />
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <View style={{ paddingHorizontal: 40, marginBottom: 40 }}>
          <TouchableOpacity
            className="flex items-center justify-center h-12 bg-white rounded-lg"
            onPress={() => handleLogin.mutate({ email: email, password })}
          >
            <Text style={{ color: colors.primary, fontWeight: '700' }}>
              Entrar
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
}
