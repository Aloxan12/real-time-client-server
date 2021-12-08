import React from 'react';
import './App.css';
import {LongPolling} from "./Long polling/Long-polling";
import {GraphQLApollo} from "./GraphQL_Apollo/GraphQL_Apollo";

function App() {
  return (
    <div className="App">
      <GraphQLApollo />
    </div>
  );
}

export default App;
