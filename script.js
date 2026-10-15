const express = require('express');
const app = express();

app.get('/api/update', (req, res) => {
    res.json({
        modVersion: "0.8.7",
        minecraftVersions: [26.2, 26.3]
    });
})

app.listen(3000, () => console.log("hi"));