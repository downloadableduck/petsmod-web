import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import petsmodLogo from './assets/petsmod.png'
import './Navbar.css'

function Navbar() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div id="navbar">
                <a href = "/" id = "home">
                    <img src={petsmodLogo} alt="Home" width = "64" height = "64"></img>
                </a>
                <a href = "/download">Download</a>
                <a href = "/develop">Develop</a>
                <a href = "/discuss">Discuss</a>
                <a href = "/about">About</a>
                <a href = "/contact">Contact</a>
            </div>
        </>
    )
}

export default Navbar
