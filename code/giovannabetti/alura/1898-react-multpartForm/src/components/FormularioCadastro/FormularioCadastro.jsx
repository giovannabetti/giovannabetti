import React, { useState } from "react";
import DadosPessoais from "./FormularioCadastro/DadosPessoais";
import DadosUsuario from "./FormularioCadastro/DadosUsuario";

function FormularioCadastro({aoEnviar, validarCPF}) {

  return (
    <>
      <DadosPessoais aoEviar={aoEviar} validarCPF={validarCPF} />
      <DadosUsuario />
      {/* <DadosEntre */}
    </>
  );
}

export default FormularioCadastro;
