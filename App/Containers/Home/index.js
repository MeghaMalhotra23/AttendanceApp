import React from 'react';
import {View,Text} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
import { Button } from 'react-native-paper';
import {DrawerActions} from 'react-navigation';
export default class Home extends React.Component{
    componentDidMount(){
        
    }
    render(){
        return(
            <View>
                <Card>
                    <Card.Content>
                        <Title>
                            DBMS
                        </Title>
                        <Paragraph>2 year</Paragraph>
                        <Paragraph>cse-b</Paragraph>
                    </Card.Content>
                    <Card.Actions>
                        <Button icon="check">1</Button>
                        <Button icon="assessment">2</Button>
                    </Card.Actions>
                </Card>
                
            </View>
           
        )
    }
}