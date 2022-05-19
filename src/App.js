import React,{} from 'react'
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm'
import Rank from "./components/Rank";
import './App.css';



function App() {
  // constructor()  {
  //   super();
  //   this.state = {
  //     input: '',
  //   }
  // }

  // onInputChange = (event) => {
  //   console.log(event.target.value)
  // }

  return (
  <div className = "App" >
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* { 
      <FaceRecognition />} */}
    </div>
  );
}

export default App;
