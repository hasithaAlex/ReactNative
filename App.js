import React from 'react'; 
//var React = require('react');
import {
  StyleSheet, 
  Text, 
  View,
} from 'react-native'; 
//var { StyleSheet, Text, View } = require('react-native'); 



export default class App extends React.Component {
  render() {
    return (
      <View style={styles01.mainContainer}>
        <View style={styles01.navbar}>
          <View ></View>
          <Text style={styles01.navbarTitle}>LK News</Text>
          <Text style={styles01.navbarButton}>Search</Text>
        </View>
        <View style={styles01.content}>
          <Text>
          is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
          </Text>
        </View>
      </View>

    );
  }
}

//Positioning -----------------------------------
var styles01 = StyleSheet.create({
  mainContainer: {
    flex:1
  },
  content: {
    backgroundColor: 'gray',
    flex: 1
  },
  navbar: {
     backgroundColor: 'red',
     paddingTop: 30,
     paddingBottom: 10,
     flexDirection: 'row',
  },
  navbarTitle: {
    color: '#FEFEFE',
    fontWeight: 'bold'
  },
  navbarButton: {
    color: '#FEFEFE',
  }
});
