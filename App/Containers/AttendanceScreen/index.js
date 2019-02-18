import  React from 'react';
import { Text, View, StyleSheet,ScrollView } from 'react-native';
import { connect } from 'react-redux';

// You can import from local files

// or any pure javascript modules available in npm

class AttendanceScreen extends React.Component {
  componentDidMount(){
    console.log(this.props.list);
  }
  render() {
    const {list}=this.props;
    return (
    <View style={styles.container}>
      <ScrollView>
        
        
            <View style={styles.header}>
            <Text style={{color:'white', textAlign:'right', fontSize:40,padding:5,marginTop:10}}>45</Text>
            <View>
            <Text style={{color:'white',fontSize:20,padding:3,marginLeft:5}}>Name</Text>
            <Text style={{color:'white',fontSize:15,padding:3,marginLeft:5}}>04520802716</Text>
            <Text style={{color:'white',fontSize:15,padding:3,marginLeft:5}}>Total Attendance:00</Text>
            </View>
            </View>
          
    </ScrollView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
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
const mapStateToProps=(state)=>{
return{
list:state.home.attendanceList
}
}
export default connect(mapStateToProps)(AttendanceScreen);