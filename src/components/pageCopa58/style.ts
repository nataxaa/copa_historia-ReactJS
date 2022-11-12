import styled from "styled-components";

export const Container = styled.div`
    
    height:100vh ;
    margin:1rem auto ;
    text-align:center ;
   
    
    
    background-color:(--background-color) ;
    a{
        position: relative;
        right:-33rem ;
        font-size:30px ;
        color:#000 ;
        background-color:#D5A021;
        padding:7px 13px ;
        border-radius:1000px ;  
        transition:0.2s;
        top:0rem ;
        :hover{
            opacity:0.8 ;
            top:-1px ;
        }
        .icon{
        position: relative;
        top:4px ;
    }
}

    h2{
        font-size: 30px ;
    }

    h1{
        margin-bottom:2rem ;
        border-bottom:1px solid #FFF;
        width:20rem ;
        margin:2rem auto ;
        font-size:40px ;
    }

    div.historia{
        width:40rem ;
        margin-left:8rem ;
        
        span{
            font-size:25px ;
            font-weight:bold ;
        }
        margin-bottom:1rem ;
    }

    div.resultados{
        span{
            display:flex ;
            text-align: left;
            margin:5px 0 5px 0 ;
            font-size:20px ;
        }
        ul{
            list-style:none ;
        }
        float:right ;
        width:fit-content ;
        margin-right:15rem ;
    }

    img{
        position:relative ;
        width:33rem ;
        margin-top:30px ;
        border-radius:6px ;
        border:1px solid #000;
        box-shadow: 2px 1px 5px 2px #000 ;
    }
`