import { register } from "swiper/element/bundle";
register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

import React from "react";
import foto1 from "../../img/foto1.jpg";
import foto2 from "../../img/foto2.jpg";
import foto3 from "../../img/foto3.jpg";
import foto4 from "../../img/foto4.jpg";
import foto5 from "../../img/foto5.jpg";
import foto6 from "../../img/foto6.jpg";
import foto8 from "../../img/foto8.jpg";
import foto9 from "../../img/foto9.jpg";
import foto10 from "../../img/foto10.jpg";
import foto11 from "../../img/foto11.jpg";
import foto12 from "../../img/foto12.jpg";
import foto13 from "../../img/foto13.jpg";
import foto14 from "../../img/foto14.jpg";
import { Carrossel, CarrosselTitle } from "../styles/galeria.styles";

const GaleriaImagens = () => {
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

  return (

	<div>
		<CarrosselTitle>
		<h2>Galeria de fotos</h2>
		</CarrosselTitle>	
    <Carrossel>
      <Swiper slidesPerView={1} pagination={{ clickable: true }} navigation>
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt="fotos dos carros" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Carrossel>
	</div>
  );
};

export default GaleriaImagens;
