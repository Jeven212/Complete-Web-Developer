import './App.css';
import { Component } from 'react';
import ParticlesBG from "particles-bg";
import Clarifai from "clarifai";
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';  
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';

window.process = {};

const app = new Clarifai.App({
  apiKey: "56610c0daef641aead61e7de0d0781bd"
});

class App extends Component {
  constructor() {
    super();
    this.state = {
        input: "",
        imgURL: "",
        box: {},
        route: "signin",
        isSignedIn: false
    };
  }

calcFaceLoc = date => {
  const firstFace = date.outputs[0].data.regions[0].region_info.bounding_box;
  const img = document.querySelector("#inputIMG");
  const width = Number(img.width);
  const height = Number(img.height);
  return {
    leftCol: firstFace.left_col * width,
    topRow: firstFace.top_row * height,
    rightCol: width - (firstFace.right_col * width),
    bottomRow: height - (firstFace.bottom_row * height)
  };
}

displayFaceBox = box => {
  this.setState({box: box});
  console.log(box);
}

  onInputChange = event => {
    console.log(event.target.value);
    this.setState({input: event.target.value});
  }

  onInputSubmit = () => {
    console.log("BTN", this.state.input);
    this.setState({imgURL: this.state.input});
    //https://samples.clarifai.com/face-det.jpg
    app.models.predict(
      "a403429f2ddf4b49b307e318f00e528b", //Clarifai.FACE_DETECT_MODEL
      this.state.imgURL)
      .then(response => {
          this.displayFaceBox(this.calcFaceLoc(response));
          // console.log(response);
          // console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
        })
      .catch(err => console.log(err))
  }

  onRouteChange = (route) => {
    if (route === "signin" || route === "register"){
      this.setState({isSignedIn: false});
    } else if (route === "home") {
      this.setState({isSignedIn: true});
    }
    this.setState({route: route})
  }

  render() {
    return (
      <div className="">
        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
        { this.state.route === "home" ? 
            <div>
              <Logo />
              <Rank />
              <ImageLinkForm onInputChange={ this.onInputChange } onInputSubmit={ this.onInputSubmit }/>
              <ParticlesBG type='cobweb' color="#ffffff" bg={true}/>
              <FaceRecognition imgURL={this.state.imgURL} box={this.state.box}/>
            </div> : (
            this.state.route === "signin" ? <SignIn onRouteChange={this.onRouteChange} /> :
            <Register onRouteChange={this.onRouteChange} />
          )
        }
      </div>
    );
  }
}

export default App;
