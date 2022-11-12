import { Container } from "./style";
import {AiOutlineArrowUp} from 'react-icons/ai'
import image from '../../image/imagem-selecao-58.jpg'

export function PageCopa58(){
    return(
        <Container id="PageCopa58">
            <h1>Copa 1958</h1>   
            <div className="historia">
                <span>Historia Marcante: </span>
                <p>
                No dia 29 de junho de 1958, na Suécia, o Brasil conquistou
                a Copa do Mundo de futebol pela primeira vez. No elenco campeão,
                De Sordi, Dino Sani e Mauro, jogadores; Vicente Feola,
                técnico; João Carvalhaes, psicólogo; e Paulo Machado de Carvalho,
                chefe de delegação, representaram o Tricolor na conquista. 
                </p>
                
            </div>
            <div className="resultados">
                <h2>Resultados:</h2>
                <span>Fase de grupos:</span>
                <ul>
                    <li>Brasil 3 x 0 Áustria</li>
                    <li>Brasil 0 x 0 Inglaterra</li>
                    <li>Brasil 2 x 0 URSS</li>
                </ul>
                <span>Oitavas:</span>
                <ul>
                    <li>Não teve</li>
                </ul>
                <span>Quartas:</span>
                <ul>
                    <li>Brasil 1 x 0 País de Gales</li>
                </ul>
                <span>semifinal:</span>
                <ul>
                    <li>Brasil 5 x 2 França</li>
                </ul>
                <span>Final:</span>
                <ul>
                    <li>Brasil 5 x 2 Suécia</li>
                </ul>
            </div>
                <img src={image} alt="" />
            <a href="#Second"><AiOutlineArrowUp className="icon"/></a>
            

        </Container>
    )
}