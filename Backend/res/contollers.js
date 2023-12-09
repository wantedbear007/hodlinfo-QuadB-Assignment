const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const resObj = {
        "status": "Active",
        "author": "@wantedbear007",
        "date": new Date.now() 
    }
    res.send(JSON.stringify(resObj))
})

app.listen(port, () => {
    console.log(`server https:localhost:${port}`)
})