import * as C from './styled'
import DescricaoProduto from '../DescricaoProduto/descricaoProduto'
import PrecoProduto from '../PrecoProduto/PrecoProduto'
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'

type Props = {
    linkProduto: string,
    numeroProduto: number,
    concurso: string,
    titulo: string,
    nomeProduto: string,
    descricoes: string[],
    alerta: string,
    preco: string,
    delay: number
}

export function Produto({linkProduto, numeroProduto, concurso, titulo, nomeProduto, descricoes, alerta, preco, delay}: Props){
    let screenW = screen.width

    useEffect(() => {
        Aos.init()
    }, [])

    //Teria que fazer um componente aqui e fazer todas as medições aqui, do scroll da tela, da distancia do elemento (aqui que tá o problema pq eu não sei aqui dentro me referenciar somente a esse elemento, essa instância de componente, tem como fazer isso?) até o topo e conferir, caso ela passe lá do valor, seta apenas esse state como true e ai só esse elemento vai "sofrer" a animação.

 


    return (
           <C.ContainerProduto data-aos="fade-up" data-aos-delay={screenW > 768? 100*delay: 0}>
                <C.fundoGrad></C.fundoGrad>
                <C.caixaProduto>
                    <C.numeroProduto>{numeroProduto}</C.numeroProduto>
                    <C.concursoProduto>{concurso}</C.concursoProduto>
                    <C.tituloProduto>{titulo}</C.tituloProduto>
                    <C.nomeProduto>{nomeProduto}</C.nomeProduto>
                    {
                        descricoes.length > 0 &&
                        descricoes.map(item => <DescricaoProduto texto={item} />)
                    }
                    {
                        alerta &&
                        <C.alerta>{alerta}</C.alerta>
                    }
                    {
                        preco &&
                        <PrecoProduto preco={preco}></PrecoProduto>
                    }
                    <C.linkProduto href={linkProduto} target='_blank'>
                        <C.botaoProduto>Adquirir</C.botaoProduto>
                    </C.linkProduto>
                </C.caixaProduto>
           </C.ContainerProduto>
    )
}
