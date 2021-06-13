const nodemailer = require('nodemailer');

class Email {
  async enviaEmail() {
    const contraTeste = await nodemailer.createTestAccount();
    const transportador = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      auth: contraTeste,
    });
    const info = await transportador.sendMail(this);
    console.log( 'URL' + nodemailer.getTestMessageUrl(info));
  }
}

class EmailVerificacao extends Email {
  constructor(usuario, endereco) {
    super();
    this.from = '"Blog do Código" <noreply@blogdocodigo.com.br>',
    this.to = usuario.email,
    this.subject = 'Verificação de email',
    this.text = `Olá! Verifique seu e-mail aqui: ${endereco}`,
    this.html = `<h1>Olá</h1> <p>Verifique seu e-mail aqui: <a href=${endereco}>${endereco}</a></p>`
  }
}


module.exports = { EmailVerificacao };
