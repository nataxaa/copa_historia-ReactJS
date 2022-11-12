import { AiOutlineArrowUp } from "react-icons/ai";
import { Container } from "../pageCopa58/style";
import image from '../../image/selecao-copa-62.jpeg'

export function PageCopa62(){
    return(
        <Container id="PageCopa62">
            <h1>Copa 1962</h1>   
            <div className="historia">
                <span>Historia Marcante: </span>
                <p>
                A edição de 1962 da Copa do Mundo marcou a sétima participação
                da Seleção Brasileira de Futebol nessa competição. Era o único
                país a participar de todas as edições do torneio da FIFA, fato
                que persistirá pelo menos a edição realizada no Catar em 2022.
                Foi a primeira em que o Brasil defendia o título de campeão, após
                a conquista do Mundial da Suécia, em 1958.
                </p>
            </div>
            <div className="resultados">
                <h2>Resultados</h2>
                <span>Fase de grupos:</span>
                <ul>
                    <li>Brasil 2 x 0 México</li>
                    <li>Brasil 0 x 0 Tchecoslováquia</li>
                    <li>Brasil 2 x 1 Espanha</li>
                </ul>
                <span>Oitavas:</span>
                <ul>
                    <li>Não teve</li>
                </ul>
                <span>Quartas:</span>
                <ul>
                    <li>Brasil 3 x 1 Inglaterra</li>
                </ul>
                <span>semifinal:</span>
                <ul>
                    <li>Brasil 4 x 2 Chile</li>
                </ul>
                <span>Final:</span>
                <ul>
                    <li>Brasil 3 x 1 Tchecoslováquia</li>
                </ul>
            </div>
            <img src={image} alt="" />
            <a href="#Second"><AiOutlineArrowUp className="icon"/></a>
            

        </Container>
    )
}