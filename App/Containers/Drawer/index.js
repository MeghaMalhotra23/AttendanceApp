import React from 'react';
import {View,Text,ScrollView,StyleSheet,ImageBackground,TouchableOpacity,Image}from 'react-native';
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
                <ImageBackground source={require('../../../assets/images/bpitImg.jpg')} style={{flex: 1, width: 280,opacity:0.9}} >
                    <Text style={styles.headerText}>Welcome{'\n'}Dummy Text{name}</Text>
                    {/* <Text style={styles.headerText}>name</Text> */}
                </ImageBackground>
            </View>
            <View style={styles.screenContainer}>
            <TouchableOpacity activeOpacity={0.6} onPress={this.navigateToScreen('home')}>
                <View style={{...styles.screenStyle,paddingTop:12}} >
                    <Image resizeMode='contain' style={styles.menuIcon} 
                    source={require('../../../assets/images/home.png')}/>
                    <Text style={styles.screenTextStyle}>Home</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity   activeOpacity={0.6} onPress={this.navigateToScreen('')}>
                <View style={styles.screenStyle} >
                <Image resizeMode='contain' style={styles.menuIcon} 
                    source={require('../../../assets/images/time_table.png')}/>
                    <Text style={styles.screenTextStyle}>Time Table</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity  activeOpacity={0.6} onPress={this.navigateToScreen('')}>
                <View style={styles.screenStyle} >
                <Image resizeMode='contain' style={styles.menuIcon} 
                    source={require('../../../assets/images/reset_pass.png')}/>
                    <Text style={styles.screenTextStyle}>Reset Password</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity  activeOpacity={0.6} onPress={this.navigateToScreen('login')}>
                <View style={styles.screenStyle}>
                <Image resizeMode='contain' style={styles.menuIcon} 
                    source={require('../../../assets/images/logout.png')}/>
                    <Text style={styles.screenTextStyle}>Sign Out</Text>
                </View>
                
                <View style={{height:0.8,width:'100%',marginTop:12,marginBottom:12,backgroundColor:'black',opacity:0.1}}/>
            </TouchableOpacity>
            <TouchableOpacity  activeOpacity={0.6} onPress={this.navigateToScreen('')}>
                <View style={styles.screenStyle}>
                <Image resizeMode='contain' style={styles.menuIcon} 
                    source={require('../../../assets/images/share.png')}/>
                    <Text style={styles.screenTextStyle}>Share</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity  activeOpacity={0.6} onPress={this.navigateToScreen('')}>
                <View style={styles.screenStyle} >
                <Image resizeMode='contain' style={styles.menuIcon} 
                    source={require('../../../assets/images/star_rate.png')}/>
                    <Text style={styles.screenTextStyle}>Rate Us</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity  activeOpacity={0.6} onPress={this.navigateToScreen('')}>
                <View style={styles.screenStyle} >
                <Image resizeMode='contain' style={styles.menuIcon} 
                    source={require('../../../assets/images/info.png')}/>
                    <Text style={styles.screenTextStyle}>About the app</Text>
                </View>
            </TouchableOpacity>
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
        color: 'white',
        fontStyle:'italic',
        fontSize: 18,
        marginTop:90,
        // fontWeight:'bold',
        paddingStart:10,
        paddingTop:5,
        paddingEnd:10,
        paddingBottom:10,
        backgroundColor: 'rgba(52, 52, 52, 0.4)'
    },
    screenContainer: {
        // paddingTop: 0,
    },
    screenStyle: {       
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft:5,
    },
    screenTextStyle:{
        fontSize: 17,
        marginLeft: 16,
        padding:12,
        textAlign:'center',
        opacity:0.94
    },
    menuIcon:{
      marginLeft: 12,
      height:25,
      opacity:0.5,
      width:25,
      padding:12,
      alignSelf:'center'
    }
  });
  const mapStateToProps=state=>{
      return{
          //username:state.username,
          details:state.details
      }
  }
  export default connect(mapStateToProps)(DrawerContainer);
