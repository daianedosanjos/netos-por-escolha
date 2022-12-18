import React from "react";
import { useState } from "react";
import swal from "sweetalert";
import { database } from "../service/firebase";
import { ref, push, set } from "firebase/database";
import FotoCoracao from "../img/coracao.png";
import IrParaTopo from "./IrParaTopo";
import {
  ButtonContato,
  ContatoContainer,
  Contatoformulario,
  ContatoImg,
  FormContato,
} from "../styles/Contato.styles";
import { InstagramLogo, WhatsappLogo } from "phosphor-react";

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

    e.target.reset();
  }

  function ConfirmarEnvio() {
    swal({
      title:"Mensagem enviada!",
      icon:'success'
    });
  }

  return (
    <ContatoContainer>
      <div>
        <h3>
          Para mais informações sobre doações, voluntariado, projetos,
          parcerias, patrocínios e outros assuntos, fale conosco através dos
          nossos contatos.
        </h3>
      </div>
      <Contatoformulario>
        <ContatoImg>
          <img
            src={FotoCoracao}
            alt="foto dos voluntários do Netos por Escolha"
          />
        </ContatoImg>

        <FormContato>
          <form onSubmit={handleCreateMessage}>
            <div className="redesSociais">
              <a
                href="https://www.instagram.com/netosporescolha/"
                target="_blank"
              >
                <InstagramLogo size={96} color="#b72a6e" weight="bold" />
              </a>
              <a href="https://wa.me/5571999444234" target="_blank">
                <WhatsappLogo size={96} color="#2ab73a" weight="bold" />
              </a>
            </div>
            <h4>
              {" "}
              Você também pode nos enviar uma mensagem através do formulário
            </h4>
            <input placeholder="Nome" onChange={handleInputValueNome} />
            <input placeholder="Email" onChange={handleInputValueEmail} />
            <input placeholder="Telefone" onChange={handleInputValuetelefone} />
            <textarea
              placeholder="Digite sua mensagem"
              onChange={handleInputValueMensagem}
            />
            <ButtonContato onClick={ConfirmarEnvio} type="submit">ENVIAR MENSAGEM</ButtonContato>
          </form>
        </FormContato>
      </Contatoformulario>
      <IrParaTopo />
    </ContatoContainer>
  );
}
export default Formulario;
