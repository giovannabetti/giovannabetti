const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const Usuario = require('./usuarios-modelo');
const { InvalidArgumentError } = require('../erros');

function verificaUsuario(usuario) {
  if (!usuario) {
    throw new InvalidArgumentError('Não existe usuário com esse e-mail');
  }
}

function verificaSenha(senha, senhahash) {

}

passport.use(
  new LocalStrategy({
    usernameField: 'email',
    passwordField: 'senha',
    session: false
  }, async (email, senha, done) => {
    try {
      const usuario = await Usuario.buscaPorEmail(email);
      verficaUsuario(usuario);

    } catch (erro) {
      done(erro);
    }
  })
)