import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Button, Container } from 'react-bootstrap';
import { ArrowLeft, Check2All, DashCircleFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import * as actions from '../../redux/actions/Blog';

const BlogDetail = (props) => {
  const {
    match: {
      params: { id },
    },
  } = props;

  const blog = useSelector((state) => state.BlogReducer.blog);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadBlog = async () => {
      const { success, error } = await dispatch(actions.getBlogDetails(id));
      if (!success) {
            window.console.log('An error occurred with', error.status, error.statusText, 'status');
      }
    };
    loadBlog();
  }, [dispatch, id]);

  return (
    <Container>
      <Card className="text-center">
        <Card.Header>
          Blog id:
          {blog.id}
        </Card.Header>
        <Card.Body>
          <Card.Title>{blog.title}</Card.Title>

          <Card.Text>{blog.content}</Card.Text>
          <Link to="/">
            <Button variant="primary">
              <ArrowLeft /> Go to blog list{' '}
            </Button>
          </Link>
        </Card.Body>
        <Card.Footer className="text-muted">
          {blog.isPublished === true ? (
            <p>
              <Check2All /> Publi shed
            </p>
          ) : (
            <p>
              <DashCircleFill /> Not published
            </p>
          )}{' '}
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default BlogDetail;
