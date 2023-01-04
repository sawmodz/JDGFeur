import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "./TextToSpeech.css";

const wordList = require("../../wordList/word.json");

const limitWord = 15;

const TextToSpeech = () => {
  const {
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
    browserSupportsContinuousListening,
  } = useSpeechRecognition();
  const [lastWord, setLastWord] = useState("");

  SpeechRecognition.startListening({ continuous: true, language: "fr-FR" });

  useEffect(() => {
    console.log(transcript);
    const myWord = transcript.split(" ");
    if (wordList[myWord[myWord.length - 1]] !== undefined) {
      setLastWord(wordList[myWord[myWord.length - 1]]);
    }
    if (transcript.split(" ").length >= limitWord) {
      resetTranscript();
    }
  });

  if (
    !browserSupportsSpeechRecognition ||
    !browserSupportsContinuousListening
  ) {
    return (
      <div className="center">
        <h2 className="text">Ton navigateur n'est pas supporté</h2>
      </div>
    );
  }
  if (!isMicrophoneAvailable) {
    return (
      <div className="center">
        <h2 className="text">Tu dois autoriser le micro.</h2>
      </div>
    );
  }
  return (
    <div className="center">
      <h2 className="text">{transcript}</h2>
      <h1 className="reply">{lastWord}</h1>
    </div>
  );
};

export default TextToSpeech;
