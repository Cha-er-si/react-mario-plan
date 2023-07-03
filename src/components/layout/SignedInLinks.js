import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { signOut } from "../../store/actions/authActions";
import { connect } from "react-redux";

const SignedInLinks = (props) => {
  const { signOut, profile } = props;
  if (profile != null) {
    return (
      <ul className="right">
        <li>
          <NavLink to="/create">New Project</NavLink>
        </li>
        <li>
          <NavLink to="/" onClick={signOut}>
            Sign Out
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="btn btn-floating grey lighten-1">
            {profile.initials}
          </NavLink>
        </li>
      </ul>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => {
      return dispatch(signOut());
    },
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
