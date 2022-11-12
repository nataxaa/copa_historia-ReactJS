import { Container } from "./style";
import image from '../../image/escudo-selecao.png'
import neymar from '../../image/neymar-back.png'
import pele from '../../image/imagem-pele.png'

export function PageInicial(){
    return(
        <Container>
            <img className="imagem-background-neymar" src={neymar} />
            
            <div>
                <h1>NOSSA HISTORIA NA COPA.</h1>
                <p>
                A maior seleção da historia das copas tem mais um capitulo 
                a ser escrito no ano de 2022. 5 vezes campeã mundial, considerada
                a maior camisa do futebol, vestida por lendas como Pelé, Garrincha,
                Zico, Ronaldo, Ronaldinho, Neymar, etc... 
                </p>
            </div>
            <img src={image} alt="Escudo seleção brasileira."/>
        </Container>
    )
}