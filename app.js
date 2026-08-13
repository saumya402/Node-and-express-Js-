const express = require("express")

const app = express()
app.get("/user", (req, res) => {
    res.send("Test api is called")
})

app.get("/test", (req, res) => {
    res.json({ id: 1, name: "Saumya" })
})
const PORT = 3000

app.listen(PORT, () => {
    console.log(`Port running on ${PORT}`)
})