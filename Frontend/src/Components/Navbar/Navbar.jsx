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
  WholeNavbar
} from './NavbarCSS';
import DropdownMenu from './DropdownMenu';
import "../../style/slider.css"
import "../Login/popup.css"

const Navbar = () => {
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
                  src="https://i.postimg.cc/xT0Fsf95/Chat-GPT-Image-Aug-16-2025-08-21-00-PM.png"
                  alt="logo"
                />
              </NavLogo>
            </div>
            {/* 🔴 Search bar + icons remove කරලා */}
          </TopNav>

          <DropdownMenu />
        </Nav>
      </WholeNavbar>
    </>
  );
};

export default Navbar;
