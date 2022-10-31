import React from 'react';
import './Footer.css';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <div className="footer">
      <a href="mailto:johnpatti@christmasinmaryland.com,joeevelius@christmasinmaryland.com">
        <MdEmail className="icon" />
      </a>
    </div>
  );
};

export default Footer;
