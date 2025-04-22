import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function MovieInfo({ filme }) {
  return (
    <View style={styles.containerInfo}>
      <Text style={styles.title}>{filme.title}</Text>
      <Text style={styles.year}>{filme.year}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerInfo: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: 700,
  },
  year: {
    fontSize: 14,
    color: "#777",
  },
});
