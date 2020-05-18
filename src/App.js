import React from 'react';
import './App.css';


function App() {
  return (
    <div><h1>Jot.It</h1></div>
  );
}
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

export default App;
