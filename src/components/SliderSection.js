import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'
import { StyledSliderWrapper } from './SharedStyledComponents'

/**
 * In this functional component a fullscreen <BackgroundImage /> may be created
 * with art-directed images.
 * @param className   string    className(s) from styled-components.
 * @param children    nodes     Child-components.
 * @return {*}
 * @constructor
 */
const SliderSection = ({ className, children }) => {
  const { SliderSection, medium, small } = useStaticQuery(
    graphql`
      query {
        SliderSection: file(relativePath: { eq: "featured-project-image-1.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        medium: file(relativePath: { eq: "featured-project-image-1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1400, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        small: file(relativePath: { eq: "featured-project-image-1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 490, maxHeight: 800, quality: 100) {
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
      ...SliderSection.childImageSharp.fluid,
      media: `(min-width: 1401px)`,
    },
  ]

  return (
    <StyledSliderWrapper>
      <BackgroundImage
        Tag="section"
        className={className}
        fluid={backgroundArtDirectionStack}
        backgroundColor={`#f14201`}
        title="Abstract Creative Slider"
        id="adfullscreenbg"
        role="img"
        // aria-label="Abstract Creative"
        preserveStackingContext={true}
      >
        {children}
      </BackgroundImage>
    </StyledSliderWrapper>
  )
}

const StyledFullBackground = styled(SliderSection)`
  width: 100%;
  height: 45vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default StyledFullBackground

