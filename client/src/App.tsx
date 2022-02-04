import React from 'react';
import './App.css';
import {LongPolling} from "./Long polling/Long-polling";
import {GraphQLApollo} from "./GraphQL_Apollo/GraphQL_Apollo";
import {Login, Registration, Users} from "./jwt_just/JwttJust";

function App() {
  return (
    <div className="App">
        <Users />
    </div>
  );
}

export default App;
