import React from 'react';
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native';
const AttendanceScreenCard =(props)=>{
    return(
    <TouchableOpacity onPress={props.clicked}>
    <View style={props.currentAttendance<=0?styles.header:styles.changeColor}>
    <Text style={{color:'white', textAlign:'right', fontSize:40,padding:5,marginTop:10}}>{props.rollno}</Text>
    <View>
    <Text style={{color:'white',fontSize:20,padding:3,marginLeft:5}}>{props.name}</Text>
    <Text style={{color:'white',fontSize:15,padding:3,marginLeft:5}}>{props.enrollno}</Text>
    <Text style={{color:'white',fontSize:15,padding:3,marginLeft:5}}>Total Attendance:{props.totalAttendance}</Text>
    </View>
    </View>
    </TouchableOpacity>)
}
const styles = StyleSheet.create({
    header:{
      borderWidth:1,
      borderRadius:10,
     backgroundColor:'#fa4a4e',
     bottom:0,
       left:0,
       right:0,
      margin:5,
      flexDirection:'row'
     
      },
      changeColor:{
        borderWidth:1,
        borderRadius:10,
       backgroundColor:'#1f7a03',
       bottom:0,
         left:0,
         right:0,
        margin:5,
        flexDirection:'row'
      }
});
export default AttendanceScreenCard;