import React from "react"
import styled from "styled-components"

export const Title = ({ title, subtitle }) => {
  return (
    <TitleWrapper>
      <h4>
        <span>{title}</span>
        <span>{subtitle}</span>
      </h4>
    </TitleWrapper>
  )
}

const TitleWrapper = styled.div`
  text-transform: uppercase;
  font-size: 2.3rem;
  margin-bottom: 2rem;
  h4 {
    text-align: center;
    letter-spacing: 7px;
    color: var(--primaryColor);
  }
  .title {
    /* color: var(--mainBlack); */
    font-size: 16px;
  line-height: 1.125;
  text-transform: uppercase;
  font-weight: 300;
  background: var(--ligterBlack);
  display: inline-block;
  vertical-align: top;
  color: var(--mainWhite);
  padding: 5px 16px;
  margin-bottom: 10px;
  }
  .altTitle {
    color: var(--mainWhite)
  }
  span {
    display: block;
  }
  @media (min-width: 576px) {
    span {
      display: inline-block;
      margin: 0 0.35rem;
    }
  }
`

export default Title


