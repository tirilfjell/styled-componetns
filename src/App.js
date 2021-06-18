import "./App.css";

import styled from "styled-components";

const Stylestext = styled.h1`
  color: palevioletred;
  font-weight: bold;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Stylestext>haloo test</Stylestext>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
