import React from 'react'
import Character from "./Components/Character"
import Chars from "./Chars.json"
import Nav from "./Components/Nav"



class App extends React.Component {

  state = {
    Chars
  }

  randomIndex = () => {
    const results = []
    while(results.length<12){
      const num = Math.floor(Math.random()*12)
      if(results.indexOf(num) === -1) results.push(num)
    }
    return results
  }

  randomize = () => {
    const newChars = this.state.Chars.map(char => (this.randomIndex(char.id)))
    console.log(newChars)
    this.setState({newChars})
  }

  render(){
    return (
      <div>
        <Nav />
        <div className="container text-center">
          <div className="row">
            <div className="col-12">
              <Character onClick={this.randomize} image={Chars[0].image} />
              <Character onClick={this.randomize} image={Chars[1].image} />
              <Character onClick={this.randomize} image={Chars[2].image} />
              <Character onClick={this.randomize} image={Chars[3].image} />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Character onClick={this.randomize} image={Chars[4].image} />
              <Character onClick={this.randomize} image={Chars[5].image} />
              <Character onClick={this.randomize} image={Chars[6].image} />
              <Character onClick={this.randomize} image={Chars[7].image} />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Character onClick={this.randomize} image={Chars[8].image} />
              <Character onClick={this.randomize} image={Chars[9].image} />
              <Character onClick={this.randomize} image={Chars[10].image} />
              <Character onClick={this.randomize} image={Chars[11].image} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
