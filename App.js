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
      <View>
        <View>
          <Text>Positioning</Text>
        </View>
        <View style={styles01.navbar}>
          <Text style={styles01.navbarTitle}>LK News</Text>
          <Text style={styles01.navbarButton}>Search</Text>
        </View>
        <View style={styles02.navbar}>
          <Text style={styles02.navbarTitle}>LK News</Text>
          <Text style={styles02.navbarButton}>Search</Text>
        </View>
        <View style={styles03.navbar}>
          <Text style={styles03.navbarTitle}>LK News</Text>
          <Text style={styles03.navbarButton}>Search</Text>
        </View>
        <View style={styles04.navbar}>
          <Text style={styles04.navbarTitle}>LK News</Text>
          <Text style={styles04.navbarButton}>Search</Text>
        </View>
        <View style={styles05.navbar}>
          <Text style={styles05.navbarTitle}>LK News</Text>
          <Text style={styles05.navbarButton}>Search</Text>
        </View>
        <View>
          <Text>Resizing</Text>
        </View>
        <View style={styles06.navbar}>
          <Text style={styles06.navbarTitle}>LK News</Text>
          <Text style={styles06.navbarButton}>Search</Text>
        </View>
        <View style={styles07.navbar}>
          <Text style={styles07.navbarTitle}>LK News</Text>
          <Text style={styles07.navbarButton}>Search</Text>
        </View>
      </View>

    );
  }
}

//Positioning -----------------------------------
var styles01 = StyleSheet.create({
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

var styles02 = StyleSheet.create({
  navbar: {
     backgroundColor: 'blue',
     paddingTop: 30,
     paddingBottom: 10,
     flexDirection: 'column',
  },
  navbarTitle: {
    color: '#FEFEFE',
    fontWeight: 'bold'
  },
  navbarButton: {
    color: '#FEFEFE',
  }
});

var styles03 = StyleSheet.create({
  navbar: {
     backgroundColor: 'gray',
     paddingTop: 30,
     paddingBottom: 10,
     flexDirection: 'row',
     justifyContent: 'center'
  },
  navbarTitle: {
    color: '#FEFEFE',
    fontWeight: 'bold'
  },
  navbarButton: {
    color: '#FEFEFE',
  }
});

var styles04 = StyleSheet.create({
  navbar: {
     backgroundColor: 'green',
     paddingTop: 30,
     paddingBottom: 10,
     flexDirection: 'column',
     justifyContent: 'center'
  },
  navbarTitle: {
    color: '#FEFEFE',
    fontWeight: 'bold'
  },
  navbarButton: {
    color: '#FEFEFE',
  }
});

var styles05 = StyleSheet.create({
  navbar: {
     backgroundColor: 'black',
     paddingTop: 30,
     paddingBottom: 10,
     flexDirection: 'column',
     alignItems: 'center'
  },
  navbarTitle: {
    color: '#FEFEFE',
    fontWeight: 'bold'
  },
  navbarButton: {
    color: '#FEFEFE',
  }
});


//Resizing -----------------------------------------
var styles06 = StyleSheet.create({
  navbar: {     
     paddingTop: 30,
     paddingBottom: 10,
     flexDirection: 'row',
     backgroundColor: 'brown', 
  },
  navbarTitle: {
    backgroundColor: 'pink',
    color: '#FEFEFE',
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1
  },
  navbarButton: {
    backgroundColor: 'gold',
    color: '#FEFEFE',
    textAlign: 'center',
  }
});

var styles07 = StyleSheet.create({
  navbar: {    
     paddingTop: 30,
     paddingBottom: 10,
     flexDirection: 'row',
     backgroundColor: 'gray', 
  },
  navbarTitle: {
    backgroundColor: 'red',
    color: '#FEFEFE',
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 4
  },
  navbarButton: {
    backgroundColor: 'green',
    color: '#FEFEFE',
    textAlign: 'center',
    flex: 1
  }
});