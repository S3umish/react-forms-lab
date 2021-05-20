import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleSubmit = e => {
    // console.log("clicked")
    e.preventDefault()
    if(this.state.username && this.state.password){
     this.props.handleLogin(this.state)
    }
  }

      
  

  handleOnChange = e => {
    // console.log(e.target.value)
    const name = e.target.name
    const value = e.target.value
    this.setState ({
      [name]: value
    })
  }



  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" 
            name="username" 
            type="text"
            value ={this.state.value}
            onChange ={this.handleOnChange}

             />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" 
            name="password" 
            type="password"
            value={this.state.password}
            onChange ={this.handleOnChange}
             />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
