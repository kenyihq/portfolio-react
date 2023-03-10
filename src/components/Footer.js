import React from "react";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer-logo">
        <img
          src="https://kenyihq.github.io/portfolio/img/logo.png"
          alt="Logo"
          width="155"
        />
      </div>
      <div class="social">
        <a class="button-icon" href="http://github.com/kenyihq" target="_blank">
          <img
            src="https://kenyihq.github.io/portfolio/icons/icon-github.svg"
            alt="github-icon"
          />
        </a>
        <a
          class="button-icon"
          href="https://linkedin.com/in/kenyihq"
          target="_blank"
        >
          <img
            src="https://kenyihq.github.io/portfolio/icons/icon-linkedin.svg"
            alt="linkedin-icon"
          />
        </a>
        <a
          class="button-icon"
          href="http://twitter.com/kenyihq"
          target="_blank"
        >
          <img
            src="https://kenyihq.github.io/portfolio/icons/icon-twitter_squared.svg"
            alt="twitter-icon"
          />
        </a>
        <a
          class="button-icon"
          href="http://instagram.com/kenyihq"
          target="_blank"
        >
          <img
            src="https://kenyihq.github.io/portfolio/icons/icon-instagram.svg"
            alt="instagram-icon"
          />
        </a>
        <a class="button-icon" href="mailto:kenyihq@gmail.com">
          <img
            src="https://kenyihq.github.io/portfolio/icons/icon-important_mail.svg"
            alt="mail-icon"
          />
        </a>
        <a class="button-icon" href="tel:+51910594824">
          <img
            src="https://kenyihq.github.io/portfolio/icons/icon-phone.svg"
            alt="phone-icon"
          />
        </a>
      </div>
      <div class="footer-copyright">
        <p>Hecho con el ♥ por Kenyi Hancco</p>
        <p>© Copyright 2023 - Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
