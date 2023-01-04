import "./App.css";
import TextToSpeech from "./Component/TextToSpeech/TextToSpeech";
import React from "react";

export default class App extends React.Component {
  render() {
    return (
      <div className="main">
        <h1>Quoi Feur Detector !</h1>
        <TextToSpeech />
        <h3>Site créer par BlizzFull; Discord : Blizz#7190</h3>
      </div>
    );
  }
}
