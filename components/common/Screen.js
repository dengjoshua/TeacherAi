import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

const Screen = ({ children }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#f2f2f8",
  },
});

export default Screen;
