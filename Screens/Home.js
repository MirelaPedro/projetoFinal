import { ScrollView, View, StyleSheet, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { useEffect, useState } from "react";

import Card from "../Components/card";
import { usePlaylist } from "../Components/providerPlaylist";

//Imports do firebase
import { db } from "../controller";
import { collection, getDocs } from "firebase/firestore";


/* ************************* PLAYLIST PARA TEST */
/* const music = [
    {name: "TT", autor: "TWICE", image: "https://i.pinimg.com/736x/9d/6b/8b/9d6b8b8aebcf611c4a6c3218c5c0f3fd.jpg"},
    {name: "Magnetic", autor: "ILLIT", image: "https://akamai.sscdn.co/letras/360x360/albuns/4/0/c/4/2281841720031967.jpg"},
     { name: "LALALALA", autor: "Stray Kids", image: "https://i.pinimg.com/736x/87/34/2f/87342fd23a1dfabe439316f797b67d4d.jpg" },
    { name: "Moonlight", autor: "TWICE", image: "https://i.pinimg.com/736x/32/4a/3c/324a3ce512f3745800af238944da7cb3.jpg" }
]; */


export default function Home({navigation}){
    const {addMusic, songPage} = usePlaylist();
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        async function loadSongs() {
            try {
                const querySnapshot = await getDocs(collection(db, "songs"));
                const list = [];

                querySnapshot.forEach((doc) => {
                    list.push({id: doc.id, ...doc.data()});
                });

                setSongs(list);

            } catch (error) {
                console.log("Erro ao carregar: ", error.message);
            }
        }

        loadSongs();
    }, []);

    return( 
        <ScrollView>
            <View style={styles.container}>
                {/* ***** TÍTULOS ***** */}
                <Text style={styles.Title}>HOME</Text>
                <Text style={styles.subTitle}>💜O mundo do K-Pop reunido aqui💜</Text>

                {/* ***** MÚSICAS ***** */}
                <View style={styles.flatlist}>
                    <FlatList
                    data={songs}
                    renderItem={({item}) => (
                        <Card
                        image={item.image}
                        name={item.name}
                        song={() => {
                            songPage(item);
                            navigation.navigate('Music');
                        }}
                        autor={item.artist}
                        add={() => {
                            addMusic(item);
                        }}
                    />)}/>
                </View>
        </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    /* ***** VIEWs ***** */
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },

    flatlist: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
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
