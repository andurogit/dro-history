import styled from '@emotion/styled'
import { Link } from 'react-router'
import FootprintIcon from './icons/footprint'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  return (
    <Link to="/">
      <LogoBox>
        <FootprintIcon />
      </LogoBox>
    </Link>
  )
}

export default Logo
