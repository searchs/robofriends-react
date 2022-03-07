import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasErrors: false
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasErrors: true });
  }

  render() {
    if (this.state.hasErrors) {
      return <h2> Ooops! Error Galore!</h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
