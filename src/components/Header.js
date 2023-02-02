import React from 'react'

const header = () => {
    return (
        <header class="header">
            <a href="#index">
                <img src="https://kenyihq.github.io/portfolio/img/logo.png" alt="Logo" width="155"/>
            </a>
            <nav class="menu" aria-label="main-navigation">
                <ul>
                    <li><a href="#projects">Proyectos</a></li>
                    <li><a href="#contact">Hablemos</a></li>
                    <li><a href="https://401u.blogspot.com/" target="_blank">Blog</a></li>
                </ul>
            </nav>
            <button class="button"><a href="#certificates">Certificados</a></button>
        </header>
    )
}

export default header
