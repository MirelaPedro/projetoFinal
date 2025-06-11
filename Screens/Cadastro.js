import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';


export default function Cadastro({navigation}) {
    const [senha, setSenha] = useState("");
    const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>

      {/* ***** TÍTULO ***** */}
      <View style={styles.nomeLoja}>
        <Text style={styles.nome}> PurpleWave</Text>
        <Text style={styles.subTitle}>CADASTRO</Text>
      </View>

      {/* ***** CAMPOS ***** */}
      <View style={styles.usuario}>
        <TextInput style={styles.input} placeholder='Digite seu e-mail' value={email} onChangeText={setEmail}/>
      </View>
      <View style={styles.usuario}>
        <TextInput style={styles.input} placeholder='Crie sua senha' value={senha} onChangeText={setSenha} secureTextEntry={true}/>
      </View>

      {/* ***** BOTÃO ***** */}
      <View style={styles.btn}>
        <Button title= "CADASTRAR" color='#DCCAFF'/>
        <TouchableOpacity
        onPress={() => navigation.navigate('Login')}>
            <Text style={styles.txt}>Já tem uma conta? Clique aqui</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },

  usuario: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  input: {
    height: 10,
    margin: 12,
    borderWidth: 1,
    borderColor: '#888888',
    borderRadius: 10,
    padding: 10,
    width: 350,
    height: 50,
    fontSize: 30,
    color:'#818181',
    fontFamily: 'Arial',
    fontSize: 15,
    },

    nome: {
      justifyContent: 'center',
      flexDirection: 'row',
      fontFamily: 'Arial',
      fontSize: 50,
      fontWeight: 'bold',
      color: '#846BB4',
    },
    
    subTitle: {
      color: '#3E2470',
      justifyContent: 'center',
      flexDirection: 'row',
      textAlign:'center',
      fontFamily: 'Arial',
      fontSize: 25,
      fontWeight: 'semibold',
      marginTop: 20,
    },

    btn: {
      justifyContent: 'center',
       margin: 30
    },

    vazio: {
        flex: 1,
    },

    txt: {
        flexDirection: 'row',
        justifyContent: 'center',
        fontSize: 20,
        color: '#3E2470',
    }
});