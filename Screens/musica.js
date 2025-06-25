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
    /* ***** VIEWs ***** */
    container: {
        flex: 1
    },
})