import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <h2 style={{marginLeft:'30px'}}>My Site's Files</h2>
      <table style={{marginLeft:'30px'}}>
        <thead>
          <tr>
            <th>Name:</th>
            <th>Relative Path:</th>
            <th>Prettysize:</th>
            <th>Extension:</th>
            <th>Birth time:</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.allFile.edges.map(({ node }, name) => (
            <tr key={name}>
              <th>{node.name}</th>
              <th>{node.relativePath}</th>
              <th>{node.prettySize}</th>
              <th>{node.extension}</th>
              <th>{node.birthTime}</th>
            </tr>
          ))}
        </tbody>
      </table>
      
    </Layout>
  )
  }

  export const query = graphql`
    query {
      allFile {
        edges {
          node {
            name
            relativePath
            prettySize
            extension
            birthTime(fromNow: true)
          }
        }
      }
    }
    `

