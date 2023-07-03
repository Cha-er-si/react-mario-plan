import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";
import { fetchUserProfile } from "../../store/actions/profileActions";

const Navbar = (props) => {
  const { user, fetchUserProfile, profile } = props;
  if (user) {
    fetchUserProfile(user.uid);
  }
  const data = profile ? profile : null;
  return (
    <nav className="nav-wrapper indigo darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Mario Plan
        </Link>
        {user ? <SignedInLinks profile={data} /> : <SignedOutLinks />}
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    user: state.auth.user,
    profile: state.profile.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserProfile: (id) => {
      dispatch(fetchUserProfile(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
