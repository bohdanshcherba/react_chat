import express from 'express'
import bodyParser from 'body-parser'
import router from "./routes/index.js";
import cors from 'cors'


const PORT = 3001
const app = express()

app.use(express.json())

app.use(cors());

app.use(router)

app.listen(PORT,()=>{
    console.log(`App listen on ${PORT}`)
})
