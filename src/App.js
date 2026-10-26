
import Header from './components/Header/index'
import {useState, useEffect} from 'react'
import {Route, Routes} from "react-router-dom"
import Principal from './components/Principal/index'
import DetailSong from './components/DetailSong/index'

function App() {

    

  return (
    <>
        <Header />
        <Routes>
            <Route path = "/" element = {<Principal />}/>
            <Route path = "/song/:id" element = {<DetailSong />} />
        </Routes>    
    </>
  );
}

export default App;

