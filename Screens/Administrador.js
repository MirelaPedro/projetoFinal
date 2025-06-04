import { ScrollView, View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

export default function Administrador({navigation}){

    return(
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Administrador</Text>
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