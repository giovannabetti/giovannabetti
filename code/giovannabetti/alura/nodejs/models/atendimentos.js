const moment = require('moment');
const conexao = require('../infraestrutura/conexao');

class Atendimento {
  adiciona(atendimento, res) {
    const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS');
    const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss');
    
    const dataEhValida = moment(data).isSameOrAfter(dataCriacao);
    const clienteEhValido = atendimento.cliente.length >= 5;

    const validacoes = [
      {
        nome: 'data',
        valido: dataEhValida,
        mensagem: 'Data deve ser maior ou igual à data atual',
      },
      {
        nome: 'cliente',
        valido: clienteEhValido,
        mensagem: 'Cliente deve ter pelo menos cinco caracteres'
      }
    ]

    const erros = validacoes.filter(campo => !campo.valido)
    const existemErros = erros.length
    
    if(existemErros) {
      res.status(400).json(erros)
    } else {
      const atendimentoDatado = {...atendimento, dataCriacao, data};
    
      const sql = 'INSERT INTO Atendimentos SET ?';
  
      conexao.query(sql, atendimentoDatado, (erro, resultados) => {
        if(erro) {
          res.status(400).json(erro)
        } else {
          res.status(201).json(resultados)
        }
      })
    }
  };

  lista(res) {
    const sql = 'SELECT * FROM Atendimentos';

    conexao.query(sql, (erro, resultados) => {
      if(err0) {
        res.status(400).json(erro)
      } else {
        res.status(200).json(resultados)
      }
    })
  };

  buscaPorId(id, res) {
    const sql = `SELECT * FROM Atendimentos WHERE id=${id}`;

    conexao.query(sql, (erro, resultados) => {
      const atendimento = resultado[0];

      if(erro) {
        res.status(400).json(erro)
      } else {
        res.status(200).json(atendimento)
      }
    })
  };

  altera(id, valores, res) {
    if(valores.data) {
      valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
    }
    const sql = 'UPDATE Atendimentos SET ? WHERE id=?';

    conexao.addListener(sql, [valores, id], (erro, resultados) => {
      if(erro) {
        res.status(400).json(erro)
      } else {
        res.status(200).json(resultados)
      }
    })
  }
};

module.exports = new Atendimento;
