import React from "react";
import './Footer.css'
export const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="box">
            <ul className="flex">
              <li>Terms of Use</li>
              <li>Privacy-Policy</li>
              <li>Blog</li>
              <li>FAQ</li>
              <li>Watch List</li>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
                sed temporibus consequatur molestias! 
              </p>
            </ul>
          </div>
          <div className="box">
            <h3>Follow Us</h3>
            <i className="fa fa-facebook"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-youtube"></i>
            <i className="fa fa-instagram"></i>
          </div>
        </div>
      </footer>
    </>
  );
};
