import styled from "styled-components";

export const ContainerTitulo = styled.div`
    position: relative;
    padding-left: 5rem;
    align-self: start;
    margin-bottom: 5rem;

    @media(max-width: 768px){
        padding-left: 0;
    }
`

export const TituloPrincipal = styled.div`
    font-size: 2rem;
    font-weight: bold;
    padding-left: 1rem;
    position: relative;
    z-index:10;
    text-shadow: 0 0 5px #000;

    
    @media(max-width: 768px){
        padding-left: 2rem;
        font-size: 1.8rem;
    }

    @media(max-width: 440px){
        font-size: 1.6rem;
    }
`

export const TituloVazado = styled.div`
    position: absolute;
    font-size: 8rem;
    font-weight: 900;
    top: 50%;
    left: 0;
    transform: translateY(-55%);
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: rgba(255, 255, 255, 0.1);
    color: #000;

    @media(max-width: 768px){
        font-size: 5rem;
    }

    @media(max-width: 440px){
        font-size: 3.5rem;
    }

`   