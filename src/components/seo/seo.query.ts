import { graphql, useStaticQuery } from 'gatsby'

type SEOData = {
  site: {
    siteMetadata: {
      title: string
      description: string
      author: string
    }
  }
}

const query = graphql`
  query seoQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

export function useSEOQuery(): SEOData {
  return useStaticQuery(query)
}
