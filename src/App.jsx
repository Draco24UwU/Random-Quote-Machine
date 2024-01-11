/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import {FaTwitter, FaQuoteLeft, FaQuoteRight} from "react-icons/fa"
import quotes from './assets/quotes.json'


function App() {
  const [quote, setQuote] = useState(getRandomQuote())
  const [color, setColor] = useState(getRandomColor())

  return (
    <div className='background' style={{ backgroundColor: color, color: color}}>
      <div id="quote-box">
        <div  className="quote-content">
          <FaQuoteLeft className='transition'/>
          <h2 id='text'>{quote.quote}</h2>
          <FaQuoteRight className='transition'/>
          <h4 id='author'> - {quote.author}</h4>
        </div>

        <div className='buttons'>
          <a href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}`} id='tweet-quote'>

              <FaTwitter color='white'/>
          </a>

          <button id='new-quote' className='transition' style={{ backgroundColor: color, color: 'white'}} onClick={() => {
            setQuote(getRandomQuote());
            setColor(getRandomColor());
            }}>
              Change Quote
          </button>
        </div>
          
          
      </div>
    </div>
  )
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const getRandomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)]
}

export default App
