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
            
{/*                 <TouchableOpacity>
                <Image source={require('../assets/iconRemove.png')}/>
                </TouchableOpacity> */}
            </View>

        </View>
    )
}


/* export function CardPlaylist({image, name, autor}){
    return(
        <View style={styles.play}>
            <Image style={styles.imagens} source={{ uri: image }} />
            <View style={styles.descripition}>
                    <Text style={styles.text}>{name}</Text>
                    <Text style={styles.text}>{autor}</Text>
                     <Text style={styles.heart}>♡</Text>
            </View>
            
            <TouchableOpacity>
                <Image source={require('../assets/iconRemove.png')}/>
            </TouchableOpacity>

        </View>
    )
} */



const styles = StyleSheet.create({

    /* VIEWs */
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },

/*     play: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        width: 120,
        height:200,
        borderRadius:10,
    }, */

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

/*     heart: {
        fontSize: 18,
        color: '#846BB4'
    } */
})


/* const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    width: '90%',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },

  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
  },

  description: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: 100,
  },

  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },

  singer: {
    fontSize: 14,
    color: '#555',
  },

  play: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    width: '90%',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  text: {
    fontSize: 16,
    color: '#333',
  },

  heart: {
    fontSize: 24,
    color: '#F44336',
  },

  imagens: {
    width: 100,
    height: 100,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */