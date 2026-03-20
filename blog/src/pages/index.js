import * as React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { StyledHeading } from "../components/StyledHeading"

const StyledParagraph = styled.p`
margin: 0 auto;
  margin-bottom: var(--space-5);  
`

const IndexPage = ({ data }) => (
  <Layout>
    <StyledHeading>Survivor 50: In the Hands of the Fans</StyledHeading>

    <StyledParagraph>Survivor Season 50, titled “Survivor 50: In the Hands of the Fans,”
      is a milestone season that celebrates the show's long history and impact.
      To mark reaching fifty seasons, the show brings back a large cast of returning
      players from different eras, highlighting how the game has evolved over time and
      bringing together some of the most memorable competitors in the franchise.
      What makes this season especially unique is the strong role that fans play in shaping the game.
      Viewers were able to vote on certain twists and elements of the season before it began, giving
      them real influence over how the competition unfolds. The season also includes celebrity involvement,
      such as a special reward inspired by the Zac Brown Band and the introduction of the
      Boomerang Idol, a twist where an idol can return to its original owner after being played
      or leaving the game with another player. These additions highlight how both fans and celebrity
      supporters helped influence the season's design.
      Because of this mix of returning players, fan participation, and celebrity involvement,
      Season 50 stands out as both a competitive season and a celebration of the community
      that has supported Survivor for over two decades.</StyledParagraph>

    <StyledHeading>The Cast</StyledHeading>

    <ul className={styles.list}>
      {
        data.allContentfulBlogPost.edges.filter(edge => edge.node.category === "Survivor").sort((a, b) => a.node.title.localeCompare(b.node.title)).map(edge => (
          <li key={edge.node.id}>
            <Link to={edge.node.slug}>{edge.node.title}</Link>
          </li>
        ))
      }
    </ul>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
   {
  allContentfulBlogPost {
    edges {
      node {
        title
        slug
        category
        heroImage {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 300
          )
        }
      }
    }
  }
}
  `