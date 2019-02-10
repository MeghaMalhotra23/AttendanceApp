import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import colors from '../../assets/colors';

class HomeScreenCard extends React.Component {

    renderGpText(gp) {

        return (
            <View>
                <Text style={styles.gpText}>{gp}</Text>
            </View>
        );
    }

    render() {

        var subTag = '';
        var gpText = '';

        // if(this.props.g1 === 1 && this.props.g2 === 1){
        //    subTag = 'Theory';       
        // }else if(this.props.g1 === 1 && this.props.g2 === 0){
        //     subTag = 'Lab';  this.renderGpText('G1');
        // }else {
        //     subTag = 'Lab';  this.renderGpText('G2');
        // }

        if (this.props.g1 === 1 && this.props.g2 === 1) {
            subTag = 'Theory';
            return (
                <View style={styles.container}>
                    <View style={styles.subName}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}
                        >{this.props.subject}</Text>
                        <View style={{ padding: 20 }}></View>
                    </View>

                    <Text style={styles.subType}>{subTag}</Text>

                    <View style={styles.textContainer}>
                        <Text style={{ fontWeight: 'bold', paddingStart: 22 }}>{this.props.year} year</Text>
                        <Text style={{ fontWeight: 'bold', paddingStart: 22 }}>{this.props.branch}</Text>
                    </View>

                    <View style={styles.actionContainer}>
                        <TouchableOpacity style={{ flex: 1, marginRight: 2, padding: 6, backgroundColor: colors.darkerBlue }}>
                            <Image source={require('../../assets/images/check_white.png')}
                                style={{ alignSelf: 'center', resizeMode: 'contain', height: 35 }} />
                        </TouchableOpacity>

                        <TouchableOpacity style={{ marginLeft: 2, flex: 1, padding: 6, backgroundColor: colors.darkerBlue }}>
                            <Image source={require('../../assets/images/assessment.png')}
                                style={{ alignSelf: 'center', resizeMode: 'contain', height: 35 }} />
                        </TouchableOpacity>
                    </View>

                </View>

            );
        } else {
            subTag = 'Lab';
            if (this.props.g1 === 1 && this.props.g2 === 0)
                gpText = 'G1';
            else gpText = 'G2';
            return (
                <View style={styles.container}>
                    <View style={styles.subName}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}
                        >{this.props.subject}</Text>
                        <View style={{ padding: 20 }}></View>
                    </View>

                    <Text style={styles.subType}>{subTag}</Text>
                  
                    <Text style={styles.gpText}>{gpText}</Text>
           

                    <View style={styles.textContainer}>
                        <Text style={{ fontWeight: 'bold', paddingStart: 22 }}>{this.props.year} year</Text>
                        <Text style={{ fontWeight: 'bold', paddingStart: 22 }}>{this.props.branch}</Text>
                    </View>

                    <View style={styles.actionContainer}>
                        <TouchableOpacity style={{ flex: 1, marginRight: 2, padding: 6, backgroundColor: colors.darkerBlue }}>
                            <Image source={require('../../assets/images/check_white.png')}
                                style={{ alignSelf: 'center', resizeMode: 'contain', height: 35 }} />
                        </TouchableOpacity>

                        <TouchableOpacity style={{ marginLeft: 2, flex: 1, padding: 6, backgroundColor: colors.darkerBlue }}>
                            <Image source={require('../../assets/images/assessment.png')}
                                style={{ alignSelf: 'center', resizeMode: 'contain', height: 35 }} />
                        </TouchableOpacity>
                    </View>

                </View>

            );
        }
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lighterBlue,
        marginStart: 12,
        marginEnd: 12,
        marginTop: 10,
        borderRadius: 10,
        borderColor: colors.darkerBlue,
        borderWidth: 0.5,
    },
    actionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 8,
        //  borderBottomLeftRadius: 14,
    },
    subName: {
        flexDirection: 'row',
        paddingTop: 12,
        paddingStart: 18,
        paddingEnd: 18,
        marginRight: 40,
        marginLeft: 18,
        justifyContent: 'center'
    },
    subType: {
        backgroundColor: colors.darkerBlue,
        color: 'white',
        position: 'absolute',
        top: 6,
        right: 12,
        fontWeight: 'bold',
        paddingStart: 16,
        paddingEnd: 16,
        paddingTop: 2,
        paddingBottom: 2
    },
    gpText: {
        backgroundColor: colors.darkerBlue,
        color: 'white',
        position: 'absolute',
        top: 40,
        right: 14,
        fontWeight: 'bold',
        paddingStart: 16,
        paddingEnd: 16,
        paddingTop: 2,
        paddingBottom: 2,
        elevation: 100,
    },
    textContainer: {
        paddingTop: 10,
        fontWeight: 'bold'
    }
});

export default HomeScreenCard;