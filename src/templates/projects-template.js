import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import Hero from '../components/hero'
import { Container } from '@chakra-ui/react';

const ProjectTemplate = ({
  data: {
    mdx: {
      frontmatter: { 
        title, 
        description,
        date, 
        image, 
        variant, 
        tags, 
        client, 
        video, 
        videoTitle },
      body
    }
  }
}) => {
  return (
    <main>
        <Hero heroHeader={title} heroDescription={description} heroImage={image.childImageSharp.original.src} heroVidUrl={video} heroVidTitle={videoTitle} heroTags={tags}/>
        <Container>
      <h1>{`title - ${title}`}</h1>
      <h2>{`variant - ${variant}`}</h2>
      <h3>{`client - ${client}`}</h3>
      <h4>{`Release Date: ${date}`}</h4>
      <ul>
        tags
        {tags
          ? tags.map((tag, index) => {
              return <li key={index}>{tag}</li>;
            })
          : null}
      </ul>
      <MDXProvider>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
      </Container>
    </main>
  );
};

export default ProjectTemplate;