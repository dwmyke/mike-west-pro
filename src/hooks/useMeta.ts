import { graphql, useStaticQuery } from 'gatsby'

export const useMeta = () => {
  const query = useStaticQuery(graphql`
    query siteQuery {
      site {
        siteMetadata {
          title
          description
          keywords
          siteUrl
          siteImage
          lang
          type
        }
      }
    }
  `)
  return query
}