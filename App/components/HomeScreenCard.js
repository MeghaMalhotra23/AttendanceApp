import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import colors from '../../assets/colors';
class HomeScreenCard extends React.Component {

    render() {

        /* --- props ----
        * subject,
        * year,
        * branch,
        * gp
        */

        let _branch = this.props.branch;

       if(this.props.branch.split('-')[1] === 'NA')
       _branch = this.props.branch.split('-')[0];

        let subTag = '';

        if (!this.props.gp) {
            subTag = 'Theory';
            return (
                <View style={styles.container}>
                    <View style={styles.subName}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}
                        >{this.props.subject}</Text>
                        <View style={{ marginTop: 8 }}></View>
                    </View>

                    <Text style={styles.subType}>{subTag}</Text>

                    <View style={styles.textContainer}>
                        <Text style={{ fontWeight: 'bold' }}>{this.props.year} year</Text>
                        <Text style={{ fontWeight: 'bold'}}>{_branch}</Text>
                    </View>

                    <View style={styles.actionContainer}>
                        <TouchableOpacity activeOpacity={0.6} onPress={this.props.navigateTo}
                         style={{ borderBottomLeftRadius: 10, flex: 1, marginRight: 2, padding: 6, backgroundColor: colors.darkerBlue }}>
                            <Image source={require('../../assets/images/check_white.png')}
                                style={{ alignSelf: 'center', resizeMode: 'contain', height: 35 }} />
                        </TouchableOpacity>

                        <TouchableOpacity  activeOpacity={0.6}
                        style={{ borderBottomRightRadius: 10,marginLeft: 2, flex: 1, padding: 6, backgroundColor: colors.darkerBlue }}>
                            <Image source={require('../../assets/images/assessment.png')}
                                style={{ alignSelf: 'center', resizeMode: 'contain', height: 35 }} />
                        </TouchableOpacity>
                    </View>

                </View>

            );
        } else {
            subTag = 'Lab';
            return (
                <View style={styles.container}>
                    <View style={styles.subName}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}
                        >{this.props.subject}</Text>
                        <View style={{ marginTop: 8 }}></View>
                    </View>

                    <Text style={styles.subType}>{subTag}</Text>
                  
                    <Text style={styles.gpText}>{this.props.gp}</Text>
           

                    <View style={styles.textContainer}>
                        <Text style={{ fontWeight: 'bold'}}>{this.props.year} year</Text>
                        <Text style={{ fontWeight: 'bold'}}>{this.props.branch}</Text>
                    </View>

                    <View style={styles.actionContainer}>
                        <TouchableOpacity activeOpacity={0.6} onPress={this.props.navigateTo}
                        style={{ borderBottomLeftRadius: 10, flex: 1, marginRight: 2, padding: 6, backgroundColor: colors.darkerBlue }}>
                            <Image source={require('../../assets/images/check_white.png')}
                                style={{ alignSelf: 'center', resizeMode: 'contain', height: 35 }} />
                        </TouchableOpacity>

                        <TouchableOpacity  activeOpacity={0.6}
                        style={{ borderBottomRightRadius: 10, marginLeft: 2, flex: 1, padding: 6, backgroundColor: colors.darkerBlue }}>
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
    },
    subName: {
        paddingTop: 12,
        paddingEnd:8,
        marginRight: 85,
        marginLeft: 18,
        justifyContent: 'center'
    },
    subType: {
        backgroundColor: colors.darkerBlue,
        color: 'white',
        position: 'absolute',
        top: 8,
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
        paddingStart:22
    }
});

export default HomeScreenCard;