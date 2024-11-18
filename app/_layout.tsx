import "react-native-reanimated";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabLayout from "./(tabs)/_layout";
import Auth from "./auth";
import SplashScreen from "./SplashScreen";
import OutputScreen from "./output";
import { DataProvider } from "@/components/services/DataService";
import { Prediction } from "@/components/services/prediction";

export type RootStackParamList = {
  "(tabs)": undefined;
  auth: undefined;
  SplashScreen: undefined;
  output: { input: Prediction };
};

export default function RootLayout() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <DataProvider>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="(tabs)"
          component={TabLayout}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="auth"
          component={Auth}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="output"
          component={OutputScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </DataProvider>
  );
}
