import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import axios from "axios";

import { create } from "apisauce";
import Screen from "./common/Screen";
import colors from "../colors";
const baseURL = "https://4a09-41-202-236-100.ngrok-free.app";

const apiClient = create({
  baseURL,
});

const Explainer = ({ navigation }) => {
  const [question, setQuestion] = useState("");
  const [data, setData] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch_data();
  }, []);

  const fetch_data = async () => {
    const response = await apiClient.get("/api/interactions");
    if (!response.ok) return setError(true);

    setError(false);
    setData(response.data);
  };

  const askQuestion = async () => {
    try {
      await axios.post(`${baseURL}/question`, { text: question });
      setQuestion("");
      fetch_data();
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };

  if (!data)
    return (
      <Screen>
        <Text>Loading data....</Text>
      </Screen>
    );

  return (
    <Screen>
      <FlatList
        style={{ paddingHorizontal: 20 }}
        data={data}
        inverted={true}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.title}>Joshua:</Text>
            <Text style={styles.text}>{item.question}</Text>
            <Text style={styles.title}>TeacherAI</Text>
            <Text style={styles.text}>{item.answer}</Text>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ask your question...."
          value={question}
          onChangeText={(text) => setQuestion(text)}
        />
        <TouchableOpacity style={styles.sendButton} onPress={askQuestion}>
          <Icon name="send" size={30} color="grey" />
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 10,
    backgroundColor: "#f2f2f8",
    alignItems: "center",
    width: "100%",
  },
  input: {
    fontSize: 18,
    padding: 8,
    paddingLeft: 0,
    width: "100%",
  },
  sendButton: {
    marginLeft: 10,
    right: 0,
    position: "absolute",
  },
  title: {
    marginTop: 18,
    marginBottom: 3,
    fontSize: 20,
    fontWeight: "500",
  },
  text: {
    fontSize: 17,
    lineHeight: 25,
  },
});

export default Explainer;
