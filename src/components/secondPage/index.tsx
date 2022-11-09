import { Container } from "./style";
import pele from '../../image/imagem-pele.png'
import garrincha from '../../image/garrincha.png'
import copa70 from '../../image/copa70.jpg'
import copa2002 from '../../image/copa2002.jpg'
import copa94 from '../../image/copa94.jpg'

export function SecondPage(){
return(
    <Container id="Second">
        <h1 className="title">Nossas Copas</h1>
        <img src={garrincha} alt="" />
        <div className="area-card">

            <div className="card">
                <h1><a href="#PageCopa58">58</a></h1>
            </div>
            <div className="card">
                <h1><a href="#PageCopa62">62</a></h1>
            </div>
            <div className="card">
                <h1><a href="#PageCopa70">70</a></h1>
            </div>
            <div className="card">
                <h1><a href="#PageCopa94">94</a></h1>
            </div>
            <div className="card">
                <h1><a href="#PageCopa02">02</a></h1>
            </div>

        </div>
    </Container>
)
}