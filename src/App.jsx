import {useEffect, useState} from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from "./Navbar.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [modrinthDownloads, setModrinthDownloads] = useState(0);
  const [curseforgeDownloads, setCurseforgeDownloads] = useState(0);

  useEffect(() => {
      async function getModrinthDownloads() {
          const response = await fetch("https://api.modrinth.com/v2/project/pets-mod");
          const data = await response.json();
          setModrinthDownloads(data.downloads);
          return data.downloads;
      }
      getModrinthDownloads()
  })

    useEffect(() => {
        async function getCurseforgeDownloads() {

        }
    })

  return (
    <>
        <Navbar />
        <div id="Text">
          <h1>The Pets Project</h1>
            <p>Brings custom, client-sided pets into Minecraft! Supports every version through Minecraft: Beta.</p>
        </div>
            <div id = "boxcontainer">
                <div className="box" id = "discuss">View source code, make suggestions, contribute to the project, and chat with other community members
                    <a href = "/discuss" className="internalbox">Discuss</a>
                </div>
                <div className="box" id = "download">Download Pets Mod for your appropriate Minecraft version
                        <a href = "/download" className="internalbox">
                            Download</a>
                </div>
                <div className="box" id = "develop">Develop your own Pets Mod add-on and add your own pets to the game
                    <a href = " /develop" className="internalbox">Develop</a>
                </div>
            </div>
        <h1 id = "learn-more">Want to learn more?</h1>
        <p>Just keep scrolling and we'll tell you all about the project.</p>
        <p id = "learning-more">The Pets Project is a series of open-source, community-driven mods for Minecraft designed to bring custom pets into your game. It was made out of the fact that pets are an important part of Minecraft, and multiplayer servers heavily lack the fun of having a pet by your side. Additionally; the project has opened up many opportunities for adding completely custom mobs into the game, like ducks, penguins, and raccoons.</p>
    </>
  )
}

export default App
