import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";

// function Wrapper() {
//   try {
//     const querySnapshot = [];
//     const collectionRef = collection(firestoreConfig, "projects");
//     // onSnapshot(collectionRef, (snapshot) => {
//     //   snapshot.docs.map((doc) => {
//     //     querySnapshot.push(doc.data());
//     //   });
//     // });
//     getDocs(collectionRef)
//       .then((res) => {
//         res.docs.map((doc) => {
//           querySnapshot.push(doc.data());
//         });
//       })
//       .catch((error) => {
//         console.log({ error });
//       });
//     return <ConnectedComponent snapshot={querySnapshot} />;
//   } catch (error) {
//     console.log({ error });
//   }
// }

export class Dashboard extends Component {
  render() {
    const { projects } = this.props;
    // console.log({ dashboard: projects });
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.project.projects,
  };
};

const ConnectedComponent = connect(mapStateToProps)(Dashboard);

export default ConnectedComponent;
