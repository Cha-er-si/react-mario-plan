import React, { Component } from "react";
import { signIn } from "../../store/actions/authActions";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

export class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  render() {
    const { authError, auth } = this.props;
    if (auth) {
      return <Navigate to="/" />;
    } else {
      return (
        <div className="container">
          <form className="white" onSubmit={this.handleSubmit}>
            <h5 className="grey-text text-darken-3">Sign In</h5>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field">
              <button className="btn grey lighten-1 z-depth-0">Login</button>
              <div className="red-text center">
                {authError ? <p>{authError}</p> : null}
              </div>
            </div>
          </form>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.auth.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => {
      return dispatch(signIn(creds));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
