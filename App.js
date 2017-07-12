import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  StyleSheet,
  StatusBar,
  TextInput
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
    backgroundColor: '#D08FFF',
    shadowOpacity: 0,
    },
  };



  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>

        <Text style={styles.text}> I would like my username to be</Text>
        <TextInput
        style={styles.input}
        returnKeyType="next"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        />


        <Button
          onPress={() => navigate('Pw')}
          title="Next"
        />
      </View>
    );
  }
}

class PwScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
    backgroundColor: '#39DEB7',
    shadowOpacity: 0,
    },
  };
  render() {
    return (
      <View style={styles.containerPw}>
      <Text style={styles.text}> I would like my password to be</Text>
      <TextInput
      style={styles.input}
      returnKeyType="next"
      keyboardType="email-address"
      autoCapitalize="none"
      autoCorrect={false}
      />
      </View>
    );
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Pw: { screen: PwScreen },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D08FFF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30
  },
  containerPw: {
    flex: 1,
    backgroundColor: '#39DEB7',
    justifyContent: 'center',
    alignItems: 'center',
  },
text: {
  color: '#fff',
  textAlign: 'left',
  fontSize:35,
},

input: {
  width: 220,
  height: 40,
  backgroundColor: 'rgba(255,255,255,0.2)',
  marginBottom: 20,
  marginTop: 20,
  color: '#fff',
},

});

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
