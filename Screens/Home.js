import { ScrollView, View, StyleSheet, Text, Image, TouchableOpacity, FlatList } from "react-native";
import Card from "../Components/card";


/* ************************* PLAYLIST PARA TEST */
music = (
    {name: "TT", autor: "Twice", image: "https://i.scdn.co/image/ab67616d0000b273387444ab2fc1f08dfe7915ab"},
    {name: "Magnetic", autor: "ILLIT", image: "https://akamai.sscdn.co/letras/360x360/albuns/4/0/c/4/2281841720031967.jpg"}
);

export default function Home({navigation}){

    return(
        <ScrollView>
            <View style={styles.container}>

                {/* ***** TÍTULOS ***** */}
                <Text style={styles.title}>Home</Text>
                <Text style={styles.subTitle}>Descrição rápida sobre a playlist de kpop</Text>

                {/* ***** MÚSICAS ***** */}
                <FlatList
                data={music}
                renderItem={({item}) => (
                    <Card
                    image={item.image}
                    name={item.name}
                    autor={item.autor}
                />)}/>
                

            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    /* ***** VIEWs ***** */
    container: {
        flex: 1
    },

    /* ***** TEXTs ***** */
    title: {
        fontSize: 32
    },

    subTitle: {
        fontSize: 24
    },
})