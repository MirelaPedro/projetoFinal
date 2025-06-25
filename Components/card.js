import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';


export default function Card({image, name, autor, add}, song){
    return(
/*         <View style={styles.container}>         
            <View style={styles.info}>
                <Image style={styles.image} source={{ uri: image }} />
                <View style={styles.descripition}>
                    <TouchableOpacity onPress={song}>
                        <Text style={styles.name}>{name}</Text>
                    </TouchableOpacity>
                    <Text style={styles.singer}>{autor}</Text>
                </View>
                <View style={styles.icon}>
                    <TouchableOpacity
                    onPress={add}>
                        <Image style={styles.heart} source={require ('../assets/purple-heart.png')}/>
                    </TouchableOpacity>
            </View>
            </View>
        </View> */
        <View style={styles.card}>
        <Image 
        style={styles.img} 
        source={{uri: image}}
        />
        <View style={styles.textContainer}>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.singer}>{autor}</Text>
        </View>
        <View style={styles.icon}>
        <TouchableOpacity
        onPress={add}>
          <AntDesign name="heart" size={24} color="#846BB4" />
        </TouchableOpacity>
        
        </View>
        </View>
    )
}

const styles = StyleSheet.create({

    /* ***** VIEWs ***** */
 card: {
/*         borderWidth:0.5,
        borderColor:'#846BB4', */
        flexDirection:'row',
        backgroundColor: '#DCCAFF',
        borderRadius: 8,
        width: 280,
        height: 100,
        marginVertical: 15,
/*         shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3, */
        alignItems:'center'
      },

/* ***** IMAGEs ***** */
      img: {
        height: 80,
        width: 80,
        borderRadius: 4,
        marginHorizontal:12
      },

/* ***** TEXTs ***** */
      text: {
        fontSize: 17,
        color: '#846BB4',
        fontWeight: 'bold',
      },
      
      singer: {
        fontSize: 17,
        color: '#846BB4',
      },

      textContainer: {
        flex: 1, 
        justifyContent: 'center',
      },

/* ***** ICONs ***** */
      icon: {
        flexShrink: 0,
        marginHorizontal: 15
      }


})
