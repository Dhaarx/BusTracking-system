import React, { useState} from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput, ImageBackground, Image } from 'react-native'; 
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated,{FadeIn,FadeInUp,FadeOut} from 'react-native-reanimated';
import { auth } from '../config';

const Signup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

    const navigation = useNavigation();
    const handleSignUp = () => {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
          const user = userCredentials.user;
          if(user)
            {
              navigation.replace('HomeScreen')
            }
          console.log('Registered with:', user.email);
        })
        .catch(error => alert(error.message))
    }
  
    const navigateToLogin = () => {
        navigation.navigate('Login');
      };
      // const navigateToHomeScreen = () => {
      //   navigation.navigate('HomeScreen');
      // };

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require("./image/background.jpg")} 
        style={styles.backgroundImage}
      >
        <View style={{flex:1,flexDirection:'row',justifyContent:'space-around'}}>

       <Animated.Image entering={FadeInUp.delay(200).duration(1000).springify()} style={{height:225,width:90}} source={require("./image/light.png")} />
      <Animated.Image entering={FadeInUp.delay(400).duration(1000).springify()} style={{height:165,width:65}} source={require("./image/light.png")} />

</View>

        <View style={styles.innerContainer}>
        <View style={{bottom:90,fontSize:25,fontWeight: "bold",color:"white"}}>
                <Animated.Text entering={FadeInUp.delay(200).duration(1000).springify()} style={styles.title}>SignUp</Animated.Text>
        </View>
          {/* <TextInput
            style={styles.input}
            placeholder="Username"
          /> */}
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={text=>setEmail(text)}
          />
          {/* <TextInput
            style={styles.input}
            placeholder="phone number"
          /> */}
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={text=>setPassword(text)}
            secureTextEntry
          />
          <TouchableOpacity onPress={handleSignUp} style={{justifyContent:'center',alignItems:'center', height:30,width:200,backgroundColor:'#97E7E1',borderRadius:20}}>
                    <Text >Sign up</Text>
          </TouchableOpacity>
          <View style={{display: 'flex', flexDirection:'row',marginTop:10}}>
                  <Text style={{fontSize:15}}>Already have an account? </Text>
                  <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={navigateToLogin}>
                    <Text style={{color:'#7AA2E3',fontSize:15}}>Login</Text>
                  </TouchableOpacity>
            </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    innerContainer: {
      position:'absolute',
      bottom: 65,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: 'rgba(255, 255, 255, 0.5)', // Adjust opacity as needed
      borderWidth:0,
      borderRadius: 10,
      padding: 20,
    },
    title: {
      fontSize: 36,
      fontWeight: '800',
      marginBottom: 20,
      color:'black'
    },
    input: {
      height: 50,
      width: '100%',
      borderColor: 'gray',
      borderWidth: 0.5,
      borderColor:'grey',
      backgroundColor:'#EEEEEE',
      marginBottom: 20,
      paddingHorizontal: 10,
      borderRadius: 10,
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
    },
});
