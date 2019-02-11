import React from 'react';
import {View,Text,ScrollView,StyleSheet,ImageBackground,TouchableWithoutFeedback}from 'react-native';
import {SafeAreaView,DrawerItems} from 'react-navigation';
import {connect} from 'react-redux';
class DrawerContainer extends React.Component{
    navigateToScreen = ( route ) =>(
        () => {
        this.props.navigation.navigate(route);
    })
    componentDidMount(){
    }
    render(){
        const {details}=this.props;
        let name='';
        if(details){
         name=details.name;}
        return(
            <ScrollView>
            <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
            <View style={styles.headerContainer}>
                <ImageBackground source={require('../../../assets/bpit.jpeg')} style={{flex: 1, width: 280, justifyContent: 'center'}} >
                    <Text style={styles.headerText}>Welcome</Text>
                    <Text style={styles.headerText}>{name}</Text>
                </ImageBackground>
            </View>
            <View style={styles.screenContainer}>
            <TouchableWithoutFeedback onPress={this.navigateToScreen('home')}>
                <View style={styles.screenStyle} >
                    <Text style={styles.screenTextStyle}>Home</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={this.navigateToScreen('')}>
                <View style={styles.screenStyle} >
                    <Text style={styles.screenTextStyle}>Time Table</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={this.navigateToScreen('')}>
                <View style={styles.screenStyle} >
                    <Text style={styles.screenTextStyle}>Reset Password</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={this.navigateToScreen('login')}>
                <View style={styles.screenStyle}>
                    <Text style={styles.screenTextStyle}>Sign Out</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={this.navigateToScreen('')}>
                <View style={styles.screenStyle}>
                    <Text style={styles.screenTextStyle}>Share</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={this.navigateToScreen('')}>
                <View style={styles.screenStyle} >
                    <Text style={styles.screenTextStyle}>Rate Us</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={this.navigateToScreen('')}>
                <View style={styles.screenStyle} >
                    <Text style={styles.screenTextStyle}>About the app</Text>
                </View>
            </TouchableWithoutFeedback>
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
        fontSize: 20
    },
    screenContainer: {
        paddingTop: 20
    },
    screenStyle: {
        height: 55,
        marginTop: 2,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft:5,
        paddingBottom:15
    },
    screenTextStyle:{
        fontSize: 15,
        marginLeft: 20
    },
  });
  const mapStateToProps=state=>{
      return{
          //username:state.username,
          details:state.details
      }
  }
  export default connect(mapStateToProps)(DrawerContainer);
