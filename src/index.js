import express from 'express'
import dotenv from 'dotenv'

const app = express()
dotenv.config({path: './.env'})
const port = process.env.PORT || 3000

app.use(express.json())

const todos = []

app.get('/',(request, response)=>{




    response.status(200).send(todos)

})



app.listen(port, ()=> console.log('Server running on port ',port)
)