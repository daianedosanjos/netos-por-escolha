
import { Lista } from "../styles/Doacoes"

function Doacoes() {
  return (
	<Lista>
		<div className="doacao-title"><h2>Sua doação irá ajudar os idosos em situação de vulnerabilidade social e as instituições atendidas.</h2>
		</div>
		<ul className="doacao-lista">
			<li><p>Alimentos não perecíveis</p></li>  
			<li><p>Cadeira de rodas</p></li>	
			<li><p>Colchão</p></li>		
			<li><p>Equipamento de proteção individual (EPI)</p></li>		
			<li><p>Material de higiene</p></li>	
			<li><p>Material de escritório</p></li>	
			<li><p>Mobiliário</p></li>		
			<li><p>Roupas</p></li>	
		</ul>
			<h4>Se a empresa deseja realizar uma campanha interna para arrecadar doações de produtos, entre em contato pelo e-mail: netosporescolhasalvador@gmail.com
			</h4>
	</Lista>
  )
}

export default Doacoes