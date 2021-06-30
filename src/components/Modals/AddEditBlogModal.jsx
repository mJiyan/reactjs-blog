import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Modal, Button, Form } from 'react-bootstrap';
import * as actions from '../../redux/actions/Blog';

const AddEditBlogModal = (props) => {
  const dispatch = useDispatch();
  const { id } = props;
  const blog = useSelector((state) => state.BlogReducer.blog);

  const { register, handleSubmit, setValue } = useForm();
  // set defaultValues for inputs
  const inputs = ['title', 'content', 'isPublished'];
  const blogInputs = id !== 0
    ? inputs.forEach((input) => setValue(input, blog[input]))
    : inputs.forEach((input) => setValue(input, ''));

  useEffect(() => {
    if (id !== 0) {
      const loadBlog = async () => {
        const { success, error } = await dispatch(actions.getBlogDetails(id));
        if (!success) window.console.log('An error occurred with', error.status, error.statusText, 'status');
      };
      loadBlog();
    }
  }, [dispatch, id, blogInputs]);

  const onSubmit = async (theBlog) => {
    const { success, error } = id !== 0
      ? await dispatch(actions.updateBlog(theBlog, id))
      : await dispatch(actions.createBlog(theBlog));

    if (!success) window.console.log('An error occurred with', error.status, error.statusText, 'status');
    else {
      dispatch(actions.getBlogs());
      props.onHide();
    }
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {id !== 0 ? 'Update the blog' : 'Create a new blog'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" {...register('title')} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Content</Form.Label>
            <Form.Control as="textarea" rows={5} {...register('content')} />
          </Form.Group>
          <Form.Group>
            <Form.Check type="checkbox" {...register('isPublished')} label="Is Published" />
          </Form.Group>
          <Modal.Footer>
            <Button type="submit" variant="primary">
              Submit
            </Button>
            <Button onClick={() => props.onHide()} variant="secondary">
              Close
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddEditBlogModal;
