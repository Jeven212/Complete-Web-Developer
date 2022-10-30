window.process = {
  ...window.process
};
console.log("process111", window.process)

import './App.css';
import { Component } from 'react';
import ParticlesBG from "particles-bg";
import Clarifai from "clarifai";
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';  
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

console.log("process222", window.process)
 
const app = new Clarifai.App({
  apiKey: "56610c0daef641aead61e7de0d0781bd"
});

class App extends Component {
  constructor() {
    super();
    this.state = {
        input: "",
        imgURL: ""
    };
  }

  onInputChange = (event) => {
    console.log(event.target.value);
    this.setState({input: event.target.value});
  }

  onInputSubmit = () => {
    console.log("BTN", this.state.input);
    this.setState({imgURL: this.state.input});

    app.models.predict(
      "a403429f2ddf4b49b307e318f00e528b", 
      "https://samples.clarifai.com/face-det.jpg")
      .then(
        function (response) {
          console.log(response)
        },
        function (error){

        }
    );
  }

  render() {
    return (
      <div className="">
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={ this.onInputChange } onInputSubmit={ this.onInputSubmit }/>
        <ParticlesBG type='cobweb' color="#ffffff" bg={true}/>
        <FaceRecognition imgURL={this.state.imgURL}/>
      </div>
    );
  }
}

export default App;
