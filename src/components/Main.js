import React from 'react'

const Main = () => {
  return (
    <section aria-label="main" class="hero" id="main">
            <div class="hero-image">
                <img src="./img/kenyihq2x.png" alt="Profile picture" width="338" height="330">
            </div>
            <div class="hero-description">
                <h1>
                    <span>¡Hola!</span>
                    <span>Soy Kenyi Hancco</span>
                </h1>
                <p>
                    Jr Developer y apasionado de la tecnología.
                    Siempre buscando cosas nuevas por aprender.
                    Soy el creador del blog <a class="link-blog" href="https://401u.blogspot.com/" target="_blank">Error 401.</a>
                </p>
                <div class="social">
                    <a class="button-icon" href="http://github.com/kenyihq" target="_blank"><img src="./icons/icon-github.svg" alt="github-icon"></a>
                    <a class="button-icon" href="https://linkedin.com/in/kenyihq" target="_blank"><img src="./icons/icon-linkedin.svg" alt="linkedin-icon"></a>
                    <a class="button-icon" href="http://twitter.com/kenyihq" target="_blank"><img src="./icons/icon-twitter_squared.svg" alt="twitter-icon"></a>
                    <a class="button-icon" href="http://instagram.com/kenyihq" target="_blank"><img src="./icons/icon-instagram.svg" alt="instagram-icon"></a>
                    <a class="button-icon" href="mailto:kenyihq@gmail.com"><img src="./icons/icon-important_mail.svg" alt="mail-icon"></a>
                    <a class="button-icon" href="tel:+51910594824"><img src="./icons/icon-phone.svg" alt="phone-icon"></a>
                </div>
                <a href="https://drive.google.com/file/d/1IiBuqSNPOEqFuTPvKtruReKUrozezMX8/view?usp=sharing" target="_blank" class="button">Descargar curriculum</a>
            </div>
        </section>
  )
}

export default Main
