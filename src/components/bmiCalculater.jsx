import { useState } from "react";

function bmiCalculater() {
  // making state our application

  const [Weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(" ");
  const [massage, setMassage] = useState("");

  // logic

  let calcBmi = () => {
    if (Weight === 0 || height === 0) {
      alert("please enter a valid weight and height");
    } else {
      let bmi = (Weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      if (bmi < 25) {
        setMassage("you are underweight");
      } else if (bmi >= 25 && bmi < 30) {
        setMassage("you are a healthy weight");
      } else {
        setMassage("you are overweight");
      }
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label htmlFor="">Weight (ibs)</label>
            <input
              type="text"
              placeholder="Enter weight value"
              value={Weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="">Weight (in)</label>
            <input
              type="text"
              placeholder="Enter height value"
              value={height}
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>

          <div>
            <button className="btn" type="Submit">
              Submit
            </button>
            <button className="btn-outline" type="submit">
              Reload
            </button>
          </div>

          <div className="center">
            <h3>Your BMI is:{bmi}</h3>
            <p>{massage}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default bmiCalculater;
