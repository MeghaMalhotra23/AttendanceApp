import React from 'react';
import { StyleSheet, Text, View,ImageBackground,Image,Button,TouchableOpacity } from 'react-native';
import LoginScreen from './App/Containers/LoginScreen';
import HomeScreen from './App/Containers/Home';
import {createStackNavigator,createAppContainer,createDrawerNavigator} from 'react-navigation'
import {AppStack} from './App/Containers/Home'; 
import DrawerContainer from './App/Containers/Drawer';

// export default class App extends React.Component {
//   signIn(){

//   }
//   render() {
//     return (
//       <View style={styles.container}>
//       <LoginScreen/>
//     </View>
//     );
//   }
// }
const appStack= createStackNavigator({
  login:{screen:LoginScreen,
          navigationOptions:{
            header:null
          }},
  home:{screen:HomeScreen,
    navigationOptions:{
      
    }},
})
const DrawerStack=createDrawerNavigator({
  app:appStack,
  drawerContainer:{
    screen:DrawerContainer
  }
})
const App=createAppContainer(DrawerStack);
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    backgroundColor:'#fff',
  },
  signInBtn:{
    borderRadius:10,
    //color:'#841584',
    backgroundColor:'#841584',
    width:'80%',
    alignItems:'center',
    padding:20,
    marginBottom:10
    //overflow:'visible'
  },
  signInTxt:{
    color:'white',
    fontWeight:'700'
  }
});
