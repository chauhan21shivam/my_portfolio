import React from "react";
import {
  FaGithub,
//   FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
//   FaDev,
  FaInstagram,
  FaCode,
  FaDocker,
} from "react-icons/fa";
// import { SiHashnode } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://www.github.com/chauhan21shivam"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>

      {/* <a href='https://hashnode.com/@gregsithole' className='home__social-link' target='_blank' rel='noreferrer'>
                <SiHashnode />
            </a> */}

      <a
        href="https://app.docker.com/?index"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaDocker />
      </a>

      {/* <a href='https://dev.to/gregsithole' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaDev />
            </a> */}

      <a
        href="https://www.hackerrank.com/profile/ShivamChauhan21"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaCode />
      </a>

      <a
        href="https://www.linkedin.com/in/chauhan21shivam/"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedinIn />
      </a>

      {/* <a
        href="https://wwww.facebook.com/Greg.Sithole"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookF />
      </a> */}

      <a
        href="https://www.instagram.com/i__amshiv_am"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram />
      </a>

      <a
        href="https://www.twitter.com/Thakurji21"
        className="home__social-link"
        target="__blank"
        rel="noreferrer"
      >
        <FaTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
