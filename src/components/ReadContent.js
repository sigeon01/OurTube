import React, { Component } from "react";
import ReactPlayer from "react-player";

class ReadContent extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        <ReactPlayer
        className="player"
        url={this.props.desc}
        controls
        playing={true}
        width="500px"
        height="400px"
        />
        
        <div>
          
        </div>
      </article>
    );
  }
}

export default ReadContent;
