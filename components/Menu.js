import React, { Component } from 'react';
import { ListView } from 'react-native';

import Button from 'react-native-button';

class Menu extends Component {
  // constructor will be setting the initial state with the default data source of the ListView
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    };
  }
  // in componentDidMount, we'll set our menu items to the ListView data source
  componentDidMount() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(['Home', 'AnotherComponent'])
    });
  }

  _renderMenuItem(item) {
      return(
          <Button onPress={() => this.on_ItemSelect(item)}>{item}</Button>
      );
  }

  _onItemSelect(item) {
    // add code to push a scene in navigation stack, we'll do it later
  }

  // render function of the component. it will render a ListView that uses the _renderMenuItem funciton to render each row:
  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(item) => this._renderMenuItem(item)}
      />
    )
  }
}
