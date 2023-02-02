import React from 'react'

const Contact = () => {
  return (
    <form action="https://formspree.io/f/xvodanve" method="POST" class="form" id="contact">
            <h2 class="title">HABLEMOS</h2>
            <p>
                Si está interesado en trabajar conmigo en su próximo proyecto, no dude en ponerse en contacto conmigo
            </p>
            <a href="https://www.linkedin.com/in/kenyihq/" target="blank_" class="button-linkedin">Contáctame por Linkedin</a>
            <p>O dejame un mensaje</p>
            <label for="form-name">
                Nombre completo
                <input required name="name" id="form-name" type="text" placeholder="Tu nombre"/>
            </label>
            <label for="form-email">
                Correo electrónico
                <input required name="email" id="form-email" type="email" placeholder="Tu correo electrónico"/>
            </label>
            <label for="form-message">
                Mensaje
                <textarea required name="message" id="form-message" cols="30" rows="7" placeholder="Tu mensaje"></textarea>
            </label>
            <button class="button" type="submit">Enviar mensaje</button>
        </form>
  )
}

export default Contact
