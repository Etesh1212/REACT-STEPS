import Card from "./components/Card";
import TextExpander from "./components/TextExpander";
import DateCounter from "./components/DateCounter";

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

      <div>
        <DateCounter></DateCounter>
      </div>
    </div>
  );
}

export default App;
