import { AiOutlineArrowUp } from "react-icons/ai";
import { Container } from "../pageCopa58/style";
import image from '../../image/selecao-copa-02.jpg'

export function PageCopa02(){
    return(
        <Container id='PageCopa02'>
            <h1>Copa 2002</h1>   
            <div className="historia">
                <span>Historia Marcante: </span>
                <p>
                A Copa do Mundo de 2002, disputada no Japão e na Coreia do Sul, é muito especial para o torcedor brasileiro, que viu a seleção comandada por Luiz Felipe Scolari se tornar a primeira - e até agora única - pentacampeã mundial. Ronaldo, Ronaldinho Gaúcho, Rivaldo e companhia marcaram seus nomes na história do futebol em uma campanha histórica.
                </p>
            </div>
            <div className="resultados">
                <h2>Resultados</h2>
                <span>Fase de grupos:</span>
                <ul>
                    <li>Brasil 2 x 1 Turquia</li>
                    <li>Brasil 4 x 0 China</li>
                    <li>Brasil 5 x 2 Costa Rica</li>
                </ul>
                <span>Oitavas:</span>
                <ul>
                    <li>Brasil 2 x 0 Bélgica</li>
                </ul>
                <span>Quartas:</span>
                <ul>
                    <li>Brasil 2 x 1 Inglaterra</li>
                </ul>
                <span>semifinal:</span>
                <ul>
                    <li>Brasil 1 x 0 Turquia</li>
                </ul>
                <span>Final:</span>
                <ul>
                    <li>Brasil 2 x 0 Alemanha</li>
                </ul>
            </div>
            <img src={image} alt="" />
            <a href="#Second"><AiOutlineArrowUp className="icon"/></a>
            

        </Container>
    )
}