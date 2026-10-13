import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  NavbarContainer,
  LogoLink,
  WebsiteLogo,
  NavItemsList,
  NavItem,
  NavLink,
  LogoutButton,
} from './styledComponents'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <NavbarContainer>
      <LogoLink to="/">
        <WebsiteLogo
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
        />
      </LogoLink>
      <NavItemsList>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/jobs">Jobs</NavLink>
        </NavItem>
        <NavItem>
          <LogoutButton type="button" onClick={onClickLogout}>
            Logout
          </LogoutButton>
        </NavItem>
      </NavItemsList>
    </NavbarContainer>
  )
}

export default withRouter(Header)
