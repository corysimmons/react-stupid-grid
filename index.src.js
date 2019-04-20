import styled from '@emotion/styled'
import React from 'react'

export const breakpoints = {
  tablet: '425px',
  desktop: '1024px',
}

const defaultGutter = '2rem'

const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: ${({ gutter }) => `calc(-${gutter} / 2)`};
  margin-right: ${({ gutter }) => `calc(-${gutter} / 2)`};
`

const StyledCol = styled.div`
  margin-left: ${({ gutter }) => `calc(${gutter} / 2)`};
  margin-right: ${({ gutter }) => `calc(${gutter} / 2)`};

  width: ${({ default: def }) => {
    if (def === 'auto') {
      return 'auto'
    } else {
      return ({ gutter }) => `calc(100% * ${def} - ${gutter})`
    }
  }};

  flex: ${({ default: def }) => {
    if (def === 'auto') {
      return '1'
    }
  }};

  @media (min-width: ${breakpoints.tablet}) {
    width: ${({ tablet }) => {
      if (tablet === 'auto') {
        return 'auto'
      } else {
        return ({ gutter }) => `calc(100% * ${tablet} - ${gutter})`
      }
    }};

    flex: ${({ tablet }) => {
      if (tablet === 'auto') {
        return '1'
      }
    }};
  }

  @media (min-width: ${breakpoints.md}) {
    width: ${({ desktop }) => {
      if (desktop === 'auto') {
        return 'auto'
      } else {
        return ({ gutter }) => `calc(100% * ${desktop} - ${gutter})`
      }
    }};

    flex: ${({ desktop }) => {
      if (desktop === 'auto') {
        return '1'
      }
    }};
  }
`

export const Row = ({ gutter = defaultGutter, children }) => (
  <StyledRow gutter={gutter}>
    {React.Children.map(children, (child, index) => {
      return React.cloneElement(child, {
        index,
        gutter,
      })
    })}
  </StyledRow>
)

export const Col = ({ gutter, default: def, tablet, desktop, children }) => (
  <StyledCol gutter={gutter} default={def} tablet={tablet} desktop={desktop}>
    {children}
  </StyledCol>
)
