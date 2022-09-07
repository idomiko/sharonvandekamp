import React, { Component } from "react";
import TopButton from "./components/TopButton/TopButton";
import RightButton from "./components/RightButton/RightButton";
import Logo from "./components/Logo/Logo";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopButton />
        <RightButton />
        <Logo />
        <ImageSlider />
        {/*<Model3D />
        <CtaButton />
        <ContactForm />
    <BrandsPrompt/>*/}
      </div>
    );
  }
}

export default App;
