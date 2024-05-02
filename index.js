
import express from 'express'
import { dbConnection } from './databases/dbConnection.js'
import userRouter from './modules/user/user.routes.js'



const app = express()
const port = 3000
app.use(express.json())
app.get('/', (req, res) => res.send('Hello World!'))
app.use(userRouter)
dbConnection()
app.listen(port, () => console.log(`Example app listening on port ${port}!`))