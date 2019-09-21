import React from 'react';
import { Link } from 'gatsby';

const NotFoundPage = () => (
  <div id="not-found-container">
    <h1>NOT FOUND</h1>
    <p id="not-found-text">You just hit a route that doesn&#39;t exist. <Link to="/">Return home.</Link></p>
  </div>
);

export default NotFoundPage;