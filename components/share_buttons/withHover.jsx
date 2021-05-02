import React, { Component } from "react";

const withHover = (WrappedComponent) => {
  class WithHover extends Component {
    constructor(props) {
      super(props);
      this.state = { isHover: false };

      this.handleHover = this.handleHover.bind(this);
      this.handleLeave = this.handleLeave.bind(this);
    }

    handleHover() {
      this.setState({ isHover: true });
    }

    handleLeave() {
      this.setState({ isHover: false });
    }

    render() {
      return (
        <div style={{ padding: "0 0.3rem" }}>
          <WrappedComponent
            onMouseEnter={this.handleHover}
            onMouseLeave={this.handleLeave}
            round
            size={23}
            bgStyle={{
              fill: this.state.isHover
                ? "rgba(216, 30, 91, 1)"
                : "rgba(43, 29, 0, 0.2)",
            }}
          />
        </div>
      );
    }
  }
  return WithHover;
};

export default withHover;
