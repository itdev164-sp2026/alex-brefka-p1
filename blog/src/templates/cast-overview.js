import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { GatsbyImage } from "gatsby-plugin-image";
import { StyledHeading } from "../components/StyledHeading";
import * as styles from "../components/index.module.css"
const BlogPost = ({ data }) => {
    const { title } = data.contentfulBlogPost;

    return (
        <Layout>
            <StyledHeading>{title}</StyledHeading>
            <div className={styles.centerImage}>
                <GatsbyImage image={data.contentfulBlogPost.heroImage.gatsbyImageData} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: data.contentfulBlogPost.body.childMarkdownRemark.html }} className={styles.textCenter} />
        </Layout>
    )
}

export default BlogPost;

export const pageQuery = graphql`
  query blogPostQuery($slug: String!) {
        contentfulBlogPost(slug: { eq: $slug }) {
            title
            slug
            body {
                childMarkdownRemark {
                    html
                }
            }
            heroImage {
                gatsbyImageData(
                    layout: CONSTRAINED
                    placeholder: BLURRED
                    width: 300
                )
            }
        }
    }
`