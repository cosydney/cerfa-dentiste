import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import { ccam } from './ccam';


export default class AutoCompleteCCAM extends Component {
  state = {
    dataSource: [],
  };

  componentWillMount() {
    // this.readFile("./ccam.csv");
    console.log(ccam);
    // this.readTextFile("./ccam.csv");
  }

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: ccam,
    });
  };

  render() {
    return (
      <div>
        <AutoComplete
          hintText="CCAM"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
          maxSearchResults={10}
          listStyle={styles.list}
        />
      </div>
    );
  }
}

const styles = {
  list: {
    width: '100%'
  }
}
