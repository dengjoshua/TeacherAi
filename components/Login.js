import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import axios from "axios";

import AppTextInput from "./common/AppTextInput";
import colors from "../colors";
const baseURL = "https://9e7d-41-202-236-102.ngrok-free.app";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setShowError] = useState(false);

  handleLogin = () => {
    axios
      .post(`${baseURL}/auth_token`, {
        email,
        password,
      })
      .then(function (response) {
        const data = response.data;
        if (data.status_code == 200) {
          setShowError(false);
          console.log(response.data);
          navigation.navigate("Main");
        }
        if (data.status_code == 400) {
          setShowError(true);
        }
      })
      .catch(function (error) {
        setShowError(true);
      });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../app/assets/images/logo.png")}
        style={styles.logo}
      />
      <AppTextInput
        placeholder="Email"
        icon="email"
        value={email}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        textContentType="emailAddress"
      />
      <AppTextInput
        placeholder="Password"
        icon="lock"
        value={password}
        onChangeText={(text) => setPassword(text)}
        autoCapitalize="none"
        autoCorrect={false}
        textContentType="password"
        secureTextEntry={true}
      />
      {error && (
        <Text
          style={{ color: colors.danger, textAlign: "center", fontSize: 15 }}
        >
          Invalid email or password.
        </Text>
      )}
      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.text}>LOGIN</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  button: {
    width: "100%",
    marginTop: 20,
    backgroundColor: colors.primary,
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    color: colors.white,
    textAlign: "center",
  },
});

export default Login;
