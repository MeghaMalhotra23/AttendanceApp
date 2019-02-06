import React from 'react';
import {View,Text,ScrollView,StyleSheet,ImageBackground} from 'react-native';
import {SafeAreaView,DrawerItems} from 'react-navigation';
//import '../../../assets'
export default class DrawerContainer extends React.Component{
    navigateToScreen = ( route ) =>(
        () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    })
    render(){
       // console.log(this.props);

        return(
            <ScrollView>
            <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
            <View style={styles.headerContainer}>
                <ImageBackground source={require('../../../assets/bpit.jpeg')} style={{flex: 1, width: 280, justifyContent: 'center'}} >
                    <Text style={styles.headerText}>Header Portion</Text>
                    <Text style={styles.headerText}>You can display here logo or profile image</Text>
                </ImageBackground>
            </View>
            <View style={styles.screenContainer}>
                <View style={styles.screenStyle}>
                    <Text onPress={this.navigateToScreen('ScreenA')}>Screen A</Text>
                </View>
                <View style={styles.screenStyle}>
                    <Text onPress={this.navigateToScreen('ScreenB')}>Screen B</Text>
                </View>
                <View style={styles.screenStyle}>
                    <Text onPress={this.navigateToScreen('ScreenC')}>Screen C</Text>
                </View>
            </View>
            </SafeAreaView>
          </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    headerContainer: {
        height: 150,
    },
    headerText: {
        color: '#fff8f8',
    },
    screenContainer: {
        paddingTop: 20
    },
    screenStyle: {
        height: 30,
        marginTop: 2,
        flexDirection: 'row',
        alignItems: 'center'
    },
    screenTextStyle:{
        fontSize: 20,
        marginLeft: 20
    },
  });