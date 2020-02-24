import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import Thumbnail from "../components/Thumbnail"
import ThumbnailRowStyles from "../styles/thumbnailRowStyles.module.css"

export default () => {
    const data = useStaticQuery (
    graphql`
      query  {
        allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {category: {eq: "Anthro"}}}) {
          edges {
            node {
              fields {
                slug
              }
              excerpt(pruneLength: 50)
              frontmatter {
                title
                date
        }
      }
    }
  }
}

    `
  )
  //Next step is to filter by category!
  return (
    <Layout>
    <div style={{backgroundColor:'#563E23', height:'600px'}}>
      <div className={ThumbnailRowStyles.row}>
        {data.allMarkdownRemark.edges.map(({node}) => (
      <Thumbnail ImgSrc="images/calendula.jpeg" ImgAlt="calendula"
      Title={node.frontmatter.title} Text={node.excerpt} Link={node.fields.slug}/>
    ))}
      </div>
    </div>
    </Layout>
  )
}
