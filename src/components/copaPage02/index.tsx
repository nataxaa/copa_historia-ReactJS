import { Container } from "../pageCopa58/style";

export function PageCopa02(){
    return(
        <Container id='PageCopa02'>
            <h1>Copa 2002</h1>   
            <div className="historia">
                <span>Historia Marcante: </span>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Impedit est eos voluptatum facere quam doloribus nobis
                      quo aliquid? Fugit obcaecati neque nesciunt ut non architecto
                       amet ab laborum inventore veritatis.
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

            

        </Container>
    )
}