const express = require('express')
const app = express();
require("dotenv").config();
app.use(express.json())

const port = Number(process.env.PORT)

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
})
