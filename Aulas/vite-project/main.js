import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>

    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <div class="card">
    <button id="counter2" type="button"></buttpn>
    </div>

  </div>
`

setupCounter(document.getElementById('counter'))
setupCounter(document.getElementById('counter2'))
