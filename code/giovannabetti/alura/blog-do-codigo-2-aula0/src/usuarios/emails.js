const nodemailer = require('nodemailer');

async function enviaEmail(usuario) {
  const contraTeste = await nodemailer.createTestAccount();
  const transportador = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    auth: contraTeste,
  });
  const info = await transportador.sendMail({
    from: '"Blog do Código" <noreply@blogdocodigo.com.br>',
    to: usuario.email,
    subject: 'Teste de email',
    text: 'Olá! Este é um email de teste!',
    html: '<h1>Olá</h1> <p>Este é um email de teste!</p>'
  });
  console.log( 'URL' + nodemailer.getTestMessageUrl(info));
}

module.exports = { enviaEmail };
