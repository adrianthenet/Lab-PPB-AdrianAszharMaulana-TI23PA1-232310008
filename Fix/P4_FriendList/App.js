import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import MyFriends from "./src/components/friends/MyFriends";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SignInScreen from "./src/components/form/SignIn";
import HomeScreen from "./src/componentsform/Home";

export default function App() {
  const stack = createNativeStackNavigator();

  return (
    <View>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn"

      screenOption={{headerShown: false }}

      <Stack.Screen name ="SignIn" component={SignInScreen}/>
      <Stack.Sreen name ="Home" component={homescreen}/>

      <StatusBar style="auto" />
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
