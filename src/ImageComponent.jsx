// Componente a classe: ImageComponent
import React, { Component } from "react";

class ImageComponent extends React.Component {
  render() {
    const { src, alt } = this.props;
    return <img src={src} alt={alt} className="w-full h-auto rounded" />;
  }
}

export default ImageComponent;
