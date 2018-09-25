import React from 'react'; 
//var React = require('react');
import {
  StyleSheet, 
  Text, 
  View,
} from 'react-native'; 

export default class App extends React.Component {
  
  render() {
    return (
      <View styles={styles.container}>
        <View style={styles.top}>
          <View style={styles.profileimaage}></View>
        </View>
        <View style={styles.center}></View>
        <View style={styles.bottom}>
          <View style={styles.bottomItem}>
            <View style={styles.bottomItemInner}><Text>1</Text></View>
          </View>
          <View style={styles.bottomItem}>
            <View style={styles.bottomItemInner}><Text>2</Text></View>
          </View>
          <View style={styles.bottomItem}>
            <View style={styles.bottomItemInner}><Text>3</Text></View>
          </View>
          <View style={styles.bottomItem}>
            <View style={styles.bottomItemInner}><Text>4</Text></View>
          </View>
        </View>
      </View>     
    );
  }
}

//component specific styles when you separate with other styles--------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    height: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#98d2c1'
  },
  profileimaage: {
    width: 140,
    height: 140,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#fff',
    backgroundColor: '#eee'
  },
  center: {
    height: '10%',
    backgroundColor: '#7fbcac'
  },
  bottom: {
    height: '45%',
    backgroundColor: '#292929',
    flexDirection: 'row', //column
    flexWrap: 'wrap',
    padding: 5
  },
  bottomItem: {
    width: '50%',
    height: '50%',
    padding: 5,
    backgroundColor: '#98d2c1'
  },
  bottomItemInner: {
    flex: 1,
    backgroundColor: 'gray'
  }
});
