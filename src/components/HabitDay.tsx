import { FC } from "react"
import { TouchableOpacity, View, Dimensions } from "react-native"

const WEEKDAYS = 7;
const SCREEN_HORIZONTAL_PADDING = (32 * 2) / 5;

export const DAY_MARGIN_BETWEEN = 8;
export const DAY_SIZE = (Dimensions.get('screen').width / WEEKDAYS) - (SCREEN_HORIZONTAL_PADDING + 5);

export const HabitDay: FC = () => {
  return (
    <TouchableOpacity className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800"
      activeOpacity={0.7}
      style={{
        width: DAY_SIZE,
        height: DAY_SIZE,
      }}
    />
  )
}
