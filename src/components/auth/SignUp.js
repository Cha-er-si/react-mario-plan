import React, { Component } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { signUp } from "../../store/actions/authActions";
import { userNotification } from "../../store/actions/notificationActions";

export class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const userDetails = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
    };
    this.props.userNotification(userDetails);
    this.props.signUp(this.state);
  };

  render() {
    const { auth, authError } = this.props;
    // console.log({ authError });
    if (auth) {
      return <Navigate to="/" />;
    } else {
      return (
        <div className="container">
          <form className="white" onSubmit={this.handleSubmit}>
            <h5 className="grey-text text-darken-3">Sign Up</h5>
            <div className="input-field">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                onChange={this.handleChange}
              />
            </div>
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
              <button className="btn grey lighten-1 z-depth-0">Submit</button>
              <div className="red-text center">
                {authError ? (
                  <p>
                    {authError
                      .replace("Firebase:", "")
                      .replace("(auth/invalid-email).", "")
                      .replace(" (auth/weak-password)", "")}
                  </p>
                ) : null}
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
    auth: state.auth.user,
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => {
      return dispatch(signUp(newUser));
    },
    userNotification: (details) => {
      dispatch(userNotification(details));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
