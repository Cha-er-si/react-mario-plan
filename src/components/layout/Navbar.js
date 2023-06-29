import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

const Navbar = ({ user }) => {
  // const { auth } = props;
  return (
    <nav className="nav-wrapper indigo darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Mario Plan
        </Link>
        {user ? <SignedInLinks /> : <SignedOutLinks />}
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(Navbar);
