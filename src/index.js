import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let time= new Date(2021, 9, 12, 23);
time = time.getHours();

let greet= '';
let cssStyle={};

if(time>=1 && time<12){
  greet = 'Good Morning';
  cssStyle.color='#e6b15d';
}
else if(time>=12 && time <20){
  greet = 'Good Afternoon';
  cssStyle.color='#d16428';

}
else {
  greet='Good Night';
  cssStyle.color='#333';

}

ReactDOM.render(
  <>
    <div>
      <h1>Welcome </h1>
      <span style={cssStyle}>{ greet}</span>
    </div>
  </>,
  document.getElementById('root')
);