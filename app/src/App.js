import logo from "./logo.svg";
import "./App.css";
import Info from "./components/Info";

function App() {
  const containerStyle = {
    margin: "auto",
    width: "20%",
  };

  return (
    <div style={containerStyle}>
      <Info firstName="Jane" lastName="Doe" age={45} hairColor="Black" />
      <Info firstName="John" lastName="Smith" age={88} hairColor="Brown" />
      {/* <Info
        firstName="Millard"
        lastName="Fillmore"
        age={50}
        hairColor="Brown"
      />
      <Info firstName="Maria" lastName="Smith" age={62} hairColor="Brown" />
      */}
    </div>
  );
}

export default App;
