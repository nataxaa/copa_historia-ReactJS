import styled from "styled-components";



export const Container = styled.div`
img{
    position:absolute ;
    opacity:0.2 ;
    width:20rem ;
    top:55rem ;
}

height:100vh ;
h1.title{
    left:33rem ;
    position:relative ;
    width:fit-content ;
    top:3rem ;
    font-size:40px ;
    border-bottom:1px solid #FFF ;
    padding-bottom:10px ;
}
div.area-card{
    display:grid ;
    grid-template-columns: repeat(5, 1fr) ;
    gap:10px;
    margin-top:16rem ;
    img{
        width:16rem ;
        height:13rem ;
        border-radius:100px ;
        z-index:0 ;
        
    }

    .card{
        color:#FFF ;
        display:flex ;
        flex-direction:column ;
        align-items:center ;
        z-index:1 ;
        a{
            text-decoration:none ;
            color: #FFF ;
        }
        h1{
            font-size:50px ;
            transition:0.2s ;
            :hover{
                margin-bottom:10px ;
            }
        }
        opacity:0.7 ;
        cursor: pointer;
        transition:0.2s ;
        :hover{
        opacity:1 ;
        margin-left:10px ;
        }
    }
}



`