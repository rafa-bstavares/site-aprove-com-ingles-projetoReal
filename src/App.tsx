import { useEffect, useState, useRef } from 'react'
import {Produto} from './components/Produto'
import { nomeProduto } from './components/Produto/styled'
import { TituloDuplicado } from './components/TituloDuplicado'
import fotoMobile from "./assets/images/BannerCelularTeste.webp"
import textoMobile from "./assets/images/texto-mobile.webp"
import setaMobile from "./assets/images/setaBanner.svg"
import imagemQuemSou from "./assets/images/fotoQuemSouEuGabi.webp"
import * as C from './AppStyles'
import Aos from 'aos'
import "aos/dist/aos.css"
import {motion, useTransform, useScroll} from "framer-motion"




function App() {
  

  useEffect(() => {
    Aos.init()
  }, [])

  const initialValue = [
    {linkProduto: 'https://pay.hotmart.com/N86383775J', concurso: 'ESA', titulo: 'Interpretação de texto', nomeProduto: 'Nível Iniciante', descricoes: [
      'Pra quem tem dificuldade em interpretação',
      '10 textos nível básico/iniciante',
      'questões de interpretação INÉDITAS com gabarito!'
    ],
    alerta: '',
    preco: 'R$29,90'
  },
    {linkProduto: 'https://pay.hotmart.com/U86292179Y', concurso: 'ESA', titulo: 'Interpretação de texto', nomeProduto: 'Para Gabaritar', descricoes: [
      'pra quem quer simular a prova', 
      '10 textos no nível da prova',
      'questões de interpretação INÉDITAS com gabarito!'
    ],
    alerta: '',
    preco: 'R$39,90'
  },
    {linkProduto: 'https://pay.hotmart.com/T86384257D', concurso: 'COMBO ESA', titulo: 'Interpretação de texto', nomeProduto: 'Para Gabaritar + iniciante', descricoes: [

    ],
    alerta: 'Somente essa semana!',
    preco: 'R$49,90'
  }
  ]

  type objetoProduto = {
    linkProduto: string, concurso: string, titulo: string, nomeProduto: string, descricoes: string[], alerta: string, preco: string
  }

  const [arrayProdutos, setArrayProdutos] = useState<objetoProduto[]>(initialValue)



  return (
    <div className='bg-black'>
      <div className='bg-[url("./assets/images/banner.png")] h-screen w-full bg-cover bg-center-top relative z-10 hidden md:block'>
        <C.MascaraBanner></C.MascaraBanner>
      </div>

      <div className='md:hidden flex flex-col items-center justify-around gap-8'>
        <C.ContainerFotoMobile>
          <img className='w-full' src={fotoMobile} alt="foto-gabi" />
          <C.MascaraBanner></C.MascaraBanner>
        </C.ContainerFotoMobile>
        <div className='pt-2'>
          <img className='w-4/5 mx-auto' src={textoMobile} alt="texto-em-imagem" />
        </div>
        <div className='flex flex-col items-center'>
          <div className='text-xl'>Confira nossos produtos abaixo</div>
          <img className='w-9 h-9 mt-4' src={setaMobile} alt="seta do banner" />
        </div>
      </div>

      <C.ContainerProdutos>
        <TituloDuplicado></TituloDuplicado>
        <div className='flex justify-between w-full flex-col items-center md:items-stretch gap-24 md:gap-0 md:flex-row flex-wrap'>
          {
            arrayProdutos && 
            arrayProdutos.map((item, index) => {
              let delay
              switch ((index + 1) % 3) {
                case 1:
                  delay = 1
                  break

                case 2:
                  delay = 2
                  break
                case 0:
                  delay = 3
                  break
                default:
                  delay = 0
              }

              return <Produto key={item.nomeProduto} linkProduto={item.linkProduto} numeroProduto={index + 1} concurso={item.concurso} titulo={item.titulo} nomeProduto={item.nomeProduto} descricoes={item.descricoes} alerta={item.alerta} preco={item.preco} delay={delay}/>
          })
          }
        </div>
      </C.ContainerProdutos>

      <C.ContainerQuemSou>
        <C.QuemSouPreto>

        </C.QuemSouPreto>
        <C.QuemSouVerde>
          <C.QuemSouLargura>
            <C.TextosQuemSou data-aos="fade-right">
              <C.NomeQuemSou>Gabriela Tavares</C.NomeQuemSou>
              <C.TituloQuemSou>
                ex-aluna EEAR BCT <br/>Aprovada 2x EEAR e 1x ESPCEX
              </C.TituloQuemSou>
              <C.DescQuemSou>
                Ao longo desses mais de 8 anos em contato com concursos militares e diversas aprovações, passei por todas as etapas do aluno, desde o completo desconhecimento à aprovação! Por isso, vou te levar pelo melhor caminho, te mostrando os atalhos para o inglês ser a sua nota mais alta e garantir a sua aprovação no seu concurso dos sonhos!
              </C.DescQuemSou>
            </C.TextosQuemSou>
          </C.QuemSouLargura>
        </C.QuemSouVerde>
        <C.ImagemQuemSou data-aos="fade-left" src={imagemQuemSou}></C.ImagemQuemSou>
      </C.ContainerQuemSou>
      <C.ContainerCopy>
            <C.TextoCopy>Copyright ©2023 Lab X</C.TextoCopy>
      </C.ContainerCopy>

      <div className='bg-black relative'>
        <div className='sticky top-0 left-0 right-0'>
          <div className='h-screen flex justify-center items-center text-5xl bg-white text-black relative'>
            Botafogo campeão libertadores 2025
            <div className='h-screen w-full flex justify-center items-center text-5xl bg-black text-white absolute top-0 left-0'>
              Botafogo campeão libertadores 2025
            </div>
          </div>
          
        </div>
        <div className='h-screen bg-white'></div>
        <div className='h-screen bg-white'></div>
      </div>

      <div className='h-screen bg-violet-700'></div>
    </div>

  )
}

export default App

/* Qunado a distância do botafogo pro topo for 0 dar position fixed nele e cada vez que o scroll descer fazer um left no botafogo preto -1, quando o left alcançar -100vw dar position absolute com bottom-0 left-0 right-0*/
