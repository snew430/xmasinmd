import React from 'react';
import './Footer.css';
import { BsTwitter } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { AiFillFacebook } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer">
      <BsTwitter className="icon" />
      <MdEmail className="icon" />
      <AiFillFacebook className="icon" />
    </div>
  );
};

export default Footer;
