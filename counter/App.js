/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Fragment, Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  Text
} from 'react-native';
import { Provider } from 'react-redux';
import { configureStore } from './store/configureStore';
import CitiesList from './CitiesList'


class App extends Component {
  state = { count: 0 };
  decrementCount() {
    let { count } = this.state;
    count--;
    this.setState({
      count
    })
  }
  incrementCount() {
    let { count } = this.state;
    count++;
    this.setState({
      count
    })
  }
  render() {
    const { count } = this.state;
    return (
      <Provider store={configureStore}>
          <CitiesList />
      </Provider>

    );
  }
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});
export default App;