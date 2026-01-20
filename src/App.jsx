import { useState } from 'react';
import logo from './logo.svg';
import Title from './Components/Title';
import Section from './Components/Section';
import data from './events.json'
import Event from "./Components/Event"
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      
      <Section>
        <Title />
        <Event prop={data} />
      </Section>
    </div>
  );
};

export default App;
