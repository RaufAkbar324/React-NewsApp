import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import Loader from './Components/Loader';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App=()=> {

  const pageSize = 3;
  const apikey = process.env.REACT_APP_NEWS_API_KEY;


  const [progress,setProgress]=useState(0);



    
    return (
      
      <div>
        
     
        {/* <News setProgress={setProgress} apikey={apikey}   pageSize={3} country="us" category="science"/> */}
        <BrowserRouter>
           <Navbar/>
           <LoadingBar
           height = {3}
        color="#f11946"
        progress={progress}
       
      />
        <Routes>
        <Route  exact path="/" key="science"  element={<News setProgress={setProgress} apikey={apikey}   pageSize={pageSize} country="us" category="science"/>}/>
        <Route  exact path="/About" key="science"  element={<News setProgress={setProgress} apikey={apikey}   pageSize={pageSize} country="us" category="science"/>}/>
        <Route  exact path="/Business" key="business"  element={<News setProgress={setProgress} apikey={apikey}   pageSize={pageSize} country="us" category="business"/>}/>
        <Route  exact path="/Entertainment" key="entertainment"  element={<News setProgress={setProgress} apikey={apikey}   pageSize={pageSize} country="us" category="entertainment"/>}/>
        <Route  exact path="/General" key="general"  element={<News setProgress={setProgress} apikey={apikey}   pageSize={pageSize} country="us" category="general"/>}/>
        <Route  exact path="/Health" key="health"  element={<News setProgress={setProgress} apikey={apikey}   pageSize={pageSize} country="us" category="health"/>}/>
        <Route  exact path="/Sciences" key="science"  element={<News setProgress={setProgress} apikey={apikey}   pageSize={pageSize} country="us" category="science"/>}/>
        <Route  exact path="/Portstechnology" key="technology"  element={<News setProgress={setProgress} apikey={apikey}   pageSize={pageSize} country="us" category="technology"/>}/>  
        </Routes>
        </BrowserRouter>
      </div>
    )
  }

  export default App;



