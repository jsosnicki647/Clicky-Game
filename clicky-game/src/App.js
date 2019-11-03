import React from 'react'
import Character from "./Components/Character"
import characters from "./characters.json"
import Nav from "./Components/Nav"



class App extends React.Component {

  state = {
    characters: characters,
    selected: [],
    topScore: 0
  }

  selected = (e) => {
    const id = e.target
    const newSelected = this.state.selected
    newSelected.push(id)
    this.setState({selected: newSelected})
    console.log(id)
    this.randomize()
    // this.setState({characters: this.randomize()})
  }


  randomize = () => {
    this.setState({characters: this.shuffleArray(this.state.characters)})
  }

  shuffleArray = (arr) => {
    var j, x, i;
    for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i +1));
      x = arr[i];
      arr[i] = arr[j];
      arr[j] = x;
    }
    return arr;
  }


  render(){
    return (
      <div>
        <Nav />
        <div className="container text-center">
          <div className="row">
            <div className="col-12">
              <Character selected={this.selected} id={characters[0].id} image={characters[0].image} />
              <Character selected={this.selected} id={characters[1].id} image={characters[1].image} />
              <Character selected={this.selected} id={characters[2].id} image={characters[2].image} />
              <Character selected={this.selected} id={characters[3].id} image={characters[3].image} />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Character selected={this.selected} id={characters[4].id} image={characters[4].image} />
              <Character selected={this.selected} id={characters[5].id} image={characters[5].image} />
              <Character selected={this.selected} id={characters[6].id} image={characters[6].image} />
              <Character selected={this.selected} id={characters[7].id} image={characters[7].image} />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Character selected={this.selected} id={characters[8].id} image={characters[8].image} />
              <Character selected={this.selected} id={characters[9].id} image={characters[9].image} />
              <Character selected={this.selected} id={characters[10].id} image={characters[10].image} />
              <Character selected={this.selected} id={characters[11].id} image={characters[11].image} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
