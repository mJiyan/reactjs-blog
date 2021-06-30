import actionTypes from '../../actions/Blog/types';

const initialState = {
  blog: {},
  blogs: [],
};

const BlogReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_BLOGS:
      return { ...state, blogs: action.payload };
    case actionTypes.CREATE_BLOG:
      return { ...state, blog: action.payload };
    case actionTypes.GET_BLOGDETAILS:
      return { ...state, blog: action.payload };
    case actionTypes.UPDATE_BLOG:
      return { ...state, blog: action.payload };
    case actionTypes.REMOVE_BLOG:
      return { ...state, blog: action.payload };
    default:
      return state;
  }
};

export default BlogReducer;
