import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import Hero from '../components/hero'
import { 
  Container,
  Box,
  List,
  ListItem,
  Divider
 } from '@chakra-ui/react';

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
        category,
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
        <Container maxW="8xl" centerContent fontSize={'xl'}>
        <Box padding="4" maxW="6xl">
          <List>
      <ListItem>{`Category: ${category}`}</ListItem>
      <ListItem>{`Client: ${client}`}</ListItem>
      <ListItem>{`Release Date: ${date}`}</ListItem>
      </List>
      <Divider />
      </Box>
      <MDXProvider>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
      
      </Container>
    </main>
  );
};

export default ProjectTemplate;