require('dotenv').config()
const express = require('express')

// import express from "express"

const app = express()
const port = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('rajat.barayya')
})

app.get('/login', (req, res) => {
    res.send('<h1>Login at ChaiAurCode.</h1>')
})

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })