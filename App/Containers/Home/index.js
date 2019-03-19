import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import HomeScreenCard from '../../components/HomeScreenCard';
import {connect} from 'react-redux';
import {getList,getTotalAttendancelist,getTotalAttendanceValue} from './action';
import { firebaseOperations } from '../../../Services/api';

class Home extends React.Component {

    state={
        hideFab:false
    }

    componentDidMount() {
    }

    navigateToAttendance=(item)=>{
        firebaseOperations.getAttendanceList(item).then((obj)=>{
            this.props.getList(obj);
            firebaseOperations.getTotalAttendanceValue(item).then((val)=>{
                this.props.getTotalAttendanceValue(val);
                if(val=="0"){
                    let last2chars=item.slice(-2);
                    if(last2chars=='G1'){
                        let element={};
                        for(const keys in obj.G1){
                            element[keys]="-0";
                        }
                        let list={};
                        list["attendance"]=element;
                        list["date"]="";
                        this.props.getTotalAttendanceList(list);
                    }
                    else if(last2chars=='G2'){
                        let element={};
                        for(const keys in obj.G2){
                            element[keys]="-0";
                        }
                        let list={};
                        list["attendance"]=element;
                        list["date"]="";
                        this.props.getTotalAttendanceList(list);
                    }
                    else{
                        let mList=Object.assign(obj.G1,obj.G2);
                        let element={};
                        for(const keys in mList){
                            element[keys]="-0";
                        }
                        let list={};
                        list["attendance"]=element;
                        list["date"]="";
                        this.props.getTotalAttendanceList(list);

                    }

                    this.props.navigation.navigate('attendance',{subject:item});
                }
                else{
            firebaseOperations.getTotalAttendance(item,val).then((data)=>{
                this.props.getTotalAttendanceList(data);
                this.props.navigation.navigate('attendance',{subject:item});
            })
        }
        })
    })
        
    }

    onFabPressed() {

    }

    renderFab(){
       if(!this.state.hideFab)
       return(
        <FAB
        style={styles.fab}
        icon="edit"
        color='black'
        onPress={() => this.onFabPressed()}
    />
       )
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
                    onScrollEndDrag={() => this.setState({hideFab:false})}
                    onScrollBeginDrag={() => this.setState({hideFab:true})}
                    ListEmptyComponent={
                        <EmptyComponent title="Nothing to display !!" />
                    }
                />

                {this.renderFab()}
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
        getTotalAttendanceValue: (data)=>dispatch(getTotalAttendanceValue(data)),
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
