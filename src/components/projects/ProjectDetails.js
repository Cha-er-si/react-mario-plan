import React from "react";
import { connect } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

function Wrapper() {
  const params = useParams();

  return <ConnectedComponent params={params} />;
}

const ProjectDetails = ({ project, auth }) => {
  if (auth) {
    if (project.length != 0) {
      const [data] = project;
      const date = new Date(data.createdAt.seconds);
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };
      const formattedDate = date.toLocaleString("en-US", options);
      return (
        <div className="container section project-details">
          <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title">{data.title}</span>
              <p>{data.content}</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
              <div>
                <span>Posted By: </span>
                {data.authorFirstName + " " + data.authorLastName}
              </div>
              <div>
                <span>Date Posted: </span>
                {formattedDate}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container center">
          <p>Loading project...</p>
        </div>
      );
    }
  } else {
    return <Navigate to="/signin" />;
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.params.id;
  const projects = state.project.projects;
  const data = projects.filter((project) => {
    return project.id === id;
  });
  return {
    project: data,
    auth: state.auth.user,
  };
};

const ConnectedComponent = connect(mapStateToProps)(ProjectDetails);

export default Wrapper;
