import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DaftarMenu from "./src/component/Daftar-Products/DaftarMenu";
import Login from "./src/component/Login";
import Home from "./src/component/Home";
import Laporan from "./src/component/Laporan";
import DataPesanan from './src/component/DataPesanan';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"white"} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false, gestureEnabled: false }} />
        <Stack.Screen name="DaftarMenu" component={DaftarMenu} options={{
            headerTitle: "Daftar Menu",
            headerShown: true,
            headerBackTitle: "Back",
          }} />
        <Stack.Screen name="DataPesanan" component={DataPesanan} options={{
            headerTitle: "Data Pesanan",
            headerShown: true,
            headerBackTitle: "Back",
          }} />
        <Stack.Screen name="Laporan" component={Laporan} options={{
            headerTitle: "Laporan",
            headerShown: true,
            headerBackTitle: "Back",
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
