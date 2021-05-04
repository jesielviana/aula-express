const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Lista de Estudantes!')
})

router.post('/', async (req, res) => {
  const { nome, matricula, email } = req.body
  console.log(nome, matricula, email)
})

module.exports = router
