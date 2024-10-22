import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack   screenOptions={{
      headerStyle: {
        backgroundColor: '#BBD1EA',
      },
      headerTintColor: '#04080F',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
