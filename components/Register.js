import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import AppTextInput from "./common/AppTextInput";
import colors from "../colors";

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  handleRegister = () => {
    axios
      .post(`${baseURL}/signup`, {
        email,
        username,
        password,
      })
      .then(function (response) {
        setShowError(false);
        console.log(response.data);
        navigation.navigate("Main");
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
        placeholder="Username"
        icon="account"
        value={username}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(text) => setUsername(text)}
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
      <Pressable style={styles.button} onPress={handleRegister}>
        <Text style={styles.text}>REGISTER</Text>
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

export default Register;
