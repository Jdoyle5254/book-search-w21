import React from 'react'
import {useEffect, useState} from "react"
import './App.css';
import Header from "./components/Header"
import SearchBookBox from "./components/SearchBookBox"

function App() {
  // const [search, setSearch] = useState({ search: "", limit: "" });
  // const [gifs, setgifs] = useState([]);
  const [data, setData]  = useState(null)

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      // console.log('res', res.data)
      .then((data) => setData(data.message));
  }, []);

  // const handleSearch = event => {
  //   setSearch({ ...search, search: event.target.value });
  // };
  // const handleLimit = event => {
  //   setSearch({ ...search, limit: event.target.value });
  // };


  // const handleClick = async event => {
  //   event.preventDefault();
  //   try {
  //     const response = await fetch(
  //       `https://api.giphy.com/v1/gifs/search?api_key=ndBh69mQJzrSa8QGZLB2gZhhhmCBZQZb&q=${
  //         search.search
  //       }&limit=${search.limit}&offset=0&rating=g&lang=en`
  //     );
  //     const gifList = await response.json();
  //     console.log("RESPONSE", gifList);
  //     setgifs([...gifList.data]);
  //     console.log("DATA", gifList.data);
  //   } catch (err) {
  //     console.log("error: ", err);
  //   }
  // };

  // const handleClear = event => {
  //   event.preventDefault();
  //   setgifs([]);
  // };

  return (
    <div className="App">
      <Header />
      <SearchBookBox />
       <h1>Start here and code</h1>
       {!data ? "Loading the data? " :  data}
    </div>
  );
}

export default App;
