import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { FAB } from 'react-native-paper';
//import { Button } from 'react-native-paper';
import { DrawerActions } from 'react-navigation';
import HomeScreenCard from '../../components/HomeScreenCard';

export default class Home extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <View>
        <ScrollView style={{ marginBottom: 6 }}>
          <HomeScreenCard
            subject='Database Management Systems'
            branch='CSE-B'
            year='2'
            g1={1}
            g2={1} />
          <HomeScreenCard
            subject='Database Management Systems'
            branch='IT'
            year='2'
            g1={1}
            g2={1} />
          <HomeScreenCard
            subject='Database Management Systems'
            branch='CSE-B'
            year='2'
            g1={0}
            g2={1} />
          <HomeScreenCard
            subject='Database Management Systems'
            branch='IT'
            year='2'
            g1={1}
            g2={0} />
        </ScrollView>
        <FAB
          style={styles.fab}
          icon="edit"
          color='black'
          onPress={() => console.log('Pressed')}
        />
      </View>

    )
  }
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 4,
    bottom: 0,
    elevation:6,
    backgroundColor:'white'
  },
})