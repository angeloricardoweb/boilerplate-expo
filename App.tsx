import { StatusBar } from 'expo-status-bar';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
} from '@expo-google-fonts/inter';
import Loading from './src/components/Loading';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes } from './src/routes';
import { colors } from '@theme/colors';
import { NotifierWrapper } from 'react-native-notifier';
import { GestureHandlerRootView } from "react-native-gesture-handler";

// import OneSignal from 'react-native-onesignal';
// OneSignal.setAppId("api-key");
// OneSignal.promptForPushNotificationsWithUserResponse()

const queryClient = new QueryClient();

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <GestureHandlerRootView>
      <NotifierWrapper>
        <QueryClientProvider client={queryClient}>
          <Routes />
          <StatusBar style="light" backgroundColor={colors.primary} translucent />
        </QueryClientProvider>
      </NotifierWrapper>
    </GestureHandlerRootView>
  );
}
