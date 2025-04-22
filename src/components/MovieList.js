import { View, FlatList } from "react-native";
import React from "react";
import MovieCard from "./MovieCard";

export default function MovieList({ filmes, handleModal }) {
  return (
    <FlatList
      data={filmes}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return <MovieCard filme={item} handleModal={handleModal} />;
      }}
      ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
      showsVerticalScrollIndicator={false}
    />
  );
}
