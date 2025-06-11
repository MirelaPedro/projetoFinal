import { ScrollView, View, StyleSheet, Text, Image, TouchableOpacity, FlatList } from "react-native";
import Card from "../Components/card";


/* ************************* PLAYLIST PARA TEST */
music = (
    {name: "TT", autor: "Twice", image: "https://i.scdn.co/image/ab67616d0000b273387444ab2fc1f08dfe7915ab"},
    {name: "Magnetic", autor: "ILLIT", image: "https://akamai.sscdn.co/letras/360x360/albuns/4/0/c/4/2281841720031967.jpg"}
);

export default function Home({navigation}){

    return( /* Estilização própria para o scrollview */
        <ScrollView contentContainerStyle={styles.container}>
                {/* ***** TÍTULOS ***** */}
                <Text style={styles.Title}>HOME</Text>
                <Text style={styles.subTitle}>💜O mundo do K-Pop reunido aqui💜</Text>

                {/* ***** MÚSICAS ***** */}
                <FlatList
                data={music}
                renderItem={({item}) => (
                    <Card
                    image={item.image}
                    name={item.name}
                    autor={item.autor}
                />)}/>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    /* ***** VIEWs ***** */
    container: {
        flexGrow: 1, //Faz o scrollview ocupar a tela toda
        alignItems: 'center',
    },

    /* ***** TEXTs ***** */
    Title: {
      color: '#846BB4',
      justifyContent: 'center',
      flexDirection: 'row',
      textAlign:'center',
      fontFamily: 'Arial',
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: 20,
    },

    subTitle: {
        color: '#846BB4',
        justifyContent: 'center',
        flexDirection: 'row',
        fontFamily: 'Arial',
        fontSize: 20,
        marginTop: 20,
    },
})
