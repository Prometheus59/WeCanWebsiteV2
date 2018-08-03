import React from "react";
import "./Resource.css";
import TitleButton from "./TitleButton";

export default class HideTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };

    this.handleChange = this.handleChange.bind(this);

    this.toggleInstance = (
      <div onClick={this.handleChange} id="toggleinst">
        <TitleButton title={this.props.title} />
      </div>
    );
  }

  handleChange(event) {
    this.setState({ visible: !this.state.visible }); //Change this to visible too
  }

  render() {
    const style = this.state.visible
      ? {
          visibility: "visible",
          transition:
            "visibility 0.5s, opacity 0.2s linear, max-height 1s ease",
          opacity: 1,
          maxHeight: "1000px"
        }
      : {
          visibility: "hidden",
          opacity: 0,
          transition:
            "visibility 0.5s, opacity 0.5s linear, max-height 0.5s ease",
          maxHeight: 0
        };

    return (
      <div>
        {this.toggleInstance}
        <div style={style}>
          {/*Children prop passes children elements directly into their output --> see Resources.js for more detail*/}
          <div className="links">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
