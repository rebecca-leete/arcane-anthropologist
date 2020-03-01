import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Thumbnail from "../Thumbnail"

export default () => {
  const data = useStaticQuery (
    graphql`
      query  {
        allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
          edges {
            node {
              excerpt(pruneLength: 50)
              frontmatter {
                title
                date
                featureImage
        }
      }
    }
  }
}

    `
  )
  return (
    <div class="grid" id="thumbnail-row">

    {data.allMarkdownRemark.edges.map(({node}) => (
      <Thumbnail ImgSrc={node.frontmatter.featureImage} ImgAlt="calendula"
      Title={node.frontmatter.title} Text={node.excerpt}/>
    ))}
    </div>
  )
  }