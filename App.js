import React from 'react';
import LoginScreen from './App/Containers/LoginScreen';
import HomeScreen from './App/Containers/Home';
import {createStackNavigator,createAppContainer,createDrawerNavigator,DrawerActions} from 'react-navigation' 
import DrawerContainer from './App/Containers/Drawer';
import {Button} from 'react-native-paper';
import * as firebase from 'firebase';
import {Provider } from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {LoginReducer} from './App/Containers/LoginScreen/reducer';
import HomeReducer from './App/Containers/Home/reducer';
import thunk from 'redux-thunk';
import AttendanceScreen from './App/Containers/AttendanceScreen';
//Redux
const rootReducer=combineReducers({login:LoginReducer,home:HomeReducer});
const store=createStore(rootReducer,{},applyMiddleware(thunk));
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
      title:'home',
      headerLeft:(
        <Button icon="menu" onPress={()=>navigation.dispatch(DrawerActions.openDrawer())}></Button>
      )
      })
    },
  attendance:{screen:AttendanceScreen,
              navigationOptions:{
                headerTitle:'Attendance',
                title:'attendance'
              }}
})
const DrawerStack=createDrawerNavigator({
  app:appStack,
  drawerContainer:{
    screen:DrawerContainer
  }
},{contentComponent:DrawerContainer})
const AppNav=createAppContainer(DrawerStack);
class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <AppNav/>
      </Provider>
    )
  }
}
export default App;
