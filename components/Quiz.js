import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import questions from "../app/assets/questions";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../colors";

const Quiz = ({ navigation }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswer = (option) => {
    setSelectedOption(option);
    const correctOption = questions[currentQuestionIndex].correctAnswer;
    if (option === correctOption) {
      setCorrectAnswers(correctAnswers + 1);
    }
  };

  const goToNextQuestion = () => {
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      navigation.navigate("Results", {
        correctAnswers,
        totalQuestions: questions.length,
      });
    }
    setSelectedOption(null);
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setSelectedOption(null);
  };

  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 10 }}>
        <Text style={styles.question}>
          {questions[currentQuestionIndex].question}
        </Text>
        <Text style={[styles.question, { fontWeight: 600 }]}>
          Choose 1 answer:
        </Text>
      </View>
      <View>
        {questions[currentQuestionIndex].options.map((option) => {
          const isCorrect =
            questions[currentQuestionIndex].correctAnswer === option.id;
          const isSelected = selectedOption === option.id;
          let buttonStyle = styles.option;
          if (selectedOption) {
            if (isCorrect) {
              buttonStyle = styles.correct;
            } else if (isSelected) {
              buttonStyle = styles.incorrect;
            }
          }
          return (
            <TouchableOpacity
              key={option.id}
              onPress={() => handleAnswer(option.id)}
              disabled={selectedOption != null}
            >
              <View style={styles.option}>
                <Text style={[buttonStyle]}>{option.id}</Text>
                <Text style={styles.optionText}>{option.text}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          bottom: 0,
        }}
      >
        <TouchableOpacity onPress={restartQuiz}>
          <MaterialCommunityIcons name="replay" size={25} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.nextButton,
            selectedOption === null ? { backgroundColor: "#ddd" } : null,
          ]}
          disabled={selectedOption === null}
          onPress={goToNextQuestion}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f2f2f8",
  },
  question: {
    fontSize: 17,
  },
  optionText: {
    fontSize: 17,
    flexWrap: "wrap",
  },
  correct: {
    backgroundColor: "green",
    marginVertical: 5,
    padding: 10,
    borderRadius: 5,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  incorrect: {
    backgroundColor: "red",
    marginVertical: 5,
    padding: 10,
    borderRadius: 50,
  },
  nextButton: {
    backgroundColor: colors.blue,
    marginVertical: 20,
    padding: 10,
    borderRadius: 5,
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
});

export default Quiz;
