import { ScrollView, View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { CardMusica } from "../Components/card";
import { FlatList } from "react-native-web";

const music = [
    {name: "TT", image: source="https://i.pinimg.com/736x/9d/6b/8b/9d6b8b8aebcf611c4a6c3218c5c0f3fd.jpg", duration: "04:14", lyrics: "이러지도 못하는데저러지도 못하네그저 바라보며 ba-ba-ba-baby매일 상상만 해이름과 함께 쓱 말을 놨네 baby아직 우린 모르는 사인데아무거나 걸쳐도 아름다워거울 속 단둘이서 하는 Fashion show, show 이번엔 정말 꼭꼭 내가 먼저 talk talk 다짐뿐인걸, 매번 다짐뿐인걸 나나나-나나나나 콧노래가 나오다가 나도 몰래 눈물 날 것 같애, 아닌 것 같애 내가 아닌 것 같애 I love you so much 이미 난 다 컸다고 생각하는데 어쩌면 내 맘인데 왜 내 맘대로 할 수 없는 건데? 밀어내려고 하면 할수록 자꾸 끌려 왜? 자꾸자꾸 끌려 baby I'm like TT, just like TT 이런 내 맘 모르고 너무해, 너무해 I'm like TT (ah), just like TT (ah) Tell me that you'll be my baby 어처구니없다고 해 얼굴값을 못한대 전혀 위로 안 돼 ba-ba-ba-baby 미칠 것 같애 이 와중에 왜 배는 또 고픈 건데? 하루 종일 먹기만 하는데 맴매매매 아무 죄도 없는 인형만 때찌 종일 앉아있다가 엎드렸다 시간이 획획획 피부는 왜 이렇게 또 칙칙 자꾸 틱틱 거리고만 싶지 엄만 귀찮게 계속 왜왜왜왜왜? 나나나-나나나나 콧노래가 나오다가 나도 몰래 짜증 날 것 같애, 화날 것 같애 이런 애가 아닌데 I love you so much 이미 난 다 컸다고 생각하는데 어쩌면 내 맘인데 왜 내 맘대로 할 수 없는 건데? 밀어내려고 하면 할수록 자꾸 끌려 왜? 자꾸자꾸 끌려 baby I'm like TT, just like TT 이런 내 맘 모르고 너무해, 너무해 I'm like TT (ah), just like TT (ah) Tell me that you'll be my baby 혹시 이런 나를 알까요?이대로 사라져 버리면 안 돼요이번엔 정말 꼭꼭내가 먼저 talk, talk 다짐뿐인걸, 매번 다짐뿐인걸이미 난 다 컸다고 생각하는데어쩌면 내 맘인데 왜내 맘대로 할 수 없는 건데?밀어내려고 하면 할수록자꾸 끌려 왜?자꾸자꾸 끌려 babyI'm like TT, just like TT이런 내 맘 모르고 너무해, 너무해I'm like TT (ah), just like TT (ah)Tell me that you'll be my baby"},
];

export default function Música({navigation}){

    return(
        <FlatList
        data={music}
        renderItem={({item}) => (
        <CardMusica
            image={item.image}
            name={item.name}
            duration={item.duration}
            lyrics={item.lyrics}
        />)}/>
    )
}


const styles = StyleSheet.create({
    /* ***** VIEWs ***** */
    container: {
        flex: 1
    },
})