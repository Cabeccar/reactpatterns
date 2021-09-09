import {Component} from 'react';

 class ErrorBoundaryRenderProp extends Component {
  state = {hasError: false, error: null};

  componentDidCatch(error) {
    this.setState({hasError: true, error});
  }

  render() {
    const {hasError, error} = this.state;
    const {children} = this.props;

    if (hasError && !this.props.render) {
      return (
        <div>
          <p>Oops! something is wrong here...</p>
          {error.toString()}
        </div>
      );
    }

    if (hasError && this.props.render) {
      return this.props.render(error);
    }

    return children;
  }
}

export default ErrorBoundaryRenderProp;