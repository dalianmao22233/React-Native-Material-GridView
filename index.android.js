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

var {
  Ripple,
} = rnmd;

var THUMB_URLS = [
  require('./Thumbnails/nature1.png'),
  require('./Thumbnails/nature2.png'),
  require('./Thumbnails/nature3.png'),
  require('./Thumbnails/nature4.png'),
  require('./Thumbnails/nature5.png'),
  require('./Thumbnails/nature6.png'),
];

var rnMaterialDesignGrid = React.createClass({

  statics: {
    title: '<ListView> - Grid Layout',
    description: 'Flexbox grid layout.'
  },

  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(this._genRows({})),
    };
  },

  _pressData: ({}: {[key: number]: boolean}),

  componentWillMount: function() {
    this._pressData = {};
  },

  render: function() {
    return (
      // ListView wraps ScrollView and so takes on its properties.
      // With that in mind you can use the ScrollView's contentContainerStyle prop to style the items.
      <ListView
        contentContainerStyle={styles.list}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
      />
    );
  },

  _renderRow: function(rowData: string, sectionID: number, rowID: number) {
    var rowHash = Math.abs(hashCode(rowData));
    var imgSource = THUMB_URLS[rowHash % THUMB_URLS.length];
    return (
        <View>
          <View style={styles.row}>
            <Image style={styles.thumb} source={imgSource} />
          </View>
          <View style={styles.text}>
          </View>
        </View>
    );
  },

  _genRows: function(pressData: {[key: number]: boolean}): Array<string> {
    var dataBlob = [];
    for (var ii = 0; ii < 100; ii++) {
      var pressedText = pressData[ii] ? ' (X)' : '';
      dataBlob.push('Cell ' + ii + pressedText);
    }
    return dataBlob;
  },

  _pressRow: function(rowID: number) {
    this._pressData[rowID] = !this._pressData[rowID];
    this.setState({dataSource: this.state.dataSource.cloneWithRows(
      this._genRows(this._pressData)
    )});
  },
});

/* eslint no-bitwise: 0 */
var hashCode = function(str) {
  var hash = 15;
  for (var ii = str.length - 1; ii >= 0; ii--) {
    hash = ((hash << 5) - hash) + str.charCodeAt(ii);
  }
  return hash;
};

var styles = StyleSheet.create({
  list: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  row: {
    justifyContent: 'center',
    // padding: 1,
    margin: 1,
    width: 118,
    height: 118,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CCC',
  },
  thumb: {
    width: 118,
    height: 118
  },
  text: {
    flex: 1,
    marginTop: 1,
  },
});

AppRegistry.registerComponent('rnMaterialDesignGrid', () => rnMaterialDesignGrid);