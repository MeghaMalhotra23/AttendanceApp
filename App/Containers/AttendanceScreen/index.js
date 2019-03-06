import  React from 'react';
import { Text, View, StyleSheet,ScrollView,FlatList } from 'react-native';
import { connect } from 'react-redux';
import AttendanceScreenCard from '../../components/AttendanceScreenCard';

// You can import from local files

// or any pure javascript modules available in npm

class AttendanceScreen extends React.Component {
  componentDidMount(){
  }
    _keyExtractor = (item) => item[0];

    _renderItem = ({ item }) => (
        <AttendanceScreenCard
            name={item[1].name}
            rollno={item[0]}
            totalAttendance={item[2]}
        />
    )
  render() {
    const {list}=this.props;
    const EmptyComponent = ({ title }) => (
      <View style={{ alignItems: 'center', flex: 1 }} >
          <Text >{title}</Text>
      </View>
  );
    let mData = Object.assign(this.props.list.G1,this.props.list.G2);
    let totalAttendanceArr=Object.entries(this.props.totalAttendance.attendance);
    let arrayData=Object.entries(mData);
    let newData= arrayData.map(function(item,index){
      if(totalAttendanceArr[index][1]<0){
        totalAttendanceArr[index][1]+=2*totalAttendanceArr[index][1]
      }
      else if(totalAttendanceArr[index][1]==-0){
        totalAttendanceArr[index][1]=0;
      }
      item.push(totalAttendanceArr[index][1])
        return item;
      })
    return (
    <View style={styles.container}>
    <FlatList
    data={newData}
    renderItem={this._renderItem}
    keyExtractor={this._keyExtractor}
    ListEmptyComponent={
      <EmptyComponent title="Nothing to display"/>
    }
  />
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
list:state.home.attendanceList,
totalAttendance:state.home.totalAttendanceList
}
}
export default connect(mapStateToProps)(AttendanceScreen);