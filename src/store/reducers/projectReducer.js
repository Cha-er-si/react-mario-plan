const initState = {
  projects: [
    // { id: 1, title: "Project 1", content: "lorem ipsum" },
    // { id: 2, title: "Project 2", content: "lorem ipsum" },
    // { id: 3, title: "Project 3", content: "lorem ipsum" },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      // console.log("Created Project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      // console.log("Created Project has Error", action.error);
      return state;
    case "FETCH_PROJECT_SUCCESS":
      // console.log("Fetch Success", action.firestoreData);
      return { ...state, projects: action.firestoreData };
    // return state;
    case "FETCH_PROJECT_ID":
      return { document: action.project };
    default:
      return state;
  }
};

export default projectReducer;
