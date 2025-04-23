import { View, Text, StyleSheet, Image, Button } from "react-native";
import React, { useState } from "react";
import { movies } from "../data/movies";
import Modal from "react-native-modal";
import MovieList from "../components/MovieList";
import MoviePoster from "../components/MoviePoster";

export default function Movies({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  function handleModal(movie) {
    setSelectedMovie(movie);
    setModalVisible(true);
  }

  function handleDetail(movie) {
    navigation.navigate("MovieDail", { filme: movie });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Filmes</Text>
      <MovieList filmes={movies} handleModal={handleDetail} />

      {selectedMovie ? (
        <Modal isVisible={isModalVisible}>
          <View
            style={{
              width: "100%",
              padding: 16,
              height: 578,
              backgroundColor: "#fff",
            }}
          >
            <MoviePoster filme={selectedMovie} />
            <Text>{selectedMovie.title}</Text>
            <Text>{selectedMovie.year}</Text>

            <Text>{selectedMovie.description}</Text>

            <Button title="Hide modal" onPress={() => setModalVisible(false)} />
          </View>
        </Modal>
      ) : (
        <></>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    gap: 10,
  },
  title: {
    width: "100%",
    textAlign: "center",
    fontSize: 30,
    fontWeight: 700,
  },
});
