import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import FullWidthImage from "../components/containers/FullWidthImage"
import TitleImage from "../components/containers/TitleImage"
import FeatureText from "../components/containers/FeatureText"
import FullWidthYellow from "../components/containers/FullWidthYellow"
import FeatureTextImage from "../components/containers/FeatureTextImage"

export default ({data}) => {
  const post = data.markdownRemark
  return (
    <Layout>
    <FullWidthYellow Parent={post.frontmatter.parent} Category={post.frontmatter.category} Title={post.frontmatter.title}/>
      <TitleImage Text={post.frontmatter.title} ImgSrc="/images/AK2.jpg" ImgAlt="AK2"/>
      <FeatureText Title={post.frontmatter.intro.title} Content={post.frontmatter.intro.content} />
      <p className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html }}>
        
      </p>
      <FullWidthImage ImgSrc="/images/AK3.jpg" />
      <FeatureText Title={post.frontmatter.feature.title} Content={post.frontmatter.feature.content} />
      <p className="blog-post-content">
        
      </p>
      <FeatureTextImage
        imgSrc="/images/artemisme.jpg" imgAlt="artemisme"
        title="About the Me"
        text="This is some stuff about me and why I’m really cool and interesting and why you want to know more about me… For example I’m a badass forest fey and an alright stoner"
        button="Oooh how intriguing!"
      />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields:{ slug: { eq: $slug } }) {
      frontmatter {
          title
          parent
          category
          intro {
            content
            title
          }
          author
          date(fromNow: true)
          feature {
            content
            title
          }
        }
        html
    }
  }
`