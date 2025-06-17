import { useState } from "react";
import { ScrollView, View, StyleSheet, Text, Image, TouchableOpacity, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";


//Imports do firebase
import { db } from "../controller";
import { collection, addDoc } from "firebase/firestore";

export default function Administrador({navigation}){
    const [name, setName] = useState();
    const [album, setAlbum] = useState();
    const [artist, setArtist] = useState();
    const [durationTime, setDurationTima] = useState();
    const [lyrics, setLyrics] = useState();

    const register = async () => {
        /* try{
           
        } */
    }

    return(
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Register Song</Text>

                <View>
                    <TextInput
                    placeholder="Name"/>
                    <TextInput
                    placeholder="Album"/>
                    <TextInput
                    placeholder="Artist"/>
                    <TextInput
                    placeholder="Duration time"/>
                    <TextInput
                    placeholder="Lyrics"/>
                </View>

                <Text>Capa Álbum</Text>
                <Text>Anexar arquivo de imagem</Text> {/* tem como colocar uma imagem local? */}
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