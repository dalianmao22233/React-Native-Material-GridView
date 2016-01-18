'use strict';

var React = require('react-native');
var {
  Image,
  ListView,
  TouchableHighlight,
  StyleSheet,
  Text,
  AppRegistry,
  View,
} = React;

var rnmd = require('react-native-material-design');

var ReactNativeGridView = require('./gridview');
var {
  Ripple,
} = rnmd;


var rnMaterialDesignGrid = React.createClass({
  render: function() {
    return (
      <ReactNativeGridView />
    );
  },
});

AppRegistry.registerComponent('rnMaterialDesignGrid', () => rnMaterialDesignGrid);