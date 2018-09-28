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
        <View style={styles.MetaText_Container}>
          <Text style={styles.PinMetaText}>Saved from</Text>    
          <Text style={styles.PinMetaText}>website.com</Text> 
        </View>
        <View style={styles.VisitButton_Container}>
          <View style={styles.VisitButton}>
            <Text style={styles.VisitButtonText}>Visit</Text>
          </View>
        </View> 
      </View>
  
      <View style={styles.PinUser}>
        <View style={styles.PinUserAvatar}>
          <Text>USER_IMAGE</Text>
        </View>
        <View style={styles.PinUser_Container}>
          <Text style={styles.PinUserText}>
            <Text style={styles.TextBold}>Alex Kewi</Text>
            Saved to
            <Text style={styles.TextBold}>Space</Text>
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
    backgroundColor: 'gray',
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
    flex: 3,    
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center'
  },
  PinMeta: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  VisitButton_Container:{
    color: 'black'
  },
  ImagePlaceholder: {
  },
  PinUser:{
    flex: 2
  }
});
 