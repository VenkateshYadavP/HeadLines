import React, { Component } from 'react';
import { WebView,
ActivityIndicator
} from 'react-native';
class NewsDetail extends Component {
  render() {
    return (
      <WebView
        style = {{backgroundColor:'white'}}
        source={{uri: this.props.url}}
      />
    );
  }
}

export default NewsDetail;