
// Css
import './ReviewForm.css'

//icons
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill
} from 'react-icons/bs'

const ReviewForm = ({ data, updateHandle }) => {
  return (
    <div className='review-form'>
      <div className="form-control score-container">
        <label className='radio-container'>
          <input
            type="radio"
            name="review"
            value='unsatisfied'
            required
            checked={data.review === 'unsatisfied'}
            onChange={(e) => { updateHandle('review', e.target.value) }}
          />
          <BsFillEmojiFrownFill />
          <p>Insatisfeito</p>
        </label>
        <label className='radio-container'>
          <input
            type="radio"
            name="review"
            value='neutro'
            required
            checked={data.review === 'neutro'}
            onChange={(e) => { updateHandle('review', e.target.value) }}
          />
          <BsFillEmojiNeutralFill />
          <p>Neutro</p>
        </label>
        <label className='radio-container'>
          <input
            type="radio"
            name="review"
            value='satisfeito'
            required
            checked={data.review === 'satisfeito'}
            onChange={(e) => { updateHandle('review', e.target.value) }}
          />
          <BsFillEmojiSmileFill />
          <p>Satisfeito</p>
        </label>
        <label className='radio-container'>
          <input
            type="radio"
            name="review"
            value='muito_satisfeito'
            required
            checked={data.review === 'muito_satisfeito'}
            onChange={(e) => { updateHandle('review', e.target.value) }}
          />
          <BsFillEmojiHeartEyesFill />
          <p>Muito satisfeito</p>
        </label>

      </div>
      <div className="form-control">
        <label htmlFor="comment">Comentário</label>
        <textarea
          name="comment"
          placeholder='Deixe-nos um comentário'
          value={data.comment}
          onChange={(e) => { updateHandle('comment', e.target.value) }}
        ></textarea>
      </div>


    </div>
  )
}

export default ReviewForm