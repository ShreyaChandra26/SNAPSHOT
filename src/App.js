import { useState,useEffect } from "react";
import {LoadImages,SearchImages} from './components/api'
import './App.css';
import Image from './components/image'

function App() {
  const [query,setQuery]=useState()
  const [searchQ,setSearch]=useState()

  const data=LoadImages()



  const search=()=>{
    setSearch(query)



  }
  const searchData=SearchImages(searchQ)
  console.log(searchData)

  return (
    <div className="App">
      <div>
      <h1>SnapShot</h1>
    </div>
  

      <div className="main">
        <input type="text" onChange={(event)=>setQuery(event.target.value)} placeholder="search..."/>
        <button onClick={search}>Search</button>
      </div>
      <div>

        <div className="container">

      {searchQ ? searchData.map((img,key)=>(
      <Image src={img.urls.thumb} key={key} />

     )) : data.map((img,key)=>(
      <Image src={img.urls.thumb} key={key} />

     ))}
     
      </div>
      </div>
     
    </div>
  );
}

export default App;
