/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ys, {RealPlayView} from 'react-native-ys';

export default class test extends Component {
    componentWillMount() {
    ys.showSDKLog(false);
    ys.enableP2P(true);
    ys.initLib('d7b05a4a31af4c28b7fa8f8f3864a2cb', '', (result) => {
      console.log(`init result ${result}`);
      ys.setAccessToken('at.c4f5ofeabxv8ethw8bdxp1806n4f4nf7-2o8mb8082e-10g664i-y8n1j87yq');
    });
  }
  componentDidMount() {
    this.video.play("624628109", 1);
  }
  render() {
    return (
      <View style={styles.container}>
      <RealPlayView
            ref = { video => this.video = video }
            style={{flex: 1}}/>
        <Text style={styles.welcome}>
          Welcome to React hahahahNative!1111
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('test', () => test);
