import styled from 'styled-components'
import { Link } from 'gatsby'

export const StyledWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  place-content: start;
`

export const StyledFullScreenWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
`
export const StyledHalfScreenWrapper = styled.div`
  width: 100%;
  height: 55vh;
  display: flex;
  overflow: hidden;
`
export const StyledSliderWrapper = styled.div`
  width: 100%;
  height: 45vh;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`
export const StyledContentCenterWrapper = styled.div`
  display: flex;
  text-align: center;
  color: var(--white);
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const StyledContentWrapperLeft = styled(StyledContentCenterWrapper)`
  max-width: 960px;
  margin: auto 53% auto auto;
`

export const StyledImageWrapper = styled.div`
  max-width: ${props => props.maxWidth || 300}px;
  margin: 0 auto 1.45rem;
`

export const StyledLink = styled(Link)`
  margin-left: 0.32rem;
`
