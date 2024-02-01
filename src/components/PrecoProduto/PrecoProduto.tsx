
type Props = {
    preco: string
}

function PrecoProduto({preco}: Props){
    return (
        <div className="flex items-center gap-4 mt-4">
            <div className="text-xl">Por apenas:</div>
            <div className="border-2 border-solid border-white px-4 py-2 flex justify-center items-center text-xl">{preco}</div>
        </div>
    )
}

export default PrecoProduto