import logo from './logo.svg';
import './App.css';
import Api from './component/Api';
import Search from './component/Search';
import axios from "axios";
import { useState } from 'react';

function App() {

  const [url, seturl] = useState([]);


   onsearch=async term =>{
    // console.log(term)
      const response= await axios.get('https://url-intelligence.p.rapidapi.com/rip', {
        params: {target: term },
          headers: {
            'x-rapidapi-key': 'ed41efa999msh8c52bd818ecc78dp1b6c59jsn6c5f016512d1',
            'x-rapidapi-host': 'url-intelligence.p.rapidapi.com'
          }

      });
      seturl(response.data.links);
      console.log(response.data.links);



      

  };

  return (
    <div className="App">
        <Search onsearch={onsearch} />
        <Api urls={url} />

    </div>
  );
}

export default App;
