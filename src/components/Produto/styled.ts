import styled, {keyframes} from "styled-components";


export const ContainerProduto = styled.div`
    position: relative;
    margin-bottom: 2rem;
    margin-top: 2rem;
    
    @media(max-width: 768px){
        width: 90%;
        margin-top: 0;
        margin-bottom: 0;
    }
`

export const fundoGrad = styled.div`
    position: absolute;
    top: -0.4rem;
    right: -0.4rem;
    bottom: -0.4rem;
    left: -0.4rem;
    background-image: linear-gradient(45deg, #000 75%, #009460)
`

export const caixaProduto = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative; 
    z-index: 10;
    width: 27vw;
    background-color: #222;
    padding: 2rem;
    gap: 1rem;
    padding-bottom: 3.5rem;
    height: 100%;

    @media(max-width: 768px){
        width: 100%;
    }
`

export const numeroProduto = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    font-size: 3rem;
    border: .2rem solid #fff;
    margin-bottom: 1rem;
`

export const concursoProduto = styled.div`
    font-size: 1.8rem;
`

export const tituloProduto = styled.div`
    font-size: 1.8rem;
    text-align: center;
    line-height: 2.3rem;

`

export const nomeProduto = styled.div`
    font-size: 2rem;
    text-align: center;
    line-height: 2.3rem;
    margin-bottom: 1rem;
    font-family: "Lora", sans-serif;
`

export const alerta = styled.div`
    text-transform: uppercase;
    text-align: center;
    font-size: 2rem;
    background-color: #009460;
    padding: .5rem;

    @media(max-width: 768px){
        font-size: 1.6rem;
    }
`

export const linkProduto = styled.a`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    cursor: pointer;
`

const degrade = keyframes`
    0%{
        background-position-x: 0%;
    }
    100%{
        background-position-x: 100%;
    }
`

export const botaoProduto = styled.div`
    padding: .8rem 2rem;
    background-image: linear-gradient(70deg, #005437 20%, #009460,#005437);
    background-size: 300% 100%;
    animation: ${degrade} 2s infinite alternate;

`


