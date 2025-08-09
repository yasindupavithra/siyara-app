import React from 'react';
import {
  Header,
  Sale,
  LeftText,
  RightText,
  Dummy,
  DummyLeft,
  DummyRight,
  TopNav,
  Nav,
  NavLogo,
  SearchBar,
  WholeNavbar
} from './NavbarCSS';
import Images from '../../Images/logo.png';
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { Link } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';
import "../../style/slider.css"
import "../Login/popup.css"
import { MainLogin } from '../Login/Mainlogin';

const Navbar = () => {
  var user = JSON.parse(localStorage.getItem('userData'));
  const [popup, popupTrig] = React.useState(false);

  return (
    <>
      <Header>
        <Sale>
          <LeftText>Premium Wood Products | Quality Craftsmanship | Contact Us</LeftText>
          <RightText>
            Custom Wood Solutions | Professional Installation <a href="/contact">Contact Us</a>
          </RightText>
        </Sale>
      </Header>

      <WholeNavbar>
        <Dummy>
          <DummyLeft>
            <span style={{ fontWeight: 'bold', color: '#111' }}>Siyara Soliwood (PVT) Ltd</span>
            <span style={{ fontWeight: 'bold', color: '#111' }}>Professional Wood Solutions</span>
            <span style={{ fontWeight: 'bold', color: '#111' }}>Custom Orders</span>
            <span style={{ fontWeight: 'bold', color: '#111' }}>Find Our Showroom</span>
          </DummyLeft>

          <DummyRight>
            <p>Enter Pincode</p>
            <span>Find Our Location</span>
          </DummyRight>
        </Dummy>

        <Nav>
          <TopNav>
            <div>
              <NavLogo to="/">
                <img
                  src="https://i.postimg.cc/fL02Jnjf/Screenshot-2025-08-06-192822.png"
                  alt="logo"
                />
              </NavLogo>
            </div>

            <div>
              <SearchBar placeholder="Search for premium wood products" />
            </div>

            <div className="iconDiv">
              <div className="iconOne">
                <img
                  src="https://ii1.pepperfry.com/images/svg/web21-header-help-icon.svg"
                  alt="help"
                  className="help"
                />
              </div>

              <div className="iconOne">
                <button className="log" onClick={() => popupTrig(true)}>
                  <PermIdentityOutlinedIcon className="icon" />
                </button>
                <h6 style={{ margin: '0%' }}>Login</h6>
              </div>

              <div className="iconOne">
                <FavoriteBorderOutlinedIcon className="icon" />
              </div>
            </div>
          </TopNav>

          <div className="popup-div">
            <MainLogin trigger={popup} setTrigger={popupTrig} />
          </div>

          <DropdownMenu />
        </Nav>
      </WholeNavbar>
    </>
  );
};

export default Navbar;
