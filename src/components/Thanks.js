import './Thanks.css'

// icons
import {
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill
} from 'react-icons/bs'

const emojiData = {
    unsatisfied: <BsFillEmojiFrownFill />,
    neutro: <BsFillEmojiNeutralFill />,
    satisfeito: <BsFillEmojiSmileFill />,
    muito_satisfeito: <BsFillEmojiHeartEyesFill />
}

const Thanks = ({ data }) => {
    return (
        <div className='thanks-container'>
            <h2>Falta pouco...</h2>
            <p>Sua opinição é muito importante, em breve você receberá um cupom de 10% de desconto na sua próxima compra.</p>
            <p>Para concluir sua avaliação, clique no botão Enviar abaixo.</p>

            <h3>Aqui está o resumo da sua avaliação:</h3>

            <p className="review-data">
                <span>Satisfação com o produto:</span>
                {emojiData[data.review]}
            </p>
            <p className="review-data">
                <span>Comentário:</span>
                {data.comment}
            </p>
        </div>
    )
}

export default Thanks;