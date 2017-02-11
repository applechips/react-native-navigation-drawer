import React, { Component } from 'react';
import { ListView } from 'react-native';

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


}
