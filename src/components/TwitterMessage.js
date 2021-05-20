import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleOnChange = e => {
    // console.log(e.target.value)
 
    this.setState({
      message: e.target.value
    })
  }

  render() {
    const charsLeft = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
         name="message"
        id="message"
        value={this.state.message}
        onChange= {this.handleOnChange} />
        Characters Left = {charsLeft}
      </div>
    );
  }
}

export default TwitterMessage;
