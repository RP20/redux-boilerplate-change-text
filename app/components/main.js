import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import {connect} from 'react-redux';
import {changeText} from '../actions';

var Main = React.createClass ({
  changeText() {
    this.props.dispatch(changeText("New Text!"));
  },
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 30}}>
          {this.props.text}
        </Text>
        <TouchableOpacity onPress={this.changeText}>
          <Text>
            Change text
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  }
});

var mapStateProps = (state) => {
  return {
    text: state.text
  }
}

module.exports = connect(mapStateProps)(Main);
