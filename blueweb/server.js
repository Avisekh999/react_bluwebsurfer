
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import cors  from "cors"
import colors from 'colors'

import userRoutes from './routes/userRoutes.js'
import contactRoutes from './routes/contactRoutes.js'
import {notFound, errorHandler} from './middleware/errorMiddlewares.js'



dotenv.config()

connectDB()

const app = express();

app.use(express.json())

app.use(cors())

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.use('/api/users', userRoutes)
app.use('/api/contact',contactRoutes)





app.use(notFound)

app.use(errorHandler)


const PORT = process.env.PORT || 5000
 

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode in  port ${PORT}`.yellow.bold))
