import styled from "styled-components";

export const Container = styled.div`
    
    height:100vh ;
    margin:1rem auto ;
    text-align:center ;
    display:flex ;
    flex-direction:column ;
    align-items:center ;
    h1{
        margin-bottom:2rem ;
        border-bottom:1px solid #FFF;
        width:20rem ;
        margin:2rem auto ;
        font-size:40px ;
    }

    div.historia{
        width:40rem ;
        
        span{
            font-size:25px ;
            font-weight:bold ;
        }
        margin-bottom:1rem ;
    }

    div.resultados{
        li{
            margin-left:3rem ;
        }
        span{
            display:flex ;
        }
    }
`