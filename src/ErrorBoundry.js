import React from "react";
import { Link } from "@reach/router";

class ErrorBoundry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  
  componentDidCatch(error, info) {
    console.error("ErrorBoundry caught an error", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing. <Link to="/">Click Here</Link>{" "}
          to go back to home page or wait five seconds
        </h1>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
