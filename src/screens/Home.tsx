import { FC } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { DAY_SIZE, HabitDay } from '../components/HabitDay'
import { Header } from '../components/Header'
import { generateDatesFromYearBeginning } from '../utils/generate-dates-from-year-beginning'

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
const datesFromYearStart = generateDatesFromYearBeginning()
const minimumSimmaryDatesSizes = 18 * 5
const amountOfDaysToFill = minimumSimmaryDatesSizes - datesFromYearStart.length

export const Home: FC = () => {
  return (
    <View className='bg-background flex-1 px-8 pt-16'>
      <Header />
      <View className='flex-row mt-6 mb-2'>
        {weekDays.map((weekDay, index) => {
          return (
            <Text
              className='text-zinc-400 text-xl font-bold text-center mx-1'
              style={{
                width: DAY_SIZE,
                height: DAY_SIZE,
              }}
            >
              {weekDay}
            </Text>
          )
        })}
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <View className='flex-row flex-wrap'>
          {datesFromYearStart.map((date, index) => {
            return (
              <HabitDay key={index} />
            )
          })}
          {amountOfDaysToFill > 0 && Array.from({ length: amountOfDaysToFill }).map((_, index) => {
            return (
              <View
                key={index}
                className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
                style={{
                  width: DAY_SIZE,
                  height: DAY_SIZE,
                }}
              />
            )
          })}
        </View>
      </ScrollView>
    </View>
  )
}
