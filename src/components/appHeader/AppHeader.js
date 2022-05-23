import './appHeader.scss';

const AppHeader = () => {
  return (
    <>
      <div className="app__header">
        <div className="app__header_title">
          <h1><span className="app__header_title-red">Marvel</span> information portal</h1>
        </div>
        <div className="app__header_menu">
          <a className="app__header_menu active" href="https://r24.by">Characters</a> / <a href="https://r24.by">Comics</a>
        </div>
      </div>
    </>
  )
}

export default AppHeader;