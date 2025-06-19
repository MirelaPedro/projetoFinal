import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";


export default function Card({image, name, autor}){
    return(
        <View style={styles.container}>         
            <View style={styles.info}>
                <Image style={styles.image} source={{ uri: image }} />
                <View style={styles.descripition}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.singer}>{autor}</Text>
                </View>
                <View style={styles.icon}>
                    <TouchableOpacity>
                        <Image style={styles.heart} source={require ('../assets/purple-heart.png')}/>
                    </TouchableOpacity>
            </View>
            </View>
        </View>
    )
}

export function CardMusica({image, name, duration, lyrics}){
    return(
        <View style={styles.containerMusica}>
            <View style={styles.top}>
                <Image style={styles.imageMusica} source={{ uri: image }} />
                <View style={styles.textMusica}>
                    <Text style={styles.nameMusica}>{name}</Text>
                    <Text style={styles.durationMusica}>{duration}</Text>
                </View>
            </View> 
            <View style={styles.bottom}>
                <Text style={styles.lyricsMusica}>{lyrics}</Text>
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
    },


    /* CARD MÚSICA */
    containerMusica:{
        alignItems: 'center',
    },

    top: {
        backgroundColor: '#846BD1',
        width: 300,
        height: 280,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    bottom: {
        backgroundColor: '#846BD1',
        width: 300,
        height: 'auto',
        borderRadius: 10,
        padding: 10,
        marginTop: 20,
    },

    imageMusica: {
        width: 220,
        height: 220,
        borderRadius: 10,
    },

    textMusica: {
        flexDirection: 'row',
        width: 280,
        justifyContent: 'space-between'
    },

    nameMusica:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },

    durationMusica:{
        fontSize: 18,
        color: 'white',
    },

    lyricsMusica: {
        fontSize: 20,
        color: 'white',
    }
})
