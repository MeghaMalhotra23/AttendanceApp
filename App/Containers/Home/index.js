import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import HomeScreenCard from '../../components/HomeScreenCard';
import {connect} from 'react-redux';
import {getList,getTotalAttendancelist} from './action';
import { firebaseOperations } from '../../../Services/api';

class Home extends React.Component {

    componentDidMount() {
    }
    navigateToAttendance=(item)=>{
        firebaseOperations.getAttendanceList(item).then((obj)=>{
            this.props.getList(obj);
            firebaseOperations.getTotalAttendance(item).then((data)=>{
                this.props.getTotalAttendanceList(data);
                this.props.navigation.navigate('attendance');
            })
        })
        
    }

    onFabPressed() {

    }

    _keyExtractor = (item) => item;

    _renderItem = ({ item }) => (
        <HomeScreenCard
            year={item.split('-')[0]}
            branch={item.split('-')[1] + ' - ' + item.split('-')[2]}
            subject={item.split('-')[3]}
            gp={item.split('-')[4]}
            navigateTo={()=>this.navigateToAttendance(item)}
        />
    )


    render() {

        const EmptyComponent = ({ title }) => (
            <View style={{ alignItems: 'center', flex: 1 }} >
                <Text >{title}</Text>
            </View>
        );

        let mData = 'No data';
        if (this.props.details.lab)
            mData = this.props.details.theory.concat(this.props.details.lab)
        else
            mData = this.props.details.theory;

        return (
            <View>
                <FlatList
                    style={{ marginBottom: 6 }}
                    data={mData}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    progressViewOffset={10}
                    overScrollMode='always'
                    indicatorStyle='black'
                    ListEmptyComponent={
                        <EmptyComponent title="Nothing to display !!" />
                    }
                />
                <FAB
                    style={styles.fab}
                    icon="edit"
                    color='black'
                    onPress={() => this.onFabPressed()}
                />
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
        getList:(data)=>dispatch(getList(data)),
        getTotalAttendanceList:(data)=>dispatch(getTotalAttendancelist(data))
    }
}
const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 4,
        top: 426,
        elevation: 6,
        backgroundColor: 'white'
    },
})
export default connect(mapStateToProps,mapDisptachToProps)(Home);
