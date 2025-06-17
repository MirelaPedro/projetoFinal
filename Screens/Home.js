import { ScrollView, View, StyleSheet, Text, Image, TouchableOpacity, FlatList } from "react-native";
import Card from "../Components/card";


/* ************************* PLAYLIST PARA TEST */
const music = [
    {name: "TT", autor: "TWICE", image: source="https://i.pinimg.com/736x/9d/6b/8b/9d6b8b8aebcf611c4a6c3218c5c0f3fd.jpg"},
    {name: "Magnetic", autor: "ILLIT", image: "https://akamai.sscdn.co/letras/360x360/albuns/4/0/c/4/2281841720031967.jpg"},
     { name: "LALALALA", autor: "Stray Kids", image: "https://i.pinimg.com/736x/87/34/2f/87342fd23a1dfabe439316f797b67d4d.jpg" },
    { name: "Moonlight", autor: "TWICE", image: "https://i.pinimg.com/736x/32/4a/3c/324a3ce512f3745800af238944da7cb3.jpg" }
];


export default function Home({navigation}){

    return( /* Estilização própria para o scrollview */
        <View style={styles.container}>
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
        </View>
    )
}


const styles = StyleSheet.create({
    /* ***** VIEWs ***** */
    container: {
        flex: 1,
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
        fontFamily: 'Arial',
        fontSize: 20,
        marginTop: 20,
        textAlign:'center',
    },
})
