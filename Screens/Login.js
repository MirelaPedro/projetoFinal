import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { useState } from 'react';


export default function Login(){
    const [senha, setSenha] = useState("");
    const [email, setEmail] = useState("");

    return (
        <View style={styles.container}>
            <View style={styles.nomeLoja}>
                <Text style={styles.nome}> NOME DA LOJA</Text>
            </View>
            <View style={styles.usuario}>
                <TextInput style={styles.input} placeholder='Digite seu e-mail' value={email} onChangeText={setEmail}>
                </TextInput>
            </View>
            <View style={styles.usuario}>
                <TextInput style={styles.input} placeholder='Digite sua senha' value={senha} onChangeText={setSenha} secureTextEntry={true}>
                </TextInput>
            </View>
            <View style={styles.btn}>
                <Button title= "ENTRAR" color='#DCCAFF'/>
                <TouchableOpacity>
                    <Text style={styles.txt}>Clique para criar uma conta</Text>
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

    /*     nomeLoja: {
        flex: 1,
    }, */

    nome: {
        justifyContent: 'center',
        flexDirection: 'row',
        fontFamily: 'Arial',
        fontSize: 35,
        fontWeight: 'bold',
        color: '#505050',
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
