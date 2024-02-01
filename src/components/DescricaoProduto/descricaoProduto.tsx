import seta from '../../assets/images/seta.svg'


type Props = {
    texto: string
}

function DescricaoProduto({texto}: Props){
    return (
        <div className="self-start flex gap-2 items-center">
            <img src={seta} alt="seta-descrição" className='w-8 h-auto' />
            <div>{texto}</div>
        </div>
    )
}

export default DescricaoProduto