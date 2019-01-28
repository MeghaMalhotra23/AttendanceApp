import React from 'react';
import LoginScreen from './App/Containers/LoginScreen';
import HomeScreen from './App/Containers/Home';
import {createStackNavigator,createAppContainer,createDrawerNavigator,DrawerActions} from 'react-navigation' 
import DrawerContainer from './App/Containers/Drawer';
import {Button} from 'react-native-paper';
import * as firebase from 'firebase';
//firebase config
var config = {
  apiKey: "AIzaSyAbmUDdJgswI_K0wUraShFQaZT-lWQXS_g",
  authDomain: "quiz-0001.firebaseapp.com",
  databaseURL: "https://quiz-0001.firebaseio.com",
  projectId: "quiz-0001",
  storageBucket: "quiz-0001.appspot.com",
  messagingSenderId: "769726038218"
};
firebase.initializeApp(config);


//Application Navigation
const appStack= createStackNavigator({
  login:{screen:LoginScreen,
          navigationOptions:{
            header:null
          }},
  home:{screen:HomeScreen,
    navigationOptions:({navigation})=>({
      headerTitle:'Home',
      headerLeft:(
        <Button icon="menu" onPress={()=>navigation.dispatch(DrawerActions.openDrawer())}></Button>
      )
      })
    },
})
const DrawerStack=createDrawerNavigator({
  app:appStack,
  drawerContainer:{
    screen:DrawerContainer
  }
})
const App=createAppContainer(DrawerStack);
export default App;
