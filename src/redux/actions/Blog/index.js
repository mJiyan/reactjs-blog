import actionTypes from './types';
import apiCall from '../../../services/api';
import { HTTP } from '../../../services/constants';

export const getBlogs = () => async (dispatch) => {
  try {
    const { data } = await apiCall('/blogs', null, null, HTTP.GET, null, true);
    dispatch({
      type: actionTypes.GET_BLOGS,
      payload: data,
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: error.response.data };
  }
};

export const createBlog = (blog) => async (dispatch) => {
  try {
    const { data } = await apiCall('/blogs', blog, null, HTTP.POST, null, true);
    dispatch({
      type: actionTypes.CREATE_BLOG,
      payload: data,
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: error.response.data };
  }
};

export const getBlogDetails = (id) => async (dispatch) => {
  try {
    const { data } = await apiCall(`/blogs/${id}`, null, null, HTTP.GET, null, true);
    dispatch({
      type: actionTypes.GET_BLOGDETAILS,
      payload: data,
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: error.response };
  }
};

export const updateBlog = (blog, id) => async (dispatch) => {
  try {
    const { data } = await apiCall(`/blogs/${id}`, blog, null, HTTP.PUT, null, true);
    dispatch({
      type: actionTypes.UPDATE_BLOG,
      payload: data,
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: error.response.data };
  }
};

export const removeBlog = (id) => async (dispatch) => {
  try {
    const { data } = await apiCall(`/blogs/${id}`, null, null, HTTP.DELETE, null, true);
    dispatch({
      type: actionTypes.REMOVE_BLOG,
      payload: data,
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: error.response.data };
  }
};
