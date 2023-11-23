import { StatusBar, KeyboardAvoidingView, View } from "react-native";
import AppContainer from "./app/index";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./components/navigators/AuthNavigator";
import navigationTheme from "./app/assets/navigationTheme";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <StatusBar hidden={false} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
          <Stack.Screen name="Main" component={AppContainer} />
        </Stack.Navigator>
      </KeyboardAvoidingView>
    </NavigationContainer>
  );
}
