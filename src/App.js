import React from 'react';
import './App.css'
import palm from "../images/palm.jpeg"





function App() {
  return (
   <div className="container">
    <div 
      className="palm-background"
      style={{backgroundImage: `url(${palm})`}}>
        
      </div>
   </div>
  );
}

export default App;
