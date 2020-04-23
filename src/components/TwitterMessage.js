import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      maxChars: props.maxChars,
      message: ""
    }
  }

  handleChange = (event) => {
    this.setState(previousState => {
      return {
        maxChars: previousState.maxChars - 1,
        [event.target.name]: event.target.value
      }
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} maxLength={this.props.maxChars} value={this.state.message} />
        <p>{this.state.maxChars} characters left.</p>
      </div>
    );
  }
}

export default TwitterMessage;
