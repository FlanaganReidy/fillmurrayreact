import React, { Component } from 'react';
import TopPara from './toppara.js';
import BottomPara from './bottompara.js';

export default class Main extends Component{
  render(){
    return(
      <div className="main-body">
      <TopPara />
      <BottomPara />
      </div>
    );
  }
}
