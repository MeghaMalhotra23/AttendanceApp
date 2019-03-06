import React from 'react';
import {Text,View,StyleSheet} from 'react-native';
const AttendanceScreenCard =(props)=>{
    return(
    <View style={styles.header}>
    <Text style={{color:'white', textAlign:'right', fontSize:40,padding:5,marginTop:10}}>{props.rollno.substring(1,3)}</Text>
    <View>
    <Text style={{color:'white',fontSize:20,padding:3,marginLeft:5}}>{props.name}</Text>
    <Text style={{color:'white',fontSize:15,padding:3,marginLeft:5}}>{props.rollno}</Text>
    <Text style={{color:'white',fontSize:15,padding:3,marginLeft:5}}>Total Attendance:{props.totalAttendance}</Text>
    </View>
    </View>)
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
});
export default AttendanceScreenCard;