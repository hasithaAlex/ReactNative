import React from 'react'; 
//var React = require('react');
import {
  StyleSheet, 
  Text, 
  View,
} from 'react-native'; 
//var { StyleSheet, Text, View } = require('react-native'); 

import styles from './styles'; 


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.global.mainContainer}>
        <View style={styles.navbar.appearance}>

          <Text style={[styles.navbar.title,componentStyles.titleItalic,{
            fontWeight: 'bold' //inline style
          }]}>LK News</Text>
          <Text style={styles.navbar.button}>Search</Text>
        </View>
        <View style={styles.global.content}>
          <Text>
          is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
          </Text>
        </View>
      </View>

    );
  }
}

//component specific styles when you separate with other styles--------------------------
var componentStyles = StyleSheet.create({
  titleItalic: {
    fontStyle: 'italic', 
    fontWeight: 'normal'
  }
});
