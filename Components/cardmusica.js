import { StyleSheet, View, Text, Image } from "react-native";

export default function CardMusica({ image, name, autor, album, durationTime }) {
  return (
    <View style={styles.cardWrapper}>
      <View style={styles.card}>
        <Text style={styles.album}>{album}</Text>
        <Image style={styles.img} source={{ uri: image }} />
        <View style={styles.info}>
          <View style={styles.texts}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.autor}>{autor}</Text>
          </View>
          <View style={styles.duration}>
            <Text style={styles.time}>{durationTime}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  card: {
    width: '90%',
    backgroundColor: '#BBB3E9',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
  },
  album: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#846BB4',
    marginBottom: 8,
  },
  img: {
    width: 250,
    height: 250,
    borderRadius: 10,
    marginBottom: 10,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  texts: {
    width: '60%',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#414141',
  },
  autor: {
    fontSize: 14,
    color: '#414141',
  },
  duration: {
    width: '35%',
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    paddingVertical: 10,
  },
  time: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#414141',
  },
});
