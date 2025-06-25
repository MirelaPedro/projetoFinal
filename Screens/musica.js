
import { ScrollView, View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { CardMusica } from "../Components/card";
import { FlatList } from "react-native-web";

import { usePlaylist } from "../Components/providerPlaylist";


export default function Música({navigation}){

    const {song} = usePlaylist();

    return(
        <CardMusica
            image={song.image}
            name={song.name}
            duration={song.duration}
            lyrics={song.lyrics}
        />
    )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#846BB4",
    textAlign: "center",
    marginBottom: 20,
  },
  list: {
    paddingBottom: 40,
    alignItems: "center", // centraliza os cards
  },
});


