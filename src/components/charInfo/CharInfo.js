import './charInfo.scss';
import loki from '../../resources/02.jpg';

const CharInfo = () => {
  return (
    <div className="char__info">
      <div className="char__info_text-block">
        <div className="char__info_top">
          <div className="char__info_img">
            <img src={loki} alt="loki" />
          </div>
          <div className="char__info_right">
            <div className="char__info_char">
              <h2>Loki Loki Loki Loki Loki</h2>
            </div>
            <div className="char__info_btns">
              <a href="https://r24.by" className="btn red__btn">Homepage</a>
              <a href="https://r24.by" className="btn gray__btn">Wiki</a>
            </div>
          </div>
        </div>
        <div className="char__info_text">
          <p>
          In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.
          </p>
        </div>
      </div>
      <div className="char__info_comics">
        <span className="comics-title">Comics:</span>
        <ul className="char__info_comics-list">
          <li>All-Winners Squad: Band of Heroes (2011) #3</li>
          <li>Alpha Flight (1983) #50</li>
          <li>Amazing Spider-Man (1999) #503</li>
          <li>Amazing Spider-Man (1999) #504</li>
          <li>AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)</li>
          <li>Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)</li>
          <li>Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)</li>
          <li>Vengeance (2011) #4</li>
          <li>Avengers (1963) #1</li>
          <li>Avengers (1996) #1</li>
        </ul>
      </div>
    </div>
  )
}

export default CharInfo;