import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Drawer from 'react-native-drawer';

export default class NavigationDrawer extends Component {
  render() {
    return (
      <Drawer>
        ref={ (ref) => this._drawer = ref }
        type="overlay"
        content={<Menu />}
        tapToClose={true}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        closedDrawerOffset={-3}
        styles={{
          drawer: {shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
          main: {paddingLeft: 3}
        }}
        tweenHandler={(ratio) => ({
          main: { opacity:(2-ratio)/2 }
        })}>

        {/* Navigator component will be in here, for now we will just add a view: */}
        <View style={styles.container}>
          <Text style={styles.welcome}>
              Welcome to React Native!
          </Text>
        </View>
      </Drawer>
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('NavigationDrawer', () => NavigationDrawer);
