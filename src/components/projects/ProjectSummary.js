import React from "react";

const ProjectSummary = ({ project }) => {
  const date = new Date(project.createdAt.seconds);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const formattedDate = date.toLocaleDateString("en-US", options);
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>
          Posted by {project.authorFirstName} {project.authorLastName}
        </p>
        <p className="grey-text">Date Posted: {formattedDate}</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
