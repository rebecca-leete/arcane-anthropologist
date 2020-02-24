import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import FullWidthYellow from "../components/containers/FullWidthYellow"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
    <div style={{backgroundColor:'#7C627C',display:"flex"}}>
      <div style={{marginRight:"30px"}}>
      <Img fluid={data.file.childImageSharp.fluid}/>
        <Link to="/blogpost" class="c-feature-content"><strong>Latest Story Here:</strong></Link>

      </div>
      <div>

      <h3>Posts so far</h3>
      {data.allMarkdownRemark.edges.map(({node}) => (
        <div key={node.id}>
          <h4>{node.frontmatter.title}</h4> - {node.frontmatter.date}
          <p>{node.excerpt}</p>

        </div>
        
      ) )}
      </div>
    </div>
    </Layout>
  )
}

//explore elements of childImageSharp
//trial gatsbyimg with fullwidthimg component

export const query = graphql`
query MyQuery {
  file(relativePath: {eq: "images/hand.jpg"}) {
    id
    childImageSharp {
      fluid(maxHeight: 400) {
        aspectRatio
        base64
        sizes
        src
        srcSet
      }
    }
  }
  allMarkdownRemark(filter:{
    frontmatter: {category: {eq: "Arcane"}}
  }) {
    edges {
      node {
        frontmatter {
          title
          date
          category
        }
      }
    }
  }
}
`
