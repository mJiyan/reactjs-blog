import React from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import * as actions from '../../redux/actions/Blog';

const RemoveBlogModal = (props) => {
  const { id } = props;

  const dispatch = useDispatch();

  const removeBlog = async (blogId) => {
    const { success, error } = await dispatch(actions.removeBlog(blogId));
    if (!success) console.log('An error occurred with', error.status, error.statusText, 'status');
    else {
      dispatch(actions.getBlogs());
      props.onHide();
    }
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Remove the blog</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to remove it?</Modal.Body>
      <Modal.Footer>
        <Button onClick={() => removeBlog(id)} variant="danger">
          Remove
        </Button>
        <Button onClick={() => props.onHide()} variant="secondary">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RemoveBlogModal;
