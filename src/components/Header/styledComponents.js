import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavbarContainer = styled.nav`
  background-color: #202020;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
`

export const LogoLink = styled(Link)`
  text-decoration: none;
`

export const WebsiteLogo = styled.img`
  width: 110px;
`

export const NavItemsList = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  display: flex;
  align-items: center;
  gap: 30px;
`

export const NavItem = styled.li`
  list-style-type: none;
`

export const NavLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  &:hover {
    color: #6366f1;
  }
`

export const LogoutButton = styled.button`
  background-color: #6366f1;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 8px 20px;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  outline: none;
`
