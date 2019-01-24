import React from 'react';
import {View,Text} from 'react-native';
import {createDrawerNavigator} from 'react-navigation'
import LoginScreen from '../LoginScreen';
import DrawerContainer from '../Drawer';
import {createAppContainer} from 'react-navigation';
import { Button } from 'react-native-paper';
import {DrawerActions} from 'react-navigation';
import {DrawerStack} from '../../../App';
export default class Home extends React.Component{
    render(){
        return(
            <View>
                <Text>Home Screen</Text>
                <Button onPress={()=>this.props.navigation.dispatch(DrawerActions.openDrawer())}>Press here</Button>
                
            </View>
           
        )
    }
}
//  export const AppStack=createDrawerNavigator({
//     LoginScreen:{screen:LoginScreen}
// },{
//     contentComponent: DrawerContainer
// })
// const myDrawer=createAppContainer(AppStack);