import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Avatar } from "@react-native-material/core"; // Adjust the import path as needed
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { Card, Title, Paragraph,Icon } from 'react-native-paper';
import { auth } from '../config';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [showSidebar, setShowSidebar] = useState(false);

  const navigateToMapScreen = () => {
    navigation.navigate('MapScreen');
  };

  const navigateToScreen3 = () => {
    navigation.navigate('Screen3');
  };

  const navigateToBusstand = () => {
    navigation.navigate('Busstand');
  };

  const navigateToBusstop = () => {
    navigation.navigate('Busstop');
  };

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <View style={styles.container}>
      
      <LinearGradient
        colors={['rgb(53,160,206)', 'rgb(19,105,185)']}
        style={StyleSheet.absoluteFill}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      />
      
      <View style={styles.overlay}>
        <View style={styles.avatarContainer}>
          <TouchableOpacity onPress={toggleSidebar}>
            <Avatar 
              size={54} 
              label={auth.currentUser?.email} 
            />
          </TouchableOpacity>
        </View>
        <Text style={{position:'absolute',top:100,color:'white',fontSize:25,fontWeight:'bold'}}>Make your Journey Simple!</Text>

        <Animated.View entering={FadeInUp.delay(200).duration(1000).springify()} style={styles.centered}>
        <Image style={styles.image} source={require("./image/citybus.jpg")} /> 
      </Animated.View>


  <Card title='buttons' style={{position:'absolute',top:330,opacity:1,height:360,width:325,shadowColor:'black',shadowOffset:90,backgroundColor:'#a3bed9',}} >
          <View style={styles.buttonsContainer}>
                                  <Text style={styles.title}>Explore the App Here!</Text>
                              <TouchableOpacity onPress={navigateToMapScreen} style={styles.button}>
                                <Text style={styles.buttonText}>MAP</Text>
                              </TouchableOpacity>
                              <TouchableOpacity onPress={navigateToScreen3} style={styles.button}>
                                <Text style={styles.buttonText}>Screen3</Text>
                              </TouchableOpacity>  
                              <TouchableOpacity onPress={navigateToBusstand} style={styles.button}>
                                <Text style={styles.buttonText}>Bustand</Text>
                              </TouchableOpacity> 
                              <TouchableOpacity onPress={navigateToBusstop } style={styles.button}>
                                <Text style={styles.buttonText}>Busstop</Text>
                              </TouchableOpacity> 
                              
                              
          </View>
  </Card>

  {/* <Card title='Bus Stop' style={{position:'absolute',top:580,opacity:1,height:240,width:325,shadowColor:'black',shadowOffset:90,backgroundColor:'#a3bed9',}} >
          <View style={styles.buttonsContainer}>
                <Text style={{color:'#535C91',fontSize:25,fontWeight:'bold'}}>Nearby Bus Stops</Text>
                <View style={{margin:10}}> 
                  <Text style={{fontSize:20}}>Kineathukeadavu</Text>  
                  <Text style={{fontSize:20}}>Vadasithur</Text>  
                  <Text style={{fontSize:20}}>Kondampaatti</Text>  


                </View>          
          </View>
  </Card> */}



        
        {showSidebar && (
          <View style={styles.sidebar}>
            <TouchableOpacity onPress={closeSidebar} style={styles.closeButton}>
              <MaterialIcons name="close" size={25} color="black" />
            </TouchableOpacity>
            <View style={styles.sidebarParent}>
              <Text style={styles.sidebarText}>Profile</Text>
              <Text style={styles.sidebarText}>Settings</Text>
              <Text style={styles.sidebarText}>About</Text>
              <Text style={styles.sidebarText}>Email:{auth.currentUser?.email}</Text>
              <TouchableOpacity onPress={navigateToLogin} style={styles.button1}>
                                <Text style={{color:'white'}}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
      
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centered: {
    position: 'absolute',
    top: 60,
    left: 49,

  },
  
  title: {
    fontSize: 28,
    color: 'black',
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  button: {
    backgroundColor: 'white',
    margin: 10,
    paddingVertical: 5,
    paddingHorizontal: 9,
    borderRadius: 10,
  },
  button1: {
    backgroundColor: 'black',
    margin: 10,
    paddingVertical: 5,
    paddingHorizontal: 9,
    borderRadius: 10,
    width:58,
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
  },
  avatarContainer: {
    position: 'absolute',
    top: 35,
    right: 5,
  },
  sidebar: {
    position: 'absolute',
    top: 33.8,
    bottom: 0,
    right: 0,
    width: 215,
    backgroundColor: 'white',
    zIndex: 1,
    padding: 20,
    borderTopLeftRadius:20,
  },
  closeButton: {
    position: 'absolute',
    top: 25,
    right: 10,
  },
  sidebarParent: {
    marginTop: 50,
    justifyContent: 'flex-start',
  },
  sidebarText: {
    paddingBottom: 15,
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    height: 300,
    width: 300,
    opacity: 0.5,
    right:20,
  },
});
