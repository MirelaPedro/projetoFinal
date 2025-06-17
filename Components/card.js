import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";


export default function Card({image, name, autor}){
    return(
        <View style={styles.container}>         
            <View style={styles.info}>
                <View style={styles.descripition}>
                    <Image style={styles.image} source={{ uri: image }} />
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.singer}>{autor}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    /* VIEWs */
    container:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },

    info: {
        marginTop: 10,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        width: 150,
        height: 190,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    descripition: {
        flexDirection: 'column',
    },

    /* TEXTs */
    name: {
        fontSize: 20,
        color: '#846BB4',
        fontWeight: 'bold'
    },
    
    singer: {
        fontSize: 18,
        color: '#846BB4'
    },

    /* IMAGES */

    image: {
        width: 120,
        height: 120,
        borderRadius: 10,
    }

})
