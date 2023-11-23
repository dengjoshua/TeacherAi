import "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Explainer from "../components/Explainer";
import LoginPage from "../components/Login";
import { StyleSheet } from "react-native";
import Welcome from "../components/Welcome";
import Interaction from "../components/Interaction";
import Quiz from "../components/Quiz";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import OnBoarding from "../components/onBoarding";
import Home from "../components/Home";
import colors from "../colors";
import Profile from "../components/Profile";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppContainer = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: colors.primary,
        tabBarActiveTintColor: "white",
        tabBarInactiveBackgroundColor: "#f2f2f8",
        tabBarInactiveTintColor: "black",
        headerShown: false,
        tabBarIcon: () => null,
        activeTintColor: "red",
        inactiveTintColor: "gray",
        showIcon: true,
        style: {
          backgroundColor: "#f2f2f2",
          borderTopWidth: 1,
          borderTopColor: "gray",
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
          tabBarStyle: {
            height: 60,
          },
        }}
        component={Home}
      />
      <Tab.Screen
        name="Explainer"
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="robot" size={size} color={color} />
          ),
          tabBarStyle: {
            height: 60,
          },
        }}
        component={Explainer}
      />
      <Tab.Screen
        name="Quiz"
        component={Quiz}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="book" size={size} color={color} />
          ),
          tabBarStyle: {
            height: 60,
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
          tabBarStyle: {
            height: 60,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default AppContainer;

const styles = new StyleSheet.create({
  container: {
    paddingTop: 20,
  },
});
