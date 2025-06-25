import { useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, Button, ScrollView } from "react-native";
import { TextInput } from "react-native-gesture-handler";


//Imports do firebase
import { db } from "../controller";
import { addDoc, collection } from "firebase/firestore";

export default function Administrador({navigation}){
    const [name, setName] = useState("");
    const [album, setAlbum] = useState("");
    const [artist, setArtist] = useState("");
    const [durationTime, setDurationTime] = useState("");
    const [lyrics, setLyrics] = useState("");
    const [image, setImage] = useState("");

    const register = async () => {
        try{
           await addDoc(collection(db, 'songs'), {
                name,
                album,
                artist,
                durationTime,
                lyrics,
                image
           });

           setName("");
           setAlbum("");
           setArtist("");
           setDurationTime("");
           setLyrics("");
           setImage("");

        } catch(error){
            console.log("Erro ao cadastrar: ", error.message);
        }
    }

    return(
        <ScrollView contentContainerStyle={styles.container}> {/*  Estilização própria para ScrollView */}
                {/* ***** TÍTULOS ***** */}
                <Text style={styles.Title}>REGISTER SONG's</Text>
                <Text style={styles.subTitle}>💜Faça o cadastro das suas músicas💜</Text>

                <View style={styles.adm}>
                    <TextInput style={styles.input}
                    placeholder="Name"
                    value={name}
                    onChangeText={setName}
                    />
                    
                    <TextInput style={styles.input}
                    placeholder="Album"
                    value={album}
                    onChangeText={setAlbum}
                    />
                    
                    <TextInput style={styles.input}
                    placeholder="Artist"
                    value={artist}
                    onChangeText={setArtist}
                    />
                    
                    <TextInput style={styles.input}
                    placeholder="Duration time"
                    value={durationTime}
                    onChangeText={setDurationTime}
                    />
                    
                    <TextInput style={styles.input}
                    placeholder="Lyrics"
                    value={lyrics}
                    onChangeText={setLyrics}
                    />

                    <TextInput style={styles.input}
                    placeholder="Anexar link da image"
                    onChangeText={setImage}
                    value={image}/>
                </View>
                <View style={styles.btn}>
                    <Button
                    title="Cadastrar"
                    onPress={register} color='#DCCAFF'
                    />
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

    /* ***** TEXTs ***** */
    Title: {
        color: '#846BB4',
        justifyContent: 'center',
        flexDirection: 'row',
        textAlign:'center',
        fontFamily: 'Arial',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 26,
    },

    subTitle: {
        color: '#846BB4',
        fontFamily: 'Arial',
        fontSize: 20,
        marginTop: 20,
        textAlign:'center',
    },

    /* ***** BUTTONs ***** */
    btn: {
        justifyContent: 'center',
        margin: 30
    },

    /* ***** INPUTs ***** */
    adm: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    input: {
        height: 10,
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        width: 350,
        height: 50,
        fontSize: 30,
        color:'#818181',
        fontFamily: 'Arial',
        fontSize: 15,
        borderColor:'#b9b9b9',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },

    /* ***** ADICIONAIS ***** */
    vazio: {
        flex: 1,
        color: '#FFFFFF',
    },
})