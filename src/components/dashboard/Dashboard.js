import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import { Navigate, Redirect, redirect } from "react-router-dom";

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
    const { projects, auth, notifications } = this.props;

    // console.log({ dashboard: projects });
    if (auth) {
      const notif =
        notifications && notifications.length > 3
          ? notifications.slice(0, 3)
          : notifications;
      return (
        <div className="dashboard container">
          <div className="row">
            <div className="col s12 m6">
              <ProjectList projects={projects} />
            </div>
            <div className="col s12 m5 offset-m1">
              <Notifications notifications={notif} />
            </div>
          </div>
        </div>
      );
    } else {
      return <Navigate to="/signin" />;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.project.projects,
    auth: state.auth.user,
    notifications: state.notification.notification,
  };
};

const ConnectedComponent = connect(mapStateToProps)(Dashboard);

export default ConnectedComponent;
