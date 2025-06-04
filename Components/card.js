import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";


export default function Card({image, name, autor}){
    return(
        <View style={styles.container}>
            <Image source={{image}}/>
            
            <View style={styles.info}>
                <View style={styles.descripition}>
                    <Text style={styles.text}>{name}</Text>
                    <Text style={styles.text}>{autor}</Text>
                </View>
            
                <TouchableOpacity>
                <Image source={require('../assets/iconRemove.png')}/>
                </TouchableOpacity>
            </View>

        </View>
    )
}


export function CardPlaylist({image, name, autor}){
    return(
        <View style={styles.play}>
            <Image source={{image}}/>
            
            <View style={styles.descripition}>
                    <Text style={styles.text}>{name}</Text>
                    <Text style={styles.text}>{autor}</Text>
            </View>
            
            <TouchableOpacity>
                <Image source={require('../assets/iconRemove.png')}/>
            </TouchableOpacity>

        </View>
    )
}



const styles = StyleSheet.create({

    /* VIEWs */
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },

    play: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },

    info: {
        flexDirection: 'row'
    },

    descripition: {
        flexDirection: 'column'
    },

    /* TEXTs */
    text: {
        fontSize: 16
    },



})