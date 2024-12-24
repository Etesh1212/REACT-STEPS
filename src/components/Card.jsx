import { useState } from "react";

const cardStyle = {
  padding: "2rem",
  display: "flex",
  justifyContent: "center",
  border: "2px solid grey",
  borderRadius: "5px",
  flexDirection: "column",
};

const active = {
  backgroundColor: "#ae3ec9",
  color: "#fff",
};

const numStyle = {
  height: "3rem",
  width: "3rem",
  borderRadius: "50%",

  backgroundColor: "#40328f",
  display: "flex",
  margin: "2rem",
  color: "white",
  alignItems: "center",
  justifyContent: "center",
};

const numContainer = {
  display: "flex",
  gap: "1rem",
  justifyContent: "center",
};

const massageStyle = {
  fontSize: "2rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const buttonContainer = {
  display: "flex",
  justifyContent: "space-between",
};

const btnStyle = {
  padding: "0.9rem",
  backgroundColor: "#fc033d",
  border: "none",
  borderRadius: "5px",
  color: "white",
};

const massages = ["learn html", "learn Css", "learn js", "learn react"];

function Card() {
  const [step, setStep] = useState(1);

  function minusStep() {
    if (step === 1) return;
    setStep(step - 1); //Asynchrounous
  }

  function plusStep() {
    if (step === massageStyle.length) return;
    setStep(step + 1);
  }

  return (
    <div style={cardStyle}>
      <ul style={numContainer}>
        <div style={step >= 1 ? { ...numStyle, ...active } : numStyle}>
          <span>1</span>
        </div>

        <div style={step >= 2 ? { ...numStyle, ...active } : numStyle}>
          <span>2</span>
        </div>

        <div style={step >= 3 ? { ...numStyle, ...active } : numStyle}>
          <span>3</span>
        </div>

        <div style={step >= 4 ? { ...numStyle, ...active } : numStyle}>
          <span>4</span>
        </div>
      </ul>

      <p style={massageStyle}>{massages[step - 1]}</p>

      <div style={buttonContainer}>
        <button onClick={minusStep} style={btnStyle}>
          Rrevious
        </button>
        <button onClick={plusStep} style={btnStyle}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Card;
