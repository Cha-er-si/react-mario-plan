import React, { Component } from "react";
import { createProject } from "../../store/actions/projectActions";
import { connect } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const Wrapper = () => {
  const navigate = useNavigate();

  return <ConnectedComponent navigate={navigate} />;
};

export class CreateProject extends Component {
  state = {
    title: "",
    content: "",
  };

  handleChange = (e) => {
    const { profile } = this.props;
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { navigate } = this.props;
    this.props.createProject(this.state);
    navigate("/");
  };

  render() {
    const { auth } = this.props;
    if (auth) {
      return (
        <div className="container">
          <form className="white" onSubmit={this.handleSubmit}>
            <h5 className="grey-text text-darken-3">Create New Project</h5>
            <div className="input-field">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field">
              <label htmlFor="content">Project Content</label>
              <textarea
                name="content"
                id="content"
                className="materialize-textarea"
                onChange={this.handleChange}
              ></textarea>
            </div>
            <div className="input-field">
              <button className="btn grey lighten-1 z-depth-0">Create</button>
            </div>
          </form>
        </div>
      );
    } else {
      return <Navigate to="/signin" />;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth.user,
    navigate: ownProps.navigate,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => {
      dispatch(createProject(project));
    },
  };
};

const ConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProject);

export default Wrapper;
