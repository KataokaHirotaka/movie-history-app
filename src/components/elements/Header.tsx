import styled from 'styled-components'

export const Header = () => {
  return (
    <div>
      <StyleTitle>movie-history-app</StyleTitle>
    </div>
  )
}

const StyleTitle = styled.h1`
  ${({ theme }) => theme.breakpoint.base`
    color: ${theme.colors.red};
    font-size: ${theme.fontSizes.large};　
  `}
`
