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
      <View style={styles.Pin_Container}>
        <View style={styles.PinHeader}>
          <View style={styles.UtilityNav}>              
            <View>
              <Text>⇦</Text>
            </View>
            <View>
              <Text>♥</Text>
            </View>
            <View>
              <Text>↗</Text>
            </View>
            <View>
              <Text>⇶</Text>
            </View>
          </View>

          <View style={styles.PinButton_Container}>          
            <View style={styles.PinButton}>
              <View style={styles.PinIcon}>
                <Text style={styles.PinIconStyle}>¶</Text>
              </View>
              <Text style={styles.PinButtonText}>Save</Text>
            </View>  
        </View>
      </View>
       
      <View style={styles.PinContent}>
        <Text style={styles.ImagePlaceholder}>Image Place holder</Text>
      </View>

      <View style={styles.PinMeta}>
        <View style={styles.PinMetaText_Container}>
          <Text style={styles.PinMetaText}>Saved from</Text>    
          <Text style={[styles.PinMetaText,styles.TextBold]}>website.com</Text> 
        </View>
        <View style={styles.VisitButton_Container}>
          <View style={[styles.PinButton, styles.UtilityButton]}>
            <Text style={[styles.PinButtonText,styles.UtilityButtonText]}>Visit</Text>
          </View>
        </View> 
      </View>
  
      <View style={styles.PinUser}>
        <View style={styles.PinUserAvatar}>
          <Text></Text>
        </View>
        <View style={styles.PinUser_Container}>
          <Text style={styles.PinUserText}>
            <Text style={styles.TextBold}>Alex Kewi</Text> Saved to <Text style={styles.TextBold}>Space</Text>
          </Text>
          <Text>
            Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </Text>
        </View>
      </View>

    </View>  
      
    );
  }
}

//component specific styles when you separate with other styles--------------------------
const styles = StyleSheet.create({
  Pin_Container: {
    flex: 1,
    alignSelf: 'stretch'
  },
  PinHeader: {
    backgroundColor: 'white',
    flexDirection: 'row', // align all items in a row
    alignItems: 'flex-end', // place it end of row
    //justifyContent: 'center', // to algin item center,
    justifyContent: 'space-between', 
    height: 60,
    padding: 5,
    flex: 1
  },   
  UtilityNav: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  PinButton_Container: {
    flex: 3,
    alignItems: 'flex-end'
  },  
  PinButton: {
    flexDirection: 'row',
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 4,
    justifyContent: 'space-between',
    width: 50
  },
  PinButtonText: {
    color: 'white'
  },
  PinIcon: {
    color: 'white'
  },
  PinIconStyle:  {
    color: 'white'
  },
  PinContent: {
    flex: 4,    
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 8
  },
  PinMeta: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
    paddingRight: 8,
    paddingBottom: 16,
    paddingLeft:8   
  },
  VisitButton_Container:{
    color: 'black'
  },
  ImagePlaceholder: {
    backgroundColor: '#1e1e1e',
    flex: 1,
    alignSelf: 'stretch',
    borderRadius:6
  },
  PinUser:{
    flex: 5,
    flexDirection: 'row',
    paddingRight: 8,
    paddingLeft:8   
  }, 
  UtilityButton:{
    backgroundColor: '#cecece',
    alignItems: 'center',
    justifyContent: 'center'
  },
  UtilityButtonText: {
    color: 'black'    
  },
  TextBold: {
    fontWeight: 'bold'
  },
  PinUserAvatar: {
    width: 50,
    height: 50,
    backgroundColor: 'black',
    borderRadius: 25,
    marginRight: 8 
  }
});
 