import { View, Text, Button } from "react-native";
import React, { useLayoutEffect } from "react";
import MoviePoster from "../components/MoviePoster";

export default function MovieDetail({ navigation, route }) {
  const { filme } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: filme.title,
    });
  }, []);

  return (
    <View>
      <MoviePoster filme={filme} />
      <Text>{filme.title}</Text>
      <Text>{filme.year}</Text>
      <Text>{filme.description}</Text>
    </View>
  );
}
