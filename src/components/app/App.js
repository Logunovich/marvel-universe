import './app.scss';

import AppHeader from '../appHeader/AppHeader';
import RandomChar from '../randomChar/RandomChar';
import CharInfo from '../charInfo/CharInfo';
import CharList from '../charList/CharList';

const App = () => {
  return (
    <>
      <div className="wrapper">
        <AppHeader/>
        <RandomChar/>
        <div className="main__block">
          <CharList/>
          <CharInfo/>
        </div>
      </div>
    </>
  )
}

export default App;