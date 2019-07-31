const router = require('express').Router();

const cadastrar_aluno  =  require('./aluno-controller');

router.post('/api/aluno', cadastrar_aluno);