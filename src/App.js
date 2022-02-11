import React from 'react';
import { useState } from "react"; 
import RealHandpose from './components/RealHandpose.js';
import RealBodypix from './components/RealBodypix.js';
import RealObject from './components/RealObject.js';


//import './App.css';

function App() {

const [stateBodypix, setStateBodypix] = useState(true);
const [stateHandpose, setStateHandpose] = useState(false);
const [stateRealObject, setStateRealObject] = useState(false);


function set_state_bodypix(){
  setStateHandpose(false);
  setStateRealObject(false);
  setStateBodypix(true);
}

function set_state_handpose(){
  setStateBodypix(false);
  setStateRealObject(false);
  setStateHandpose(true);
}

function set_state_real_object(){
  setStateHandpose(false);
  setStateBodypix(false);
  setStateRealObject(true);
}

  return (
    
        <>
          
          <br>
          
          </br>
          <div style={{ display: "flex" }}>
              <button 
                  disabled={stateBodypix} 
                  onClick={set_state_bodypix} 
                  style={{marginLeft:'auto', color:'red', backgroundColor:'black', justifyContent: 'flex-end'}}
                >
                  bodypix
              </button>
              <button
                  disabled={stateHandpose} 
                  onClick={set_state_handpose}
                  style={{marginLeft:'auto', color:'red', backgroundColor:'black', justifyContent: 'flex-end'}}
                >
                  handpose
              </button>
              <button 
                  disabled={stateRealObject} 
                  onClick={set_state_real_object}
                  style={{marginLeft:'auto', color:'red', backgroundColor:'black', justifyContent: 'flex-end'}}
                >
                  object
              </button>
          </div>


          <div>
            {stateBodypix && (
              <RealBodypix />
            )}
            {stateHandpose && (
              <RealHandpose />
            )}
            {stateRealObject && (
              <RealObject />
            )}
          </div>
        </>
        
      
  );
}

export default App;


