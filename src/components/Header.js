import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby';

import Footer from './Footer'
import avatar from '../assets/images/me_portrait.jpg'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  return (
    <header id="header">
      <div className="inner">
        <Link to="/" className="image avatar"><img src={avatar} alt="Alexander Jones" /></Link>
        <h1><strong>{data.site.siteMetadata.author}</strong></h1>
        <h1>Software Developer</h1>
      </div>
      <Footer />
    </header>
  );
}

export default Header;
