import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import Hero from '../components/hero'

const ProjectTemplate = ({
  data: {
    mdx: {
      frontmatter: { title, description, image, variant, client },
      body
    }
  }
}) => {
  return (
    <main>
        <Hero heroHeader={title} heroDescription={description} heroImage={image.childImageSharp.fluid.src}/>
      <h1>{`title - ${title}`}</h1>
      <h2>{`variant - ${variant}`}</h2>
      <h3>{`client - ${client}`}</h3>
      <MDXProvider>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </main>
  );
};

export default ProjectTemplate;