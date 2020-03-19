import React from "react";

export default function ChoiceButtons(props) {
  return (
    <div className="container">
      <button
        className="btn btn-success btn-lg"
        onClick={() => props.onPlayerChoose("Ho Chi Minh city")}
      >
        Rock
      </button>
      <button
        className="btn btn-success btn-lg"
        onClick={() => props.onPlayerChoose("New York city")}
      >
        Paper
      </button>
      <button
        className="btn btn-success btn-lg"
        onClick={() => props.onPlayerChoose("London")}
      >
        Scissors
      </button>
    </div>
  );
}