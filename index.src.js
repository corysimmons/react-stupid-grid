import styled from '@emotion/styled'

export const breakpoints = {
  sm: '425px',
  md: '768px',
  lg: '1440px',
}

const defaultGutter = '1rem'

const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: ${({ gutter }) => `calc(-${gutter} / 2)`};
  margin-right: ${({ gutter }) => `calc(-${gutter} / 2)`};
`

const StyledCol = styled.div`
  margin-left: ${({ gutter }) => `calc(${gutter} / 2)`};
  margin-right: ${({ gutter }) => `calc(${gutter} / 2)`};

  @media (min-width: ${breakpoints.sm}) {
    width: ${({ sm }) => {
      if (sm === 'auto') {
        return 'auto'
      } else {
        return ({ gutter }) => `calc(100% * ${sm} - ${gutter})`
      }
    }};

    flex: ${({ sm }) => {
      if (sm === 'auto') {
        return '1'
      }
    }};
  }

  @media (min-width: ${breakpoints.md}) {
    width: ${({ md }) => {
      if (md === 'auto') {
        return 'auto'
      } else {
        return ({ gutter }) => `calc(100% * ${md} - ${gutter})`
      }
    }};

    flex: ${({ md }) => {
      if (md === 'auto') {
        return '1'
      }
    }};
  }

  @media (min-width: ${breakpoints.lg}) {
    width: ${({ lg }) => {
      if (lg === 'auto') {
        return 'auto'
      } else {
        return ({ gutter }) => `calc(100% * ${lg} - ${gutter})`
      }
    }};

    flex: ${({ lg }) => {
      if (lg === 'auto') {
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

export const Col = ({ gutter, sm, md, lg, children }) => (
  <StyledCol gutter={gutter} sm={sm} md={md} lg={lg}>
    {children}
  </StyledCol>
)
