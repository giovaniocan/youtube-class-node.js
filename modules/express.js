const express = require('express')

const port = 8080


const app = express()

app.get('/home', (req, res) => {
    res.status(200).send('Hello World')
})

app.get('/users', (req, res) => {
    const users = [
        {
          name: 'Jhon Doe',
          email: 'jhon@doe.com'  
        },
        {
            name: 'Jane Doe',
            email: 'jane@doe.com'  
          },
    ]

    res.status(200).json(users)
})

app.listen(port, () =>  console.log(`rodando com express na porta 8080`))