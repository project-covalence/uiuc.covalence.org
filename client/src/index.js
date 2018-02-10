// @flow
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

import React from 'react'
import ReactDOM from 'react-dom'

import registerServiceWorker from './registerServiceWorker'
import './styles/index.css'

import App from './App'

ReactDOM.render(<App />, (document.getElementById('root'): any))

registerServiceWorker()
