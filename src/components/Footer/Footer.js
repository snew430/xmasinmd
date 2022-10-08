import React from 'react';
import './Footer.css';
import { MdEmail } from 'react-icons/md';
import { AiFillFacebook } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer">
      <MdEmail className="icon" />
      <AiFillFacebook className="icon" />
    </div>
  );
};

export default Footer;
