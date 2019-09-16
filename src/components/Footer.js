import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          email
          github
          linkedin
        }
      }
    }
  `);

  return (
    <div id="footer">
      <div className="inner">
        <ul className="icons">
          <li><a href={data.site.siteMetadata.linkedin} target="_blank" rel="noopener noreferrer" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
          <li><a href={data.site.siteMetadata.github} target="_blank" rel="noopener noreferrer" className="icon fa-github"><span className="label">Github</span></a></li>
          <li><a href="ResumeAlexanderJones.pdf" target="_blank" className="icon fa-file-pdf-o"><span className="label">Resume</span></a></li>
          <li><a href={`mailto:${data.site.siteMetadata.email}`} target="_blank" rel="noopener noreferrer" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
        </ul>
        <ul className="copyright">
          <li>&copy; Alexander Jones</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
