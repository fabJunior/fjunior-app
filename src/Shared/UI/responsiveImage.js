import React from "react";

class ResponsiveImage extends React.Component<{
  height: string,
  width: string,
  imgSrc: string,
  maxHeight: string
}> {
  constructor(props) {
    super(props);

    this.styles = {
      height: this.props.height ? this.props.height : "100%",
      width: this.props.width ? this.props.width : "100%",
      overflow: "hidden",
      objectFit: "cover",
      objectPosition: "center center"
    };

    if (this.props.maxHeight) {
      delete this.styles.height;
      this.styles.maxHeight = this.props.maxHeight;
    }
  }

  render() {
    return (
      <img src={this.props.imgSrc ?
        this.props.imgSrc : null}
           style={this.styles}
           className={`${this.props.class || ""} flexDisplay flexCenter`}
           alt={this.props.alt}
      />
    );
  }

  componentDidMount() {
  }
}

export default ResponsiveImage;
