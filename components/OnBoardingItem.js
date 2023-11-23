import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import React from "react";

const OnBoardingItem = ({ item }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={item.image}
        style={[styles.image, { resizeMode: "center" }]}
      />
      <View style={{ flex: 0.3 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default OnBoardingItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    justifyContent: "center",
    height: 300,
    width: 300,
  },
  title: {
    fontWeight: "800",
    fontSize: 14,
    color: "#493d8a",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontWeight: "300",
    textAlign: "center",
    paddingHorizontal: 64,
    color: "#62656b",
  },
});
