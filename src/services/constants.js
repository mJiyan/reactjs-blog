const apiUrl = {
  Development: 'http://localhost:8081',
  // Test: "https://api.test.blogapp.com/",
  // Production: "https://api.blogapp.com/",
};

export const HTTP = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
};

export const endPoint = apiUrl[process.env.REACT_APP_NODE_ENV] || apiUrl.Development;

export const MaxReviewFileSize = 50 * 1024 * 1024; // MB
