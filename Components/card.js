import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";


export default function Card({image, name, autor, add}){
    return(
        <View style={styles.container}>         
            <View style={styles.info}>
                <Image style={styles.image} source={{ uri: image }} />
                <View style={styles.descripition}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.singer}>{autor}</Text>
                </View>
                <View style={styles.icon}>
                    <TouchableOpacity
                    onPress={add}>
                        <Image style={styles.heart} source={require ('../assets/purple-heart.png')}/>
                    </TouchableOpacity>
            </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    /* VIEWs */
    container:{
        justifyContent: 'center',
        flexDirection: 'row',
    },

    info: {
        marginTop: 10,
        backgroundColor: '#F2EBFF',
        width: 350,
        height: 145,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        padding: 10,
    },

    descripition: {
        flexDirection: 'column',
    },

    icon: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginLeft: 'auto'
    },

    /* TEXTs */
    name: {
        fontSize: 25,
        color: '#846BB4',
        fontWeight: 'bold'
    },
    
    singer: {
        fontSize: 23,
        color: '#846BB4'
    },

    /* IMAGES */

    image: {
        width: 120,
        height: 120,
        borderRadius: 10,
        margin: 20,
    },

    
    heart: {
        width: 25,
        height: 25,
        borderRadius: 10,
        margin: 20,
    }


})
