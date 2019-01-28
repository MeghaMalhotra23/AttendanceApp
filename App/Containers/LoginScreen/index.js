import React from 'react';
import {View,Text,ImageBackground,Image,TouchableOpacity,StyleSheet,TextInput} from 'react-native';
import {Card, Checkbox} from 'react-native-paper';
import {firebaseOperations} from '../../../Services/api';
export default class LoginScreen extends React.Component{
  state={
    username:'',
    password:'',
    error:''
  }
  signIn(){
    const {username,password}=this.state;
    console.log(username,password);
   firebaseOperations.getTeacherById(username).then((obj)=>{
   if(password===obj.password){
    this.props.navigation.navigate('home');
   }  
   else{
     this.setState({error:'Invalid password'});
   }
   });
  }
    render(){
        return(
  <View style={styles.container}>
    <View
      style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexGrow:2
      }}
    >
        <ImageBackground
          source={require('../../../assets/bpit.jpeg')}
              style={{
                      height: '100%',
                      width: '100%',
                       position:'absolute',
                       top:0
                    }}
                    resizeMode="cover"
        >
        <Image
            style={{
            marginTop: '55%',
            alignSelf: 'center',
            height: '15%',
            width: '30%',
            backgroundColor:'#fff',
            paddingTop:'0%',
            borderRadius:5,
                  }}
                  resizeMode="contain"
                  source={require('../../../assets/BPIT-Delhi-Logo.png')}
              />
          </ImageBackground>
      </View>
      <View
          style={{flex:1,
          flexDirection:'column',
          width:'100%',
          justifyContent:'center',
          alignItems:'center',
            flexGrow:2
          }}>
          <Card
          style={{margin:10,
                  height:60,
                  width:'80%'}}>
          <TextInput  placeholder="USERNAME" placeholderTextColor="gray" keyboardType="number-pad" onChangeText={text=>this.setState({username:text})}
            style={{height: 40, borderColor: 'purple', borderWidth: 1.5, margin:10,padding:10}}
            />
          </Card>
          <Card 
          style={{margin:10,
                  height:60,
                  width:'80%'}}>
          <TextInput  placeholder="PASSWORD" placeholderTextColor="gray" secureTextEntry={true} onChangeText={text=>this.setState({password:text})}
          style={{height: 40, borderColor: 'purple', borderWidth: 1.5,padding:10, margin:10}}/>
        </Card>
      </View>
      <View style={{flex:1,
      flexGrow:1,
      display:'flex',
      width:'100%',
      flexDirection:'column'}}>
            <View style={{alignContent:'flex-start',
                            marginLeft:'10%',
                            alignSelf:'flex-start'}}>
              <Checkbox.IOS/>
              <Text>Keep me Signed In</Text>
            </View>
            <View style={{alignContent:'flex-end',
                          alignSelf:'flex-end',
                          marginRight:'10%'
          }}>
              <Text style={{color:'blue'}}>Forgot password?</Text>
            </View>
      </View>
      <View
          style={{flex:1,
          flexDirection:'row',
          justifyContent:"center",
          alignItems:'flex-end',
          flexGrow:1
        }}
      >
              <TouchableOpacity
              style={styles.signInBtn}
              onPress={()=>this.signIn()}>
                <Text style={styles.signInTxt}>Sign In</Text>
              </TouchableOpacity>
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
    logo:{
      backgroundColor:'#fff',
    },
    signInBtn:{
      borderRadius:10,
      backgroundColor:'#841584',
      width:'80%',
      alignItems:'center',
      padding:20,
      marginBottom:10
    },
    signInTxt:{
      color:'white',
      fontWeight:'700'
    }
  });