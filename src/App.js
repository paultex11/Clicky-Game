import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Image from "./components/Image";
import Img from "./components/Img.json"

//image imports
import AC from "./images/AC.gif"
import GTA from "./images/GTA.gif"
import dance from "./images/M%26L%20Dance.gif"
import MortalKombat from "./images/Mortal%20Kombat.gif"
import NHL13 from "./images/NHL13.gif"
import Pikachu from "./images/Pikachu.gif"
import ResidentEvil from "./images/Resident%20Evil.gif"
import Robocop from "./images/Robocop.gif"
import Koopa from "./images/koopa.gif"
import pacman from "./images/pac-man.gif"
import StreetFighter from "./images/street_fighter_2.gif"
import Zelda from "./images/zelda.gif"

import './App.css';

class App extends Component {
  state = {
    picked: [],
    correct: 0,
    topscore: 0,
    message: 'Click an image to begin'
  };

//Shuffle Array
  shuffleArray = (array) => {
    let imgArray = Img;
    for (let i = imgArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [imgArray[i], imgArray[j]] = [imgArray[j], imgArray[i]];
    }
    return imgArray
  }

  pickImg = (name) => {
    console.log("Clicked!!");
    let picked = this.state.picked;
    
    if (picked.indexOf(name) === -1) {
      this.setState({
        picked: picked.concat(name),
        correct: this.state.correct + 1,
        topscore: this.state.correct + 1 > this.state.topscore ? this.state.correct + 1 : this.state.topscore,
        message: "Correct: Good choice!" 
      })
      this.shuffleArray();
    }
    else {
      this.setState({
        message: "Already Selected Game Over, Replay?",
        correct: 0,
        picked: []
      })
    }
  }

  imgSwitch = (name) => {
    switch (name) {
      case "AC":
        return `${AC}`
      case "GTA":
        return `${GTA}`
      case "dance":
        return `${dance}`
      case "Mortal Kombat":
        return `${MortalKombat}`
      case "NHL 13":
        return `${NHL13}`
      case "Pikachu":
        return `${Pikachu}`
      case "Resident Evil":
        return `${ResidentEvil}`
      case "Robocop":
        return `${Robocop}`
      case "Koopa":
        return `${Koopa}`
      case "pacman":
        return `${pacman}`
      case "Street Fighter":
        return `${StreetFighter}`
      case "Zelda":
        return `${Zelda}`
      default:
        return `${Zelda}`
    }
  }

  render() {
    return (
      <div>
        <Navbar correct={this.state.correct} topscore={this.state.topscore} message={this.state.message}/>
        <Header />
        <Main>
          {this.shuffleArray(Img).map(image => (
            <Image src={this.imgSwitch(image.name)} name={image.name} key={image.name} pickImg={this.pickImg}  />
          ))}
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;