import { ScrollView, View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

export default function Música({navigation, album, image, name, autor, tempo, letra }){

    return(
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>{album}</Text>
                <Image source={{image}}/>
                <Text>{name}</Text>
                <Text>{autor}</Text>
                <Text>{tempo}</Text>
                <Text>Letra: </Text>
                <Text>{letra}</Text>
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