import { FC } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import Logo from '../assets/logo.svg'
import colors from 'tailwindcss/colors'

export const Header: FC = () => {
  return (
    <View className="w-full flex-row items-center justify-between">
      <Logo />
      <TouchableOpacity
        className="flex-row h-11 border px-4 border-violet-500 rounded-lg items-center"
        onPress={() => null}
        activeOpacity={0.7}
      >
        <Feather name="plus" size={24} color={colors.violet[500]} />
        <Text className="text-white ml-3 font-semibold text-base">Novo</Text>
      </TouchableOpacity>
    </View>
  )
}
