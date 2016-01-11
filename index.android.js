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

var ReactNativeGridView = require('./GridViewComponent');
var {
  Ripple,
} = rnmd;


var rnMaterialDesignGrid = React.createClass({


  render: function() {
    return (
      // ListView wraps ScrollView and so takes on its properties.
      // With that in mind you can use the ScrollView's contentContainerStyle prop to style the items.
      <ReactNativeGridView />
    );
  },



AppRegistry.registerComponent('rnMaterialDesignGrid', () => rnMaterialDesignGrid);