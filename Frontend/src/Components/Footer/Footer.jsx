import React from 'react';
import {
  FooterBox,
  FooterFirstHalf,
  UsefulLinks,
  Partners,
  NeedHelp,
  DownloadApp,
  FooterSecondHalf,
  PopularCategories,
  Cities,
  FooterThirdHalf,
  FooterLeft,
  FooterRight,
  FooterFourthHalf
} from './FooterCSS';
import { Link } from 'react-router-dom';
import Apple from '../../Images/FooterImages/apple.png';
import GooglePlay from '../../Images/FooterImages/googleplay.png';
import Visa from '../../Images/FooterImages/footer-visacard-logo.png';
import MasterCard from '../../Images/FooterImages/footer-mastercard-logo.png';
import MaestroCard from '../../Images/FooterImages/footer-maestrocard-logo.png';
import AmericanExpress from '../../Images/FooterImages/footer-amexcard-logo.png';
import RuPay from '../../Images/FooterImages/footer-rupaycard-logo.png';
import DinnersCard from '../../Images/FooterImages/footer-dinnerscard-logo.png';
import Wallet from '../../Images/FooterImages/footer-wallet-logo.png';
import InternetBanking from '../../Images/FooterImages/footer-internet-banking-logo.png';
import Facebook from '../../Images/FooterImages/footer-facebook-logo.png';
import Twitter from '../../Images/FooterImages/footer-twitter-logo.png';
import Youtube from '../../Images/FooterImages/footer-youtube-logo.png';
import Instagram from '../../Images/FooterImages/footer-instagram-logo.webp';
import Linkedin from '../../Images/FooterImages/footer-linkedin-logo.png';
import Pinterest from '../../Images/FooterImages/footer-pinterest-logo.png';

const Footer = () => {
  return (
    <FooterBox>
      <FooterFirstHalf>
        <UsefulLinks>
          <ul>
            <li className="footer--headings">Useful Links</li>
            <li>About Us</li>
            <li>Our Blog</li>
            <li>Careers</li>
            <li>Corporate Governance</li>
            <li>Siyara Soliwood In the News</li>
            <li>Find Our Showroom</li>
            <li>Gift Cards</li>
            <li>Brands</li>
            <li>Customer Reviews</li>
          </ul>
        </UsefulLinks>
        <Partners>
          <ul>
            <li className="footer--headings">Partners</li>
            <li>Work With Us</li>
            <li>Become a Partner</li>
            <li>Design For Us</li>
            <li>Siyara Soliwood Policies</li>
            <li>Login to Your Dashboard</li>
            <li>Important : GST and You</li>
            <li>Corporate Enquiries</li>
          </ul>
        </Partners>
        <NeedHelp>
          <ul>
            <li className="footer--headings">Need Help?</li>
            <li>
              <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                Contact Us
              </Link>
            </li>
            <li>Returns & Refund</li>
            <li>Track Your Order</li>
            <li>FAQs</li>
            <li>Buy on Phone</li>
          </ul>
        </NeedHelp>
        <DownloadApp>
          <h2>Download App</h2>
          <img src={Apple} alt="AppStore" />
          <br />
          <img src={GooglePlay} alt="GooglePlay" />
        </DownloadApp>
      </FooterFirstHalf>

      <FooterSecondHalf>
        <PopularCategories>
          <h1 className="titles">Popular Categories</h1>
          <p>
            Doors & Door Frames, Window Frame & Sashes, Hand Rail, Pantry Cupboards, Ceiling & Roof, Wooden
            Flooring, Custom Wood Products, Interior Doors, Exterior Doors, Door Frames, Window Frames,
            Staircase Hand Rails, Kitchen Cupboards, Wooden Ceilings, Premium Flooring
          </p>
        </PopularCategories>
        <Cities>
          <h1 className="titles">Areas we serve</h1>
          <p>
            Colombo, Kandy, Galle, Jaffna, Anuradhapura, Kurunegala, Matara, Ratnapura, Badulla, Polonnaruwa,
            Trincomalee, Batticaloa, Ampara, Monaragala, Hambantota, Puttalam, Vavuniya, Mullaitivu, Kilinochchi
            and many more
          </p>
        </Cities>
      </FooterSecondHalf>

      <hr />

      <FooterThirdHalf>
        <FooterLeft>
          <h1 className="titles">We accept</h1>
          <div>
            <img src={Visa} alt="VisaLogo" />
            <img src={MasterCard} alt="MasterCardLogo" />
            <img src={MaestroCard} alt="MaestroCardLogo" />
            <img src={AmericanExpress} alt="AmericanExpressLogo" />
            <img src={RuPay} alt="RupayLogo" />
            <img src={DinnersCard} alt="DinnersCardLogo" />
            <img src={Wallet} alt="WalletLogo" />
            <img src={InternetBanking} alt="InternetBankingLogo" />
          </div>
        </FooterLeft>
        <FooterRight>
          <h1 className="titles">Follow us on social media</h1>
          <div>
            <img src={Facebook} alt="FacebookLogo" />
            <img src={Twitter} alt="TwitterLogo" />
            <img src={Youtube} alt="YoutubeLogo" />
            <img src={Instagram} alt="InstagramLogo" />
            <img src={Linkedin} alt="LinkedinLogo" />
            <img src={Pinterest} alt="PinterestLogo" />
          </div>
        </FooterRight>
      </FooterThirdHalf>

      <hr />

      <FooterFourthHalf>
        <div className="leftside">
          <h3>Buy In Bulk</h3>
          <h3>Write A Testimonial</h3>
        </div>
        <div className="rightside">
          <h3>Whitehat</h3>
          <h3>Site Map</h3>
          <h3>Terms Of Use</h3>
          <h3>Privacy Policy</h3>
          <h3>Your Data & Security</h3>
          <h3>Grievance Redressal</h3>
        </div>
      </FooterFourthHalf>
    </FooterBox>
  );
};

export default Footer;
