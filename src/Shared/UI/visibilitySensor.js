import React, { Component } from "react";
import VSensor from "react-visibility-sensor";

class VisibilitySensor extends React.Component<{
  once: boolean
}> {
  state = {
    active: true
  }

  render() {
    const { once, children, ...theRest } = this.props;
    return (
      <VSensor
        active={this.state.active}
        onChange={(isVisible) =>
          once &&
          isVisible &&
          this.setState({ active: false })
        }
        {...theRest}
      >
        {({ isVisible }) => children({ isVisible })}
      </VSensor>
    );
  }
}

export default VisibilitySensor;
