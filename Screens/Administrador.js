import { ScrollView, View, StyleSheet, Text, Image, TouchableOpacity, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Administrador({navigation}){

    function register(){
        
    }

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