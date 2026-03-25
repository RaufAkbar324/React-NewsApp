import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import Loader from './Components/Loader';
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default class App extends Component {
  pageSize = 3;
  render() {
    
    return (
      
      <div>
        
     
        {/* <News pageSize={3} country="us" category="science"/> */}
        <BrowserRouter>
           <Navbar/>
        <Routes>
        <Route  exact path="/" key="science"  element={<News pageSize={this.pageSize} country="us" category="science"/>}/>
        <Route  exact path="/About" key="science"  element={<News pageSize={this.pageSize} country="us" category="science"/>}/>
        <Route  exact path="/Business" key="business"  element={<News pageSize={this.pageSize} country="us" category="business"/>}/>
        <Route  exact path="/Entertainment" key="entertainment"  element={<News pageSize={this.pageSize} country="us" category="entertainment"/>}/>
        <Route  exact path="/General" key="general"  element={<News pageSize={this.pageSize} country="us" category="general"/>}/>
        <Route  exact path="/Health" key="health"  element={<News pageSize={this.pageSize} country="us" category="health"/>}/>
        <Route  exact path="/Sciences" key="science"  element={<News pageSize={this.pageSize} country="us" category="science"/>}/>
        <Route  exact path="/Portstechnology" key="technology"  element={<News pageSize={this.pageSize} country="us" category="technology"/>}/>  
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}


