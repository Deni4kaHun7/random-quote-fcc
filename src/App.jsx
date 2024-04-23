import { useEffect, useState } from 'react'
import './App.css'

export default function App() {
  const [allQuotes, setAllQuotes] = useState([])
  const [quote, setQuote] = useState({});
  let randomIndex = 0;

  useEffect(() =>{
    fetch("https://type.fit/api/quotes")
    .then(res => res.json())
    .then(data => {
      setAllQuotes(data);
      setQuote(data[Math.floor(Math.random()*data.length)])
    })
  }, [])

  function changeQuote(){
    randomIndex = Math.floor(Math.random()*allQuotes.length);
    setQuote(allQuotes[randomIndex])
  }
  return (
    <div id="quote-box">
      <h1 id='text'>{quote.text}</h1>
      <h2 id="author">- {quote.author}</h2>
      <button onClick={changeQuote} id="new-quote">New quote</button>
      <a id="tweet-quote" href="twitter.com/intent/tweet"></a>
    </div>
  )
}



