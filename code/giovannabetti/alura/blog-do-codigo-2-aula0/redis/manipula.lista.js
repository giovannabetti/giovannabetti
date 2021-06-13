const { promisify } = require('util');

module.exports = lista => {
  const setAsync = promisify(lista.set).bind(lista);
  const existsAsync = promisify(lista.exists).bind(lista);

  return {
    async adiciona(chave, valor, dataExpiracao) {
      await setAsync(chave, valor);
      lista.expireAt(chave, dataExpiracao);
    },

    async contemChave(chave) {

    }
  }
};
