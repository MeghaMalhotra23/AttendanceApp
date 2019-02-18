import React from 'react';
import {StyleSheet,Text,View,TouchableOpacity,Image} from "react-native";
import colors from '../../assets/colors';

const HomeScreenCard = (props) => (
    <View style={styles.container}>

          <View style={styles.subName}>
          <Text style={{fontWeight:'bold',fontSize:18}}
           >{props.subject}</Text>
           <View style={{padding:20}}></View>
          </View>
          
           <Text style={styles.subType}>Theory</Text>       

        <View style={styles.textContainer}>
        <Text style={{fontWeight:'bold',paddingStart:22}}>{props.year} year</Text>
        <Text style={{fontWeight:'bold',paddingStart:22}}>{props.branch}</Text>
        </View>
       
        <View style={styles.actionContainer}>
        <TouchableOpacity onPress={props.navigateTo} style={{flex:1,marginRight:2,padding:6,backgroundColor:colors.darkerBlue}}>
        <Image source={require('../../assets/images/check_white.png')}
             style={{alignSelf:'center', resizeMode:'contain',height:35}}/> 
        </TouchableOpacity>
         
        <TouchableOpacity style={{marginLeft:2,flex:1,padding:6,backgroundColor:colors.darkerBlue}}>
        <Image source={require('../../assets/images/assessment.png')}
             style={{alignSelf:'center', resizeMode:'contain',height:35}}/> 
        </TouchableOpacity>
        </View>
    </View>
);

const styles = StyleSheet.create({
  container:{
      backgroundColor:colors.lighterBlue,
      marginStart:12,
      marginEnd:12,
      marginTop:10,
      borderRadius:14,
      borderColor:colors.darkerBlue,
      borderWidth:0.5,
  },
  actionContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      paddingTop:10, 
     // borderBottomLeftRadius: 14,
  },
  subName:{
      flexDirection:'row',
      paddingTop:14,
      paddingStart:18,
      paddingEnd:18,
      marginRight:40,
      marginLeft:18,
      justifyContent:'center'
  },
  subType:{
      backgroundColor:colors.darkerBlue,
      color:'white',
      position:'absolute',
      top:6,
      right:12,
      fontWeight:'bold',
      paddingStart:16,
      paddingEnd:16,
      paddingTop:2,
      paddingBottom:2
  },
  textContainer:{
    paddingTop:10,
    fontWeight:'bold'
}
});

export default HomeScreenCard;