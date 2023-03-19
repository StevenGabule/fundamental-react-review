function postReducer(state, action) {
  switch (action.type) {
    case "ADD_POST": { 
      return {
        posts: [action.payload.post, ...state.posts] 
      };
    }
    case "DELETE_POST": {
      const id = action.payload.id;
      return {
        posts: state.posts.filter((post) => post.id !== id)
      };
     }
    default:
      return state;
  }
}

export default postReducer;