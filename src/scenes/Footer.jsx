import SocialMediaIcons from "../components/SocialMediaIcons";
import React, { Component }  from 'react';

const Footer = () => {
  return (
    <footer className="h-60 bg-red pt-5">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair text-md text-yellow">
            Maggie Wu © 2022
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
