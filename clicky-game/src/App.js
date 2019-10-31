import React from 'react'
import Character from "./Components/Character"
import Chars from "./Chars.json"

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Character image={Chars[0].image} />
          <Character image={Chars[1].image} />
          <Character image={Chars[3].image} />
          <Character image={Chars[4].image} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Character image={Chars[5].image} />
          <Character image={Chars[6].image} />
          <Character image={Chars[7].image} />
          <Character image={Chars[8].image} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Character image={Chars[9].image} />
          <Character image={Chars[10].image} />
          <Character image={Chars[11].image} />
          <Character image={Chars[12].image} />
        </div>
      </div>
    </div>
  )
}

export default App;
