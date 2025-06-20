import { ScrollView, View, StyleSheet, Text, Image, TouchableOpacity, FlatList } from "react-native";
import CardPlaylist from "../Components/cardplaylist";

const music = [
    {name: "TT", autor: "Twice", image: "https://i.scdn.co/image/ab67616d0000b273387444ab2fc1f08dfe7915ab"},
    {name: "Magnetic", autor: "ILLIT", image: "https://akamai.sscdn.co/letras/360x360/albuns/4/0/c/4/2281841720031967.jpg"}
];

export default function Playlist({navigation}){

    return(
        <ScrollView>
            <View style={styles.container}>
                {/* ***** TÍTULOS ***** */}
                <Text style={styles.title}>Sua Playlist</Text>

                {/* ***** MÚSICAS ***** */}
                <FlatList
                data={music}
                renderItem={({item}) => (
                    <CardPlaylist
                    image={item.image}
                    name={item.name}
                    autor={item.autor}
                />)}/>
            </View>
        </ScrollView>
    )
}



const styles = StyleSheet.create({
    /* ***** VIEWs ***** */
    container: {
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