const express = require('express')
const router = express.Router()

const listaCursos = []

router.get('/', (req, res) => {
  res.json(listaCursos)
})

router.post('/', (req, res) => {
  const dadosCurso = req.body
  console.log(dadosCurso)
  listaCursos.push(dadosCurso)
  res.send('Curso adicionado com sucesso!')
})

module.exports = router
