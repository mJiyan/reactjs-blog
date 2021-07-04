import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Container, Table } from 'react-bootstrap';
import * as actions from '../../redux/actions/Blog';
import { AddEditBlogModal, RemoveBlogModal } from '../../components';

const BlogList = () => {
  const [removeModalShow, setRemoveModalShow] = useState(false);
  const [removeId, setRemoveId] = useState(0);

  const [addEditModalShow, setaddEditModalShow] = useState(false);
  const [blogId, setBlogId] = useState(0);

  const blogs = useSelector((state) => state.BlogReducer.blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadBlogs = async () => {
      const { success, error } = await dispatch(actions.getBlogs());
      if (!success) {
                console.log('An error occurred with', error.status, error.statusText, 'status');
      }
    };
    loadBlogs();
  }, [dispatch]);

  const removeBlog = (id) => {
    setRemoveModalShow(true);
    setRemoveId(id);
  };

  const addEditBlog = (id) => {
    setaddEditModalShow(true);
    setBlogId(id);
  };

  return (
    <>
      <Container>
        <h3>Blog List</h3>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((item, key) => (
              <tr key={item.id}>
                <td>{key + 1}</td>
                <td>{item.title}</td>
                <td>
                  <Link to={`/blog/details/${item.id}`}>
                    <Button variant="warning">Detail</Button>
                  </Link>{' '}
                  <Button onClick={() => addEditBlog(item.id)} variant="info">
                    Update
                  </Button>{' '}
                  <Button onClick={() => removeBlog(item.id)} variant="danger">
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button onClick={() => addEditBlog(0)} variant="success" size="lg">
          Create a new blog
        </Button>
      </Container>

      <AddEditBlogModal
        id={blogId}
        show={addEditModalShow}
        onHide={() => setaddEditModalShow(false)}
      />

      <RemoveBlogModal
        id={removeId}
        show={removeModalShow}
        onHide={() => setRemoveModalShow(false)}
      />
    </>
  );
};

export default BlogList;
