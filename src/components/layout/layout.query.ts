import { graphql, useStaticQuery } from 'gatsby'
import { Base64 } from '../../types'

type LayoutData = {
  file: {
    childImageSharp: {
      fluid: {
        base64: Base64
      }
    }
  }
}

const query = graphql`
  query LayoutQuery {
    file(relativePath: { eq: "bridge.jpg" }) {
      childImageSharp {
        fluid {
          base64
        }
      }
    }
  }
`

export function useLayoutQuery(): LayoutData {
  return useStaticQuery(query)
}
