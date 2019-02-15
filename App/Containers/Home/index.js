import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import HomeScreenCard from '../../components/HomeScreenCard';
import { connect } from 'react-redux';

class Home extends React.Component {

    componentDidMount() {
        // console.log(this.props.details.lab);
        // console.log(this.props.details.theory);
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
const mapStateToProps = state => {
    return {
        username: state.username,
        details: state.details
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
export default connect(mapStateToProps)(Home);