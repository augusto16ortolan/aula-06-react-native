import { Image, StyleSheet } from "react-native";
import React from "react";

export default function MoviePoster({ filme }) {
  return (
    <Image
      style={styles.poster}
      width={120}
      height={160}
      source={{ uri: filme.poster }}
    />
  );
}

const styles = StyleSheet.create({
  poster: {
    borderRadius: 10,
    resizeMode: "cover",
    elevation: 5,
    backgroundColor: "#f6f6f6",
  },
});
