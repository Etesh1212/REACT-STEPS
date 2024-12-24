import Card from "./components/Card";
import TextExpander from "./components/TextExpander";
import DateCounter from "./components/DateCounter";
import StarRating from "./components/StartRating";
import bmiCalculater from "./components/bmiCalculater";

const appStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  // height: "100vh",
  flexDirection: "column",
  gap: "4rem",
  padding: "4rem 0",
};

function App() {
  return (
    <div style={appStyle}>
      <Card />
      <TextExpander />
      <DateCounter />
      <StarRating />
      <bmiCalculater />
    </div>
  );
}

export default App;
