import styled from "styled-components";

export const ContainerProdutos = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 5rem 0;
    width: 90%;
    margin: 0 auto;
`

export const MascaraBanner = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: linear-gradient(transparent 80%, #000);
`

export const ContainerBannerMobile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;


    @media(min-width: 768px){
        display: none;
    }
`

export const ContainerFotoMobile = styled.div`
    height: 40vh;
    overflow: hidden;
    width: 100%;
    position: relative;
`

export const ContainerQuemSou = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 80vh;
    position: relative;
    @media(max-width: 768px){
        background-image: linear-gradient(#009460, #005437);
    }
`

export const QuemSouPreto = styled.div`
    height: 10rem;
    order: -2;
    background-color: #000;
    @media(max-width: 768px){
        height: 6rem;
    }
`

export const QuemSouVerde = styled.div`
    display: flex;
    flex: 1;
    background-image: linear-gradient(90deg,#005437 20%, #009460);
    @media(max-width: 768px){
        background-image: none;
    }
`

export const QuemSouLargura = styled.div`
    width: 90%;
    margin: 0 auto;
`

export const TextosQuemSou = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    gap: 0.5rem;
    width: 50%;
    height: 100%;
    @media(max-width: 768px){
        width: 100%;
        padding: 0 0 2rem 0;
    }
`

export const NomeQuemSou = styled.div`
    font-family: "Lora", sans-serif;
    font-size: 2rem;
    @media(max-width: 768px){
        text-align: center;
    }
`

export const TituloQuemSou = styled.div`
    font-size: 2rem;
    text-align: center;
    line-height: 2.5rem;
    margin-bottom: 0.5rem;
    @media(max-width: 768px){
        font-size: 1.8rem;
    }
`

export const DescQuemSou = styled.div`
    text-align: center;
    font-size: 1.3rem;
    @media(max-width: 768px){
        font-size: 1rem;
    }
`

export const ImagemQuemSou = styled.img`
    position: absolute;
    top: 0;
    bottom: 2rem;
    left: 58%;
    height: 78vh;
    @media(max-width: 768px){
        height: auto;
        position: static;
        left: auto;
        bottom: auto;
        right: auto;
        margin-top: -5rem;
        order: -1;
        margin-bottom: 1rem;
    }
`


export const ContainerCopy = styled.div`
    display: flex;
    align-items: center;
    background-color: #000;
    height: 5rem;
    align-self: stretch;
    padding-left: 7.5%;
`

export const TextoCopy = styled.div`
    color: #fff;
    font-size: 1.4rem;
` 