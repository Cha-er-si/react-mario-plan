import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetails = (props) => {
  const params = useParams();
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {params.id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
            laboriosam, est quis vero officia exercitationem voluptatem cum? Sit
            voluptatem illum ipsum veritatis, quam unde a asperiores corrupti,
            at, vitae aliquid?
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Someone</div>
          <div>Date posted</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
