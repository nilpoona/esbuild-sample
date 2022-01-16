import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Greet from 'component/Greet.tsx'

function runApp() {
  ReactDOM.render(<Greet />, document.getElementById('root'))
}

window.addEventListener('DOMContentLoaded', (event) => {
  runApp();
});
