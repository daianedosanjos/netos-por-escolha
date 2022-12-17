import React from "react";
import { useState } from "react";
import swal from "sweetalert";
import { database } from "../service/firebase";
import { ref, push, set } from "firebase/database";
import FotoCadastro from "../img/voluntarios.jpg";
import IrParaTopo from "./IrParaTopo";
import {
  Form,
  FormularioContato,
  FormularioImg,
  FormContainer,
  ButtonCadastro,
} from "../styles/Cadastro";

function Formulario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");

  function handleInputValueNome(e) {
    setNome(e.target.value);
  }

  function handleInputValueEmail(e) {
    setEmail(e.target.value);
  }

  function handleInputValuetelefone(e) {
    setTelefone(e.target.value);
  }

  function handleInputValueMensagem(e) {
    setMensagem(e.target.value);
  }

  function handleCreateMessage(e) {
    e.preventDefault();

    const messageListRef = ref(database, "mensagens");
    const newMessageRef = push(messageListRef);
    set(newMessageRef, {
      nome: nome,
      email: email,
      telefone: telefone,
      texto: mensagem,
    }); 

    e.target.reset()    
  }
  return (
    <FormularioContato>
      <div>
        <h3>
          Que bom ter você aqui!
          
          Venha fazer parte da nossa equipe de voluntários e sinta, de perto, a satisfação de fazer o bem a que mais precisa.
        </h3>
      </div>
      <FormContainer>
        <FormularioImg>
          <img
            src={FotoCadastro}
            alt="foto dos voluntários do Netos por Escolha"
          />
        </FormularioImg>
        <Form>
          <form onSubmit={handleCreateMessage}>
             <div className="redesSociais">
          </div>
          <h4> Preencha o formulário e venha fazer parte do nosso time!
            
          </h4>
            <input placeholder="Nome" onChange={handleInputValueNome} />
            <input placeholder="Email" onChange={handleInputValueEmail} />
            <input placeholder="Telefone" onChange={handleInputValuetelefone} />
            <textarea
              placeholder="Digite sua mensagem"
              onChange={handleInputValueMensagem}
            />
            <ButtonCadastro type="submit">REALIZAR CADASTRO</ButtonCadastro>
            </form>
        </Form>
      </FormContainer>
      <IrParaTopo />
    </FormularioContato>
  );
}
export default Formulario;
