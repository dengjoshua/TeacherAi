import React from "react";
import { View, StyleSheet, TouchableNativeFeedback } from "react-native";
import { Card, Text } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "./common/Screen";

const subjects = [
  { name: "Maths", icon: "calculator" },
  { name: "History", icon: "book-open" },
  { name: "Geography", icon: "earth" },
  { name: "Chemistry", icon: "flask" },
  { name: "Biology", icon: "leaf" },
  { name: "Physics", icon: "atom-variant" },
  { name: "English", icon: "alphabetical" },
  { name: "Music", icon: "music" },
];

const Home = () => {
  return (
    <Screen>
      <Text style={styles.header}>My Courses</Text>
      <View style={styles.container}>
        {subjects.map((subject, index) => (
          <TouchableNativeFeedback
            key={index.toString()}
            onPress={() => alert(subject.name)}
          >
            <Card containerStyle={styles.card}>
              <MaterialCommunityIcons name={subject.icon} size={50} />
              <Text style={styles.subjectText}>{subject.name}</Text>
            </Card>
          </TouchableNativeFeedback>
        ))}
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    padding: "2%",
  },
  card: {
    width: "45%",
    alignItems: "center",
    margin: "2.5%",
  },
  subjectText: {
    marginTop: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: "500",
    margin: 20,
  },
});

export default Home;
