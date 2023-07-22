import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';

import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';
import { colors } from '@theme/colors';
import { formStyles, typography } from '@theme/globalStyles';
import { useNavigation } from '@react-navigation/native';

export function LoginScreen() {
  const [text, onChangeText] = useState('');
  const [password, onChangePassword] = useState('');

  const { navigate } = useNavigation();

  const navigateToHome = () => {
    navigate('HomeTabNavigation');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
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
                <View>
                  <Text>Version Name: {Constants.manifest?.version}</Text>
                  <Text>
                    Version Code: {Constants.manifest?.android?.versionCode}
                  </Text>
                </View>
                <Image
                  style={{
                    width: 90,
                    height: 60,
                    alignSelf: 'center',
                  }}
                  source={require('../../../assets/logo/logo.png')}
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
                  onChangeText={onChangeText}
                  keyboardType="numeric"
                  maxLength={11}
                  value={text}
                  placeholder="CPF"
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
            style={[styles.container]}
            onPress={() => {
              navigateToHome();
            }}
          >
            <Text style={{ color: colors.primary, fontWeight: '700' }}>
              Entrar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigate('RegisterScreen');
            }}
          >
            <Text style={{ color: '#fff' }}>Abrir Conta</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
