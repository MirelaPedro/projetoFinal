import { ScrollView, View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Administrador({navigation}){

    return(
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Cadastro de Música</Text>

                <View>
                    <TextInput
                    placeholder="Name"/>
                    <TextInput
                    placeholder="Álbum"/>
                    <TextInput
                    placeholder="Artista"/>
                    <TextInput
                    placeholder="Tempo de duração"/>
                    <TextInput
                    placeholder="Letra"/>
                </View>

                <Text>Capa Álbum</Text>
                <Text>Anexar arquivo de imagem</Text>
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