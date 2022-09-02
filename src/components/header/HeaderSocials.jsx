import React from "react";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/christian-villegas-sanchez-66115097/?locale=en_US" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/chrisvill2312/" target="_blank" rel="noopener noreferrer"><BsGithub/></a>
    </div>
  );
};

export default HeaderSocials;