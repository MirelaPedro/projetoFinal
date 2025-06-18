import { useState } from "react";
import { ScrollView, View, StyleSheet, Text, Image, TouchableOpacity, Button } from "react-native";
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
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Register Song</Text>

                <View>
                    <TextInput
                    placeholder="Name"
                    value={name}
                    onChangeText={setName}
                    />
                    
                    <TextInput
                    placeholder="Album"
                    value={album}
                    onChangeText={setAlbum}
                    />
                    
                    <TextInput
                    placeholder="Artist"
                    value={artist}
                    onChangeText={setArtist}
                    />
                    
                    <TextInput
                    placeholder="Duration time"
                    value={durationTime}
                    onChangeText={setDurationTime}
                    />
                    
                    <TextInput
                    placeholder="Lyrics"
                    value={lyrics}
                    onChangeText={setLyrics}
                    />
                </View>

                <TextInput
                placeholder="Anexar link da image"
                onChangeText={setImage}
                value={image}/>
            </View>

            <View>
                <Button
                title="Cadastar"
                onPress={register}
                />
                <Button
                title="Excluir"
                />
            </View>
        </ScrollView>
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