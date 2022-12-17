import React from "react";
import { useState } from "react";
import { database } from "../service/firebase";
import { ref, push, set } from "firebase/database";
import Contato from "../img/fotoContato.jpg";
import IrParaTopo from "./IrParaTopo";
import {
  Form,
  FormularioContato,
  FormularioImg,
  FormContainer,
  Button
} from "../styles/Contato";

function Formulario() {
  const [nome, setNome] = useState("");
  const [assunto, setAssunto] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");

  function handleInputValueNome(e) {
    setNome(e.target.value);
  }

  function handleInputValueAssunto(e) {
    setAssunto(e.target.value);
  }

  function handleInputValueEmail(e) {
    setEmail(e.target.value);
  }

  function handleInputValueTelefone(e) {
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
      assunto: assunto,
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
          Para mais informações sobre doações, voluntariado, projetos,
          parcerias, patrocínios e outros assuntos, entre em contato conosco
          atravé do formulario abaixo ou atravé do nosso email.
        </h3>
      </div>
      <FormContainer>
        <FormularioImg>
          <img src={Contato} alt="foto dos voluntários do Netos por Escolha" />
        </FormularioImg>
        <Form>
          <form onSubmit={handleCreateMessage}>
            <input placeholder="Nome" onChange={handleInputValueNome} />
            <input placeholder="Assunto" onChange={handleInputValueAssunto} />
            <input placeholder="Email" onChange={handleInputValueEmail} />
            <input placeholder="Telefone" onChange={handleInputValueTelefone} />
            <textarea
              placeholder="Digite sua mensagem"
              onChange={handleInputValueMensagem}
            />
            <Button type="submit">Enviar mensagem</Button>
          </form>
        </Form>
      </FormContainer>
      <IrParaTopo />
    </FormularioContato>
  );
}
export default Formulario;
