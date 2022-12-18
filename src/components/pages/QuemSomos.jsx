import React from "react";
import anarosa from "../img/anarosa.jpg";
import IrParaTopo from "./IrParaTopo";
import { OurStory, Performance, WhoWeAre } from "../styles/QuemSomos.styles";

function Story() {
  return (
    <WhoWeAre>
      <OurStory>
        <div>
          <img src={anarosa} alt="" />
        </div>
        <div>
          <h1> Como tudo começou...</h1>
          <p>
            Em 2015 fui convidada pela equipe da Fátima Bernardes para contar um
            pouco da minha história com meu avô Fernando que tinha Alzheimer, eu
            tinha uma página chamada 'Prazer, sua neta' onde contava nossa
            rotina. Meses depois à convite da prefeitura, me reuni com projetos
            sociais e redes sociais influentes para falar sobre solidariedade e
            terceiro setor e fui provocada: por que você não cria um projeto
            social para idosos?. E em 2016 surge o 'Netos por escolha', escolha,
            pois escolhemos amar nossos avôs e avós do coração. começamos
            pequeninos e hoje já estamos em outras cidades como Juazeiro,
            Conselheiro Lafaiete e São Paulo.
          </p>
          <p>
            Já amamos e cuidamos de mais de 1000 idosos! O Netos por escolha
            virou projeto e hoje somos uma família com de 200 voluntários!
          </p>
        </div>
      </OurStory>
      <Performance>
        <h1>Como atuamos</h1>
        <p>
          Em cada ação realizada, seja ela frequente ou pontual, levando
          atividades lúdicas ou apenas as doações arrecadadas, sempre colocamos
          nossos valores como base. Assim garantimos que todos serão
          respeitados, amados e ouvidos. Realizamos ações a cada 15 dias, sempre
          aos domingos, em instituições diferentes, levando o lanche da manhã,
          música, bingo com brindes, manicure e pedicure, e muita escuta. Além
          disso, também fazemos ações especiais como carnaval, São João, dia dos
          avós e as ações de natais.
        </p>
      </Performance>
      <IrParaTopo />
    </WhoWeAre>
  );
}

export default Story;
