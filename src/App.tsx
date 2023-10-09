import React from 'react';
import { BrowserRouter as Router, Route, BrowserRouter} from 'react-router-dom';
import Head from './Components/chapters/head/Head';
import Routes from './Components/navigation/routes';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Head/>
        <Routes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
