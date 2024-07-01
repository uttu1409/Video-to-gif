const express = require('express')

const app = express()

app.use(function (req, res, next) {
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
    res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
    next();
});

const PORT = process.env.PORT || 5000

app.get('/',(req,res) => {
    res.sendFile(__dirname + "/index.html")
})

app.listen(PORT,() => {
    console.log("App is listening on port " + PORT)
})