import { useState, useEffect } from 'react';
// import axios from 'axios';
import AutocompleteInput from './AutocompleteInputDebounce';
import './App.css';

function App() {

  // const [options, setOptions] = useState([]);

  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/albums')
  //   .then(({ data }) => {
  //     // console.log(data)
  //     setOptions(data)
  //   })
  //   .catch(err => console.err(err))
  // }, [])

  // console.log(options)

  return (
    <div className="App">
      <p className="title">
        React autocomplete example with hooks.
      </p>
      
      {/* <AutocompleteInput options={options} /> */}
      <AutocompleteInput  />

    </div>
  );
}

export default App;
