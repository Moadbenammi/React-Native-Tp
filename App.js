/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react'; 
import {
  StyleSheet,
  Text,
} from 'react-native';


export default class App extends Component<Props> 
{ 
 render() { 
return React.createElement(Text, {style: styles.description}, "Rechercher des pays !");
 } 
}

const styles = StyleSheet.create({ 
  description: { 
  fontSize: 18, 
  textAlign: 'center', 
  color: '#656565', 
  marginTop: 65, 
  }, 
 }); 


