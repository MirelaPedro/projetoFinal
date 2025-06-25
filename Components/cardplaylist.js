import { StyleSheet, Button, View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function CardPlaylist({image, name, autor, deleteSong}){
    return(
        <View style={styles.card}>
        <Image 
        style={styles.img} 
        source={{uri: image}}
        />
        <View style={styles.textContainer}>
        <Text style={styles.texto}>{name}</Text>
        <Text style={styles.autor}>{autor}</Text>
        </View>
        <View style={styles.icone}>
        <TouchableOpacity
        onPress={deleteSong}>
          <MaterialCommunityIcons name="minus-circle-outline" size={24} color="#535353" />
        </TouchableOpacity>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderWidth:0.5,
        borderColor:'#b9b9b9',
        flexDirection:'row',
        backgroundColor: '#fff', //card estilizado da playlist
        borderRadius: 8,
        width: 280,
        height: 100,
        marginVertical: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
        alignItems:'center'
      },
      img: {
        height: 80,
        width: 80,
        borderRadius: 4,
        marginHorizontal:12
      },
      texto: {
        fontSize: 17,
        color: '#414141',
        fontWeight: 'bold',
      },
      textContainer: {
        flex: 1, 
        justifyContent: 'center', //container dos textos da direita, nome da música e autor
      },
      icone: {
        flexShrink: 0,
        marginHorizontal: 15
      }


})