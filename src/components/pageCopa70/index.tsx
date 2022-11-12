import { AiOutlineArrowUp } from "react-icons/ai";
import { Container } from "../pageCopa58/style";
import image from '../../image/selecao-copa-70.png'

export function PageCopa70(){
    return(
        <Container id="PageCopa70">
            <h1>Copa 1970</h1>   
            <div className="historia">
                <span>Historia Marcante: </span>
                <p>
                A Seleção Brasileira de Futebol participou pela nona vez da Copa do Mundo FIFA. A então bicampeã mundial se classificara em primeiro lugar em seu grupo nas eliminatórias para a Copa do Mundo. Foi sorteado no grupo 3, onde enfrentou a Inglaterra, a Romênia e a Tchecoslováquia, classificando-se em primeiro lugar. Nas quartas-de-final, venceu o Peru, bateu o Uruguai nas semifinais e conquistou o título vencendo a Itália na final.
                </p>
            </div>
            <div className="resultados">
                <h2>Resultados</h2>
                <span>Fase de grupos:</span>
                <ul>
                    <li>Brasil 4 x 1 Tchecoslováquia</li>
                    <li>Brasil 1 x 0 Inglaterra</li>
                    <li>Brasil 3 x 2 Romênia</li>
                </ul>
                <span>Oitavas:</span>
                <ul>
                    <li>Não teve</li>
                </ul>
                <span>Quartas:</span>
                <ul>
                    <li>Brasil 4 x 2 Peru</li>
                </ul>
                <span>semifinal:</span>
                <ul>
                    <li>Brasil 3 x 1 Uruguai</li>
                </ul>
                <span>Final:</span>
                <ul>
                    <li>Brasil 4 x 1 Itália</li>
                </ul>
            </div>
            <img src={image} alt="" />
            <a href="#Second"><AiOutlineArrowUp className="icon"/></a>
            

        </Container>
    )
}