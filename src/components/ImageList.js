import React, { Component } from "react";

export default class ImageList extends Component {
  render() {
    return (
      <div>
        {this.props.images.map(image => {
          return (
            <img key={image.id} alt="not found" src={image.urls.regular} />
          );
        })}
      </div>
    );
  }
}
