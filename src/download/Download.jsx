import {useEffect, useState} from 'react'
import './Download.css'
import Navbar from "../Navbar.jsx";

function Download() {
    const [versions, setVersions] = useState([]);
    const [selectedVersion, setSelectedVersion] = useState(0);
    const [modloaders, setModloaders] = useState([]);
    const [selectedModloader, setSelectedModloader] = useState(0);

    useEffect(() => {

        async function getVersions() {
            const response = await fetch("https://api.modrinth.com/v2/project/pets-mod");
            const data = await response.json();
            const versionsWithoutSnapshots = data.game_versions.filter(version => !version.toLowerCase().includes("snapshot") && !version.toLowerCase().includes("pre") && !version.toLowerCase().includes("rc"));
            versionsWithoutSnapshots.sort((a, b) => {
                const aIsBad = /^(a|b|c|inf)/i.test(a);
                const bIsBad = /^(a|b|c|inf)/i.test(b);
                if (aIsBad && !bIsBad) return 1;
                if (!aIsBad && bIsBad) return -1;
                return b.localeCompare(a, undefined, { numeric: true, sensitivity: 'base' });
            });
            setVersions(versionsWithoutSnapshots);
            return versionsWithoutSnapshots;
        }

        getVersions();
    }, []);

    useEffect(() => {

        async function getModloaders() {
            const response = await fetch("https://api.modrinth.com/v2/project/pets-mod");
            const data = await response.json();
            setModloaders((data.loaders));
            return (data.loaders);
        }

        getModloaders();
    }, []);

    const download = async () => {
        const params = new URLSearchParams({
                game_versions: JSON.stringify([selectedVersion]),
                loaders: JSON.stringify([selectedModloader]),
            })
        const response = await fetch(`https://api.modrinth.com/v2/project/pets-mod/version?${params.toString()}`);
        const versions = await response.json();
        if (versions.length > 0) {
            window.location.href = versions[0].files[0].url;
        } else {
            alert("No Pets Mod build found for Minecraft version " + selectedVersion + " and modloader " + selectedModloader + "!");
        }
    }

    return (
        <>
            <Navbar />
            <h1>Thank you for downloading Pets Mod</h1>
            <p>Choose a Minecraft version and modloader below.</p>
            <select id = "version-dropdown" value = {selectedVersion} className="dropdowns" onChange={(e) => setSelectedVersion(e.target.value)}>
                {versions.map(version => (
                    <option name ={version} key={version} value={version}>{version}</option>
            ))}
            </select>
            <select id = "modloader-dropdown" value = {selectedModloader} className="dropdowns" onChange={(e) => setSelectedModloader(e.target.value)}>
                {modloaders.map(loader => (
                    <option key={loader} value={loader}>{loader}</option>
                ))}
            </select>
                <button onClick = {download} id = "download-button">Download</button>
            <h1 id = "further">Want to take it further?</h1>
            </>
    )
}

export default Download;