import React, { Component } from "react";
import css from "./css/NavBarForm.module.css";

export class NavBarForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
        isLoggedIn: prevState.isLoggedIn === true ? false : true,
    }))
  }

  render() {
    return (
      <div className={css.NavBar}>
        <h1>My Gallery</h1>
        { this.state.isLoggedIn === false ? (
        <button onClick={this.handleClick}>Login</button>
        ) : (
            <form onSubmit={this.handleClick}>
                <label for="Login">Name</label>
                <input type="text" id="Login" name="login"></input>
                <label for="Password">Password</label>
                <input type="password" id="Password" name="Password"></input>
                <button type="submit" value="Submit">Submit</button>
            </form>
        )}
      </div>
    );
  }
}

export default NavBarForm;
