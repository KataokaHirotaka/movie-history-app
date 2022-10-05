import styled from 'styled-components'
import { useIsActive } from '~/src/hooks/useIsActive'

export const Header = () => {
  const [isActive, handleClick] = useIsActive()

  return (
    <StyleHeader>
      <StyleTitle>タイトル</StyleTitle>
      <Hamburger className={isActive ? 'active' : ''} onClick={handleClick}>
        <span></span>
      </Hamburger>
      <GlobalNav className={isActive ? 'active' : ''}>
        <NavList>
          <li><a href="">映画</a></li>
          <li><a href="">映画</a></li>
          <li><a href="">映画</a></li>
          <li><a href="">映画</a></li>
        </NavList>
      </GlobalNav>
    </StyleHeader>
  )
}

/**
 * style定義
 */
const StyleHeader = styled.header`
  ${({ theme }) => theme.breakpoint.base`
    display: flex;
    align-items: center;
    justify-content: space-between;
		position: fixed;
		top: 0;
		left: 0;
		z-index: ${theme.zindex.header};
		width: 100vw;
    padding: 5px 10px;
    background-color: ${theme.colors.background};
  `}
`
const StyleTitle = styled.h1`
  ${({ theme }) => theme.breakpoint.base`
    color: ${theme.colors.red};
    font-size: ${theme.fontSizes.large};
  `}
`
const Hamburger = styled.button`
  ${({ theme }) => theme.breakpoint.base`
    position: relative;
    top: 0;
    left: 0;
		z-index: ${theme.zindex.floating};
    width: 40px;
    height: 40px;
    border: none;
    background: transparent;
		cursor: pointer;

    > span {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 24px;
      height: 1.5px;
      background-color: ${theme.colors.white};
      transform: translate(-50%, -50%);
      transition: .2s ease-in-out;
      &::before,
      &::after {
        display: block;
        position: absolute;
        left: 0;
        width: 100%;
        height: 1.5px;
        background-color: ${theme.colors.white};
        transition: .3s ease-in-out;
        content: "";
      }
      &::before {
        top: -8px;
      }
      &::after {
        top: 8px
      }
    }

    &.active {
      span {
        background-color: transparent;
        &::before {
          top: 0;
          transform: rotate(45deg);
        }
        &::after {
          top: 0;
          transform: rotate(-45deg);
        }
      }
    }
  `}

  ${({ theme }) => theme.breakpoint.md`
    display: none;
  `}
`

const GlobalNav = styled.nav`
  ${({ theme }) => theme.breakpoint.base`
		visibility: hidden;
		position: fixed;
		top: 50px;
		left: 0;
		z-index: ${theme.zindex.front};
		width: 100%;
		height: 100vh;
		background: ${theme.colors.background};
		pointer-events: none;
		transform: translateX(100%);
		transition: .3s ease-in-out;

		&.active {
			visibility: visible;
			pointer-events: auto;
			transform: translateX(0);
		}
	`}

  ${({ theme }) => theme.breakpoint.md`
    
  `}
`
const NavList = styled.ul`
    ${({ theme }) => theme.breakpoint.base`
      padding-top: 80px;

      li {
        text-align: center;
        a {
          display: inline-block;
          width: 90%;
          padding: 10px 0;
          color: ${theme.colors.gray};
          transition: .3s ease-in-out;

          &:hover {
            color: ${theme.colors.white};
          }
        }
      }
    `}
`