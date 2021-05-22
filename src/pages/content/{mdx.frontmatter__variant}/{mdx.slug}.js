import React from 'react'
import { graphql, Link  } from 'gatsby'

import PostsTemplate from '../../../templates/posts-template';
import ProjectsTemplate from '../../../templates/projects-template';

const MdxPage = ({
  data,
  data: {
    mdx: {
      frontmatter: { variant }
    }
  }
}) => {
  const templates = {
    posts: <PostsTemplate data={data} />,
    projects: <ProjectsTemplate data={data} />
  };

  return (
    <>
      <Link to="/">Back</Link>
      {templates[variant] ? templates[variant] : null}
    </>
  );
};

export const query = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        description
        image
        variant
        tags
        client
      }
      body
    }
  }
`;

export default MdxPage;