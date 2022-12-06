import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import router from './src/Routes/ImageRoutes.js'

const app = express()
dotenv.config()

app.use(cors())
app.use('/images', router)

app.listen(process.env.PORT, () => {
    console.log(`Server running at port : ${process.env.PORT}`)
})