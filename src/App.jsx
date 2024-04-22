import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
fetch("https://type.fit/api/quotes")
    .then(res => res.json())
    .then(data => console.log(data))
function App() {
  useEffect(() => {
    
  })
  

  return (
    <div id="quote-box">
      <h1 id='text'>Every strike brings me closer to the next home run</h1>
      <h2 id="author">- W.Clement Stone</h2>
      <button id="new-quote">New quote</button>
      <a id="tweet-quote" href=""></a>
    </div>
  )
}

export default App
