import { View, StyleSheet, Text, FlatList } from "react-native";
import { usePlaylist } from "../Components/providerPlaylist";
import CardMusica from "../Components/cardmusica";

export default function Musica() {
  const { playlist } = usePlaylist();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LETTER's</Text>

      <FlatList
        data={playlist}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <CardMusica
            image={item.image}
            name={item.name}
            autor={item.artist}
            album={item.album}
            durationTime={item.durationTime}
          />
        )}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
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


