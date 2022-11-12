import { AiOutlineArrowUp } from "react-icons/ai";
import { Container } from "../pageCopa58/style";
import image from '../../image/selecao-copa-94.jpg'

export function PageCopa94(){
    return(
        <Container id="PageCopa94">
            <h1>Copa 1994</h1>   
            <div className="historia">
                <span>Historia Marcante: </span>
                <p>
                A Copa de 1994 ficou muito marcada pelo tetracampeonato da seleção brasileira, então comandada por Carlos Alberto Parreira. O Brasil, com uma campanha quase perfeita, chegou à final e venceu a Itália nos pênaltis para ficar com o título do Mundial 24 anos após a última conquista.
                </p>
            </div>
            <div className="resultados">
                <h2>Resultados</h2>
                <span>Fase de grupos:</span>
                <ul>
                    <li>Brasil 4 x 1 Rússia</li>
                    <li>Brasil 1 x 0 Camarões</li>
                    <li>Brasil 3 x 2 Suécia</li>
                </ul>
                <span>Oitavas:</span>
                <ul>
                    <li>Brasil 1 x 0 Estados Unidos</li>
                </ul>
                <span>Quartas:</span>
                <ul>
                    <li>Brasil 3 x 2 Holanda</li>
                </ul>
                <span>semifinal:</span>
                <ul>
                    <li>Brasil 1 x 0 Suécia</li>
                </ul>
                <span>Final:</span>
                <ul>
                    <li>Brasil 0(3) x 0(2) Itália</li>
                </ul>
            </div>  
            <img src={image} alt="" />
            <a href="#Second"><AiOutlineArrowUp className="icon"/></a>
        </Container>
    )
}