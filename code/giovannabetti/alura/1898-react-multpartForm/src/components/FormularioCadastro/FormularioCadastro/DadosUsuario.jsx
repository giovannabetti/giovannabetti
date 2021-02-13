import React from 'react';
import { TextField } from '@material-ui/core';

function DadosUsuario(){
  return(
    <form>
      <TextField id="email" label="email" type="email"/>
      <TextField id="senha" label="senha" type="password"/>
      <Button type="submit">Cadastrar</Button>
    </form>
  );
}

export default DadosUsuario;