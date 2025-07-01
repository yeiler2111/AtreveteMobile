// app/_layout.tsx
// import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";

import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import ContextoGeneral from "@/context/ContextoGeneral";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) return null;

  // Solo el provider de contexto y el Slot de Expo Router
  return (
    <ContextoGeneral>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="+not-found"
          options={
            {
              // ...otros options
            }
          }
        />
      </Stack>
      <StatusBar style="auto" />
    </ContextoGeneral>
  );
}
