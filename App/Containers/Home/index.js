import React from 'react';
import {View,Text,ScrollView} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
import { Button } from 'react-native-paper';
import {DrawerActions} from 'react-navigation';
import HomeScreenCard from '../../components/HomeScreenCard';
import {connect} from 'react-redux';
class Home extends React.Component{
    componentDidMount(){
        console.log(this.props.details.lab);
        console.log(this.props.details.theory);
    }
    render(){
        return(
            <View>
                <ScrollView>
                <HomeScreenCard
                  subject='Database Management Systems'
                  branch='CSE-B'
                  year='2'/>
                <HomeScreenCard
                  subject='Database Management Systems'
                  branch='IT'
                  year='2'/>
                </ScrollView>
            </View>
           
        )
    }
}
const mapStateToProps= state=>{
    return{
        username:state.username,
        details:state.details
    }
}
export default connect(mapStateToProps)(Home);