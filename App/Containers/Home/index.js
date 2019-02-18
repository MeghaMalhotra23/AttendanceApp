import React from 'react';
import {View,Text,ScrollView} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
import { Button } from 'react-native-paper';
import {DrawerActions} from 'react-navigation';
import HomeScreenCard from '../../components/HomeScreenCard';
import {connect} from 'react-redux';
import {getList} from './action';
import { firebaseOperations } from '../../../Services/api';
class Home extends React.Component{
    componentDidMount(){
        console.log(this.props.details.lab);
        console.log(this.props.details.theory);
    }
    navigateToAttendance(){
        firebaseOperations.getAttendanceList().then((obj)=>{
            //console.log(obj);
            this.props.getList(obj);
            this.props.navigation.navigate('attendance');
        })
        
    }
    render(){
        return(
            <View>
                <ScrollView>
                <HomeScreenCard
                  subject='Database Management Systems'
                  branch='CSE-B'
                  year='2'
                  navigateTo={()=>this.navigateToAttendance()}/>
                <HomeScreenCard
                  subject='Database Management Systems'
                  branch='IT'
                  year='2'
                  navigateTo={()=>this.navigateToAttendance()}/>
                </ScrollView>
            </View>
           
        )
    }
}
const mapStateToProps= state=>{
    return{
        username:state.login.username,
        details:state.login.details
    }
}
const mapDisptachToProps= dispatch=>{
    return{
        getList:(data)=>dispatch(getList(data))
    }
}
export default connect(mapStateToProps,mapDisptachToProps)(Home);