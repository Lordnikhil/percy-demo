import React from 'react';

export default class Button extends React.Component {
  render() {
    return <button>{this.props.children}</button>;
  }
}