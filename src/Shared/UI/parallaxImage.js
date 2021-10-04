import React from "react";
import { Parallax, Background } from 'react-parallax';

class ParallaxImage extends React.Component<{
  height: string,
  width: string,
  imgSrc: string,
  imgStyle: object,
  containerStyle: object,
  maxHeight: string,
  parallaxStrength: int,
  blur: int
}> {
  constructor(props) {
    super(props);

    this.styles = Object.assign({
      height: this.props.height || "60vh",
      width: this.props.width || "100vw"
    }, (this.props.containerStyle || {}));

    if (this.props.maxHeight) {
      delete this.styles.height;
      this.styles.maxHeight = this.props.maxHeight;
    }
  }

  render() {
    return (
      <Parallax
        style={this.styles}
        className={this.props.class || ""}
        strength={this.props.parallaxStrength || 300}
        blur={this.props.blur || 0}
      >
        <Background>
          <img src={this.props.imgSrc || ""} alt={this.props.alt} style={this.props.imgStyle || {}} />
        </Background>
      </Parallax>
    );
  }

  componentDidMount() {
  }
}

export default ParallaxImage;
