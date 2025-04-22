import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import MoviePoster from "./MoviePoster";
import MovieInfo from "./MovieInfo";

export default function MovieCard({ filme, handleModal }) {
  return (
    <TouchableOpacity style={styles.card} onPress={() => handleModal(filme)}>
      <MoviePoster filme={filme} />
      <MovieInfo filme={filme} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 180,
    borderWidth: 1,
    borderRadius: 12,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 15,
    flex: 1,
    elevation: 5,
    backgroundColor: "#fff",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
  },
});
