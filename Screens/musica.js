import { ScrollView, View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import Card from "../Components/card";
import { FlatList } from "react-native-web";

import { usePlaylist } from "../Components/providerPlaylist";


const music = [
    {name: "TT", autor: "TWICE", image: "https://i.pinimg.com/736x/9d/6b/8b/9d6b8b8aebcf611c4a6c3218c5c0f3fd.jpg"}
];

export default function Musica({navigation}){

    const {song} = usePlaylist();

    return(
        <Card
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

    /* ***** TEXTs ***** */
    title: {
        fontSize: 32
    },
})