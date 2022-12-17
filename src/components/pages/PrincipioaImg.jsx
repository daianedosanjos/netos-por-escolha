import React from 'react'
import missao from "../img/missao.png";
import visao from "../img/visao.png";
import valores from "../img/valores.png";
import { Principios, Title, Img } from '../styles/PrincipiosImg'
import PrincipiosCards from "./PrincipiosCards"

function PrinciplesImg() {
  return (
	<Principios id="principios">	
  <Title>
   <h1>NOSSOS PRINCIPIOS</h1>	
   </Title> 
   <Img>
        <img className="principio-img"src={missao} alt="" />
        <img className="principio-img"src={visao} alt="" />
        <img className="principio-img"src={valores} alt="" /> 
      </Img>
		<PrincipiosCards/>
	</Principios>
  )
}

export default PrinciplesImg