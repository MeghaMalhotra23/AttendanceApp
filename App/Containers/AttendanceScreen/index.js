import  React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,FlatList } from 'react-native';
import { connect } from 'react-redux';
import AttendanceScreenCard from '../../components/AttendanceScreenCard';
import { firebaseOperations } from '../../../Services/api';

// You can import from local files

// or any pure javascript modules available in npm

class AttendanceScreen extends React.Component {
  componentDidMount(){
    //console.log(this.props.navigation.state.params.subject);
    this.display();
    this.markAllAbsent();
  }
  display=()=>{
    const {list}=this.props;
    const {displayArr}=this.state;
    let mData = Object.assign(list.G1,list.G2);
    let totalAttendanceArr;
    let newData;
    let arrayData=Object.entries(mData);
    if(displayArr){
    totalAttendanceArr=Object.entries(displayArr.attendance);
    if(totalAttendanceArr.length==arrayData.length){
    newData= arrayData.map(function(item,index){
      if(totalAttendanceArr[index][1]<0){
        totalAttendanceArr[index][1]=-parseInt(totalAttendanceArr[index][1]);
      }
      else if(totalAttendanceArr[index][1]==-0){
        totalAttendanceArr[index][1]=0;
      }
      item.push(totalAttendanceArr[index][1])
        return item;
      })
      this.setState({displayArr:newData});
    }
    else {
      let filteredArr=arrayData.slice(0,totalAttendanceArr.length);
      let filteredArr2=arrayData.slice(totalAttendanceArr.length,arrayData.length);
      let selectedArr;
      totalAttendanceArr[0][0]==filteredArr[0][0]?selectedArr=filteredArr:selectedArr=filteredArr2;
      let newData= selectedArr.map(function(item,index){
        if(totalAttendanceArr[index][1]<0){
          totalAttendanceArr[index][1]+=2*totalAttendanceArr[index][1];
        }
        else if(totalAttendanceArr[index][1]==-0){
          totalAttendanceArr[index][1]=0;
        }
        item.push(totalAttendanceArr[index][1])
          return item;
        })
      this.setState({displayArr:newData});
    }
    }

      else{
      totalAttendanceArr=Object.entries(mData);
      }
  }
  markAllAbsent=()=>{
    const {listTotalAttendance}=this.state;
    for(let key in listTotalAttendance.attendance){
      if(listTotalAttendance.attendance[key]>0){
        listTotalAttendance.attendance[key]-=2*listTotalAttendance.attendance[key];
      }
  }
  let date=new Date();
  let month=date.getMonth()+1;
  let year=date.getFullYear();
  let day=date.getDate();
  listTotalAttendance.date=day+"/"+month+"/"+year;
  this.setState({listTotalAttendance});
}
//toggle present and absent onclick
  markPresent(item){
    const {listTotalAttendance}=this.state;
    let key=item[0];
    //mark absent
    if(listTotalAttendance.attendance[key]<0)
    listTotalAttendance.attendance[key]=parseInt(item[2])+1;
    //mark absent
    else if(listTotalAttendance.attendance[key]>0){
      listTotalAttendance.attendance[key]=-item[2];
    }
    else if(listTotalAttendance.attendance[key]==="-0"||listTotalAttendance.attendance[key]===-0){
      listTotalAttendance.attendance[key]="1";
    }
    this.setState({listTotalAttendance});
  }
  state={
    listTotalAttendance:this.props.totalAttendance,
    displayArr:this.props.totalAttendance,
    subject:this.props.navigation.state.params.subject

  }
  saveList(){
    firebaseOperations.saveAttendance(this.state.subject,this.props.totalAttendanceVal+1,this.state.listTotalAttendance);
    this.props.navigation.navigate('home');
  }
    _keyExtractor = (item) => item[0];

    _renderItem = ({ item }) => (
        <AttendanceScreenCard
            name={item[1].name}
            enrollno={item[0]}
            rollno={item[1].classRoll_no}
            totalAttendance={item[2]}
            clicked={()=>this.markPresent(item)}
            currentAttendance={this.state.listTotalAttendance.attendance[item[0]]}
        />
    )
  render() {
    const {list,totalAttendance}=this.props;
    const EmptyComponent = ({ title }) => (
      <View style={{ alignItems: 'center', flex: 1 }} >
          <Text >{title}</Text>
      </View>
  );
    return (
    <View style={styles.container}>
    <FlatList
    data={this.state.displayArr}
    renderItem={this._renderItem}
    keyExtractor={this._keyExtractor}
    ListEmptyComponent={
      <EmptyComponent title="Nothing to display"/>
    }
  />
    <TouchableOpacity style={styles.saveBtn} onPress={()=>this.saveList()}>
      <Text style={styles.saveTxt}>Save</Text>
    </TouchableOpacity>
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
      backgroundColor:'#1f7a03',
      bottom:0,
      left:0,
      right:0,
      margin:5,
      flexDirection:'row'
     
      },
      saveBtn: {
        borderRadius: 10,
        backgroundColor: '#1f7a03',
        width: '95%',
        alignItems: 'center',
        padding: 20,
        marginBottom: 10,
        marginLeft:10
      },
      saveTxt: {
        color: 'white',
        fontWeight: '700'
      }
});
const mapDispatchToProps=(dispatch)=>{
  return{

  }
}
const mapStateToProps=(state)=>{
return{
list:state.home.attendanceList,
totalAttendance:state.home.totalAttendanceList,
totalAttendanceVal:state.home.totalAttendanceValue,
}
}
export default connect(mapStateToProps,mapDispatchToProps)(AttendanceScreen);