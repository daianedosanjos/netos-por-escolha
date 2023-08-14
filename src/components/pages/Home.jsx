import { ContainerHome } from "../styles/Home.styles";
import PrincipiosCards from "./PrincipiosCards";
import QuemSomos from './QuemSomos'
import ComoAjudar from "./ComoAjudar";
import GaleriaImagens from "./GaleriaImagens";

function Home() {
  return (
    <ContainerHome>     
      <QuemSomos />
      <PrincipiosCards />
      <ComoAjudar />
      <GaleriaImagens />
      </ContainerHome>
  );
}
export default Home;
