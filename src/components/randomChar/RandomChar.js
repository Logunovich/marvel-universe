import './randomChar.scss';
import thor from '../../resources/thor.jpg';
import hummer from '../../resources/hummer.png'

const RandomChar = () => {
  return (
    <div className="random__char">
      <div className="random__char_left">
        <div className="random__char_img">
          <img src={thor} alt="thor" />
        </div>
        <div className="random__char_info">
          <h2>Thor</h2>
          <p>
          As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate...
          </p>
          <div className="random__char_btn-block">
            <a href="https://r24.by" className="btn red__btn">Homepage</a>
            <a href="https://r24.by" className="btn gray__btn">Wiki</a>
          </div>
        </div>
      </div>
      <div className="random__char_right">
        <h2 className="random__char_right-text">Random character for today! <br />Do you want to get to know him better?</h2>
        <h2>Or choose another one</h2>
        <a href="https://r24.by" className="btn red__btn">Try it</a>
        <img src={hummer} alt="hummer" className="hummer-img" />
      </div>
    </div>
  )
}

export default RandomChar;