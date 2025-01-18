// src/components/ErrorBoundary.jsx

import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    // Update state to indicate an error has occurred
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI in case of an error
      return <h1>Something went wrong.</h1>;
    }
    // Render the children components if no error
    return this.props.children;
  }
}

export default ErrorBoundary;
