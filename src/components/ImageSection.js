import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'
import { StyledHalfScreenWrapper } from './SharedStyledComponents'

/**
 * In this functional component a fullscreen <BackgroundImage /> may be created
 * with art-directed images.
 * @param className   string    className(s) from styled-components.
 * @param children    nodes     Child-components.
 * @return {*}
 * @constructor
 */
const ImageSection = ({ className, children }) => {
  const { ImageSection, medium, small } = useStaticQuery(
    graphql`
      query {
        ImageSection: file(relativePath: { eq: "zoom-image-head-bg-white.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        medium: file(relativePath: { eq: "zoom-image-head-bg-white.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1400, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        small: file(relativePath: { eq: "zoom-image-head-bg-white.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 490, maxHeight: 1200, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  // Art-Direction Array
  const backgroundArtDirectionStack = [
    small.childImageSharp.fluid,
    {
      ...medium.childImageSharp.fluid,
      media: `(min-width: 491px)`,
    },
    {
      ...ImageSection.childImageSharp.fluid,
      media: `(min-width: 1401px)`,
    },
  ]

  return (
    <StyledHalfScreenWrapper>
      <BackgroundImage
        Tag="section"
        className={className}
        fluid={backgroundArtDirectionStack}
        backgroundColor={`#fff`}
        title="Abstract Creative"
        id="adfullscreenbg"
        role="img"
        // aria-label="Abstract Creative"
        preserveStackingContext={true}
      >
        {children}
      </BackgroundImage>
    </StyledHalfScreenWrapper>
  )
}

const StyledFullBackground = styled(ImageSection)`
margin: 0 auto;
position:relative;
width: 100%;
`

export default StyledFullBackground

