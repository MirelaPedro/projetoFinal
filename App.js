// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

/* ***** Imports de Telas **** */
import Login from './Screens/Login';
import Cadastro from './Screens/Cadastro';
import Home from './Screens/Home';
import Playlist from './Screens/playlist';
import Musica from './Screens/musica';
import Administrador from './Screens/Administrador';

/* ***** Imposts de Icons ***** */
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import ProviderPlaylist from './Components/providerPlaylist';


export default function App() {

  const Stack = createStackNavigator();

  return (
    <ProviderPlaylist>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
          <Stack.Screen name='Cadastro' component={Cadastro} options={{headerShown: false}}/>
          <Stack.Screen name='HomeDrawer' component={HomeDrawer} options={{headerShown: false}}/>
          <Stack.Screen name='Music' component={Musica}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ProviderPlaylist>
  );
}


function HomeDrawer(){
  const Drawer = createDrawerNavigator();

  return(
    <Drawer.Navigator>

      {/* HOME */}
      <Drawer.Screen name='Home' component={Home} 
      /* options={{ tabBarIcon: () => (
      <MaterialCommunityIcons name="home-search-outline" size={24} color="black" />)}} *//>

      {/* PLAYLIST */}
      <Drawer.Screen name='Playlist' component={Playlist} 
      /* options={{ tabBarIcon: () => (
      <MaterialIcons name="library-music" size={24} color="black" />)}} *//>

      {/* MÚSICA */}
      <Drawer.Screen name='Música' component={Musica}
      /* options={{ tabBarIcon: () => (
      <Ionicons name="musical-note-outline" size={24} color="black" />)}} *//>

      {/* ADMINISTRADOR */}
      <Drawer.Screen name='Administrador' component={Administrador}
      /* options={{ tabBarIcon: () => (
      <FontAwesome5 name="user-cog" size={24} color="black" />)}} *//>

    </Drawer.Navigator>
  )
}
