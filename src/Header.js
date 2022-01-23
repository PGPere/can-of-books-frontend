import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import LogoutButton from './LogoutButton';
import './Header.css';

class Header extends React.Component{
  render(){
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>My Favorite Books</Navbar.Brand>
        {this.props.user.email &&
          <>
            <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
            <NavItem><Link to="/profile" className="nav-link">Profile</Link></NavItem>
            <LogoutButton onLogout={this.props.onLogout} />
          </>
        }
        {!this.props.user && (
          <NavItem><Link to="/login" className="nav-link">Log In</Link></NavItem>
        )}
    </Navbar>
    )
  }
}

export default Header;
