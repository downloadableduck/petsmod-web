import {createRoot} from "react-dom/client.d.ts";
import {StrictMode} from "react";
import Download from "Download.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Download />
    </StrictMode>,
)