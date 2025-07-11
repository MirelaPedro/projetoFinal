import { ScrollView, View, StyleSheet, Text, Image, TouchableOpacity, FlatList } from "react-native";
import CardPlaylist from "../Components/cardplaylist";

import { usePlaylist } from "../Components/providerPlaylist";
import { StretchInX } from "react-native-reanimated";

const music = [
    {name: "TT", autor: "Twice", image: "https://i.scdn.co/image/ab67616d0000b273387444ab2fc1f08dfe7915ab"},
    {name: "Magnetic", autor: "ILLIT", image: "https://akamai.sscdn.co/letras/360x360/albuns/4/0/c/4/2281841720031967.jpg"}
];

export default function Playlist({navigation}){
    const {playlist, deleteMusic, songPage} = usePlaylist();

    return(
        <ScrollView contentContainerStyle={styles.container}> {/*  Estilização própria para ScrollView */}
                {/* ***** TÍTULOS ***** */}
                <Text style={styles.title}>Sua Playlist</Text>

                {/* ***** MÚSICAS ***** */}
                <FlatList
                data={playlist}
                renderItem={({item, index}) => (
                    <CardPlaylist
                    image={item.image}
                    name={item.name}
                    autor={item.artist}
                    deleteSong={() => deleteMusic(index)}
                />)}/>
        </ScrollView>
    )
}



const styles = StyleSheet.create({
    /* ***** VIEWs ***** */
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },

    /* ***** TEXTs ***** */
    title: {
        color: '#846BB4',
        justifyContent: 'center',
        flexDirection: 'row',
        textAlign:'center',
        fontFamily: 'Arial',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 26,
    },
})