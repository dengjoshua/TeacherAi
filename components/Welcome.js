import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import colors from "../colors";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={1}
      style={styles.background}
      source={require("../app/assets/images/background.avif")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../app/assets/images/logo.png")}
        />
        <Text style={styles.tagline}>Learn with AI</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors.primary }]}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.button_text}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors.secondary }]}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.button_text}>REGISTER</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
  button: {
    height: 60,
    justifyContent: "center",
    marginVertical: 10,
    width: "100%",
    borderRadius: 15,
    padding: 5,
    textAlign: "center",
  },
  button_text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 300,
    alignContent: "center",
    alignSelf: "center",
  },
});

export default WelcomeScreen;
