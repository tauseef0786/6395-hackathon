require("dotenv").config()
const express = require("express")
const cors = require("cors")
const db = require("./config/db")
const dishRouter = require("./routes/dish.routes")
const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use("/api/dish", dishRouter)

// app.get("/health", (req, res) => {
//     res.send("Server is healthy")
// })

app.listen(PORT, () => {
    db()
    console.log(`Server starts on port ${PORT}`)
})