import { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  componentDidCatch(error) {
    this.setState({ hasError: true, error });
  }

  render() {
    const { hasError, error } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <div>
          <p>Oops! something is wrong here...</p>
          {error.toString()}
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
