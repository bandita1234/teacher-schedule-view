import React from "react";
import "../css/footer.css";
import { HiPhone, HiOutlineMail, HiLocationMarker } from "react-icons/hi";

import Container from "react-bootstrap/Container";

import { FaWhatsapp, FaInstagram } from "react-icons/fa";
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

const Footer = () => {
 
  return (
    <div className="footer-container" id="footer">
      <footer class="footer-sec">
        <Container>
          <div class="f_main">
            <div class="logo row1 r">
             
              <center>
                <hr />
              </center>
              <div className="social-links">
                <a href="">
                  <FaInstagram className="insta icon" />
                </a>
                <a href="">
                  <FaWhatsapp className="tw icon" />
                </a>
                <a href="">
                  <HiLocationMarker className="tw icon" />
                </a>
              </div>
            </div>

            <div class="office row1">
              <div class="footer-header">
                <h3>Contact Us</h3>
              </div>
              <div class="office-des">
                <p>
                <h4>TripleMSchool</h4>
                The best place to brighten up your future. <br/>
                <HiPhone/> 9888299600 <br/>
                <HiOutlineMail/>  triplem_school@yahoo.in
                </p>
              </div>
            </div>

            <div class="link row1">
              <div class="footer-header">
                <h3>Links</h3>
              </div>

              <div class="link-des">
                <a href="#" class="footer-links">
                  Home
                </a>
                <a href="#" class="footer-links">
                  About
                </a>

             
                <a href="#" class="footer-links">
                  Products
                </a>
              </div>
            </div>

            <div class="row1">
            <div class="footer-header">
                <h3>Join The Club</h3>
              </div>
              <p style={{paddingBottom:"30px"}}>Join our email list and get access to specials deals exclusive to our subscribers.</p>
              <div className="join_club">
                <input type="text" name="" id="" />
              </div>
            </div>

            <div class="logo row1 m">
            
              <hr className="lhr" />
              <div className="social-links">
                <a href="" target="_blank">
                  <FaInstagram className="insta icon" />
                </a>
                <a href="" target="_blank">
                  <FaWhatsapp className="tw icon" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
