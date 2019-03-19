import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import { Card, Checkbox } from 'react-native-paper';
import { firebaseOperations } from '../../../Services/api';
import { connect } from 'react-redux';
import { setUsername, setDetails } from './action';

class LoginScreen extends React.Component {

  state = {
    username: '',
    password: '',
    error: '',
    checked: false,
    loading: false,
  }

  showLoading() {
    if (this.state.loading)
      return (
        <View style={{
          alignSelf: 'center',marginTop:14, height: 50, width: 50,
          backgroundColor: 'purple', borderRadius: 50, justifyContent: 'center'
        }}>
          <ActivityIndicator size="large" color='white' />
        </View>
      )
  }

   renderButton(){
     if(!this.state.loading)
     return(
      <TouchableOpacity
      activeOpacity={0.6}
      style={styles.signInBtn}
      onPress={() => this.signIn()}>
      <Text style={styles.signInTxt}>Sign In</Text>
    </TouchableOpacity>
     )
   }

  signIn() {
    const { username, password, loading } = this.state;
    firebaseOperations.getTeacherById(username).then((obj)=>{
    if(obj){
    if(password==obj.password){
    this.setState({ loading: true })
    firebaseOperations.getTeacherDetails(username).then((obj) => {
      this.props.setDetails(obj);
      this.setState({loading:false})
      this.props.navigation.navigate('home');
    })
    this.props.setUsername(username);
    }  
    else{
     this.setState({error:'Invalid password'});
     alert(this.state.error);
    }
  }
  else{
    this.setState({error:'Incorrect ID'});
    alert(this.state.error);
  }
    });
  }
  render() {

    let { checked,error } = this.state;

    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexGrow: 2
          }}
        >
          <ImageBackground
            source={require('../../../assets/images/bpitImg.jpg')}
            style={{
              height: '100%',
              width: '100%',
              position: 'absolute',
              top: 0
            }}
            resizeMode="cover"
          >
            <Image
              style={{
                marginTop: '55%',
                alignSelf: 'center',
                height: '15%',
                width: '30%',
                backgroundColor: '#fff',
                paddingTop: '0%',
                borderRadius: 5,
              }}
              resizeMode="contain"
              source={require('../../../assets/BPIT-Delhi-Logo.png')}
            />
          </ImageBackground>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            flexGrow: 2
          }}>
          <Card
            style={{
              margin: 10,
              height: 60,
              width: '80%'
            }}>
            <TextInput placeholder="USERNAME" placeholderTextColor="gray" keyboardType="number-pad" onChangeText={text => this.setState({ username: text })}
              style={{ height: 40, borderColor: 'purple', borderWidth: 1.5, margin: 10, padding: 10 }}
            />
          </Card>
          <Card
            style={{
              margin: 10,
              height: 60,
              width: '80%'
            }}>
            <TextInput placeholder="PASSWORD" placeholderTextColor="gray" secureTextEntry={true} onChangeText={text => this.setState({ password: text })}
              style={{ height: 40, borderColor: 'purple', borderWidth: 1.5, padding: 10, margin: 10 }} />
          </Card>
        </View>
        <View style={{
          flex: 1,
          flexGrow: 1,
          display: 'flex',
          width: '100%',
          flexDirection: 'column'
        }}>
          <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: '10%',
            alignSelf: 'flex-start',
            flexDirection: 'row'
          }}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              color='purple'
              onPress={() => { this.setState({ checked: !checked }); }} />
            <Text>Keep me Signed In</Text>
          </View>
          <View style={{
            alignContent: 'flex-end',
            alignSelf: 'flex-end',
            marginRight: '10%'
          }}>
            <TouchableOpacity>
              <Text activeOpacity={0.6} style={{ color: 'purple' }}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: "center",
            alignItems: 'flex-end',
            flexGrow: 1
          }}
        >
        {this.showLoading()}
         {this.renderButton()}
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    backgroundColor: '#fff',
  },
  signInBtn: {
    borderRadius: 30,
    backgroundColor: '#841584',
    width: '80%',
    alignItems: 'center',
    padding: 20,
    marginBottom: 14
  },
  signInTxt: {
    color: 'white',
    fontWeight: '700'
  }
});
const mapStateToProps = (state) => {
  return {};
}
const mapdispatchToProps = dispatch => {
  return {
    setUsername: (username) => dispatch(setUsername(username)),
    setDetails: (data) => dispatch(setDetails(data))
  }
}
export default connect(mapStateToProps, mapdispatchToProps)(LoginScreen);