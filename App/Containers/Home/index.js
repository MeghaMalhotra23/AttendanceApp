import React from 'react';
import {View,Text,ScrollView} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
import { Button } from 'react-native-paper';
import {DrawerActions} from 'react-navigation';
import HomeScreenCard from '../../components/HomeScreenCard';

export default class Home extends React.Component{
    componentDidMount(){
        
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