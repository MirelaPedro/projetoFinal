import { ScrollView, View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { CardMusica } from "../Components/card";
import { FlatList } from "react-native-web";

const music = [
    {name: "TT", autor: "TWICE", image: "https://i.pinimg.com/736x/9d/6b/8b/9d6b8b8aebcf611c4a6c3218c5c0f3fd.jpg"},
];

export default function Música({navigation}){

    return(
        <FlatList
        data={music}
        renderItem={({item}) => (
        <CardMusica
            image={item.image}
            name={item.name}
            duration={item.duration}
            lyrics={item.lyrics}
        />)}/>
    )
}


const styles = StyleSheet.create({
    /* ***** VIEWs ***** */
    container: {
        flex: 1
    },
})