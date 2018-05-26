// to scroll every route to top on view change
// doc: https://reacttraining.com/react-router/web/guides/scroll-restoration

import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }
  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
