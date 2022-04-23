import logo from './logo.svg';
import {Route, Routes} from 'react-router-dom'
import './App.css';
import NameCard from './components/NameCard.js';
import MyNavLink from './components/MyNavLink';
import About from './pages/About';
import Home from './pages/Home'
import { Component } from 'react';
import Counter from './components/Counter';


export default class App extends Component {
  tags=['aaa','bbb','ccc']
  render(){
  return (
    <div>
      <NameCard name="zwy" number={12345678} isHuman tags={this.tags}/>
      <MyNavLink to="/about">About test</MyNavLink>
      <MyNavLink to="/home">Home test</MyNavLink>
      <MyNavLink to="/counter">计算器</MyNavLink>
      <Routes>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/counter" element={<Counter/>}></Route>
      </Routes>

      
    </div>
  );
}
}
