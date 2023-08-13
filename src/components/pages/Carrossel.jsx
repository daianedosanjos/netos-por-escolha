import React from "react";
import { useRef } from "react";
import { CaretLeft, CaretRight } from "phosphor-react";
import IrParaTopo from "./IrParaTopo";
import {
  Home,
  HomeImg,
  Buttons,
  Itens,
  ButtonClick,
} from "../styles/Carrossel.styles";


import foto1 from "../img/foto1.jpg";
import foto2 from "../img/foto2.jpg";
import foto3 from "../img/foto3.jpg";
import foto4 from "../img/foto4.jpg";
import foto5 from "../img/foto5.jpg";
import foto6 from "../img/foto6.jpg";
import foto8 from "../img/foto8.jpg";
import foto9 from "../img/foto9.jpg";
import foto10 from "../img/foto10.jpg";
import foto11 from "../img/foto11.jpg";
import foto12 from "../img/foto12.jpg";
import foto13 from "../img/foto13.jpg";
import foto14 from "../img/foto14.jpg";
import PrincipiosCards from "./PrincipiosCards";

const images = [
  foto1,
  foto2,
  foto3,
  foto4,
  foto5,
  foto6,
  foto8,
  foto9,
  foto10,
  foto11,
  foto12,
  foto13,
  foto14,

];

function Carrossel() {
  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <Home>
      <HomeImg ref={carousel}>
        {images.map((image) => {
          return (
            <Itens key={image}>
              <img src={image} alt="fotos das ações do Netos por Escolha" />
            </Itens>
          );
        })}
      </HomeImg>
      <Buttons>
        <ButtonClick onClick={handleLeftClick}>
          <CaretLeft size={32} color="#600227" weight="bold" />
        </ButtonClick>
        <ButtonClick onClick={handleRightClick}>
          <CaretRight size={32} color="#600227" weight="bold" />
        </ButtonClick>
      </Buttons>
      <PrincipiosCards />
      <IrParaTopo />
    </Home>
  );
}
export default Carrossel;
