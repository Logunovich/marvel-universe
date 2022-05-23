import './charList.scss';

import img1 from '../../resources/01.jpg';
import img2 from '../../resources/02.jpg';
import img3 from '../../resources/03.jpg';
import img4 from '../../resources/04.jpg';
import img5 from '../../resources/05.jpg';
import img6 from '../../resources/06.jpg';
import img7 from '../../resources/07.jpg';
import img8 from '../../resources/08.jpg';
import img9 from '../../resources/09.jpg';



const CharList = () => {
  return (
      <div className="char__list">
        <div className="char__list_items">
          <div className="char__list_item">
            <img src={img1} alt="" />
            <h2 className="char__list_header">Abyss</h2>
          </div>
          <div className="char__list_item">
            <img src={img2} alt="" />
            <h2 className="char__list_header">Loki</h2>
          </div>
          <div className="char__list_item">
            <img src={img3} alt="" />
            <h2 className="char__list_header">Adam Warlock</h2>
          </div>
          <div className="char__list_item">
            <img src={img4} alt="" />
            <h2 className="char__list_header">Boom boom</h2>
          </div>
          <div className="char__list_item">
            <img src={img5} alt="" />
            <h2 className="char__list_header">Calypso</h2>
          </div>
          <div className="char__list_item">
            <img src={img6} alt="" />
            <h2 className="char__list_header">Colleen wing</h2>
          </div>
          <div className="char__list_item">
            <img src={img7} alt="" />
            <h2 className="char__list_header">Diamon hellstorm</h2>
          </div>
          <div className="char__list_item">
            <img src={img8} alt="" />
            <h2 className="char__list_header">Damage control</h2>
          </div>
          <div className="char__list_item">
            <img src={img9} alt="" />
            <h2 className="char__list_header">Hulk</h2>
          </div>
        </div>
        <div className="char__list_btn">
          <a href="https://r24.by" className="btn big-btn">Load more</a>
        </div>
      </div>
  )
}

export default CharList;