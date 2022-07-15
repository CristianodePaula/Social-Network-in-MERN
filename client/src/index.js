/*
import ReactDOM from 'react-dom/client'
import App from './App'
import 'normalize.css'
import { Provider } from 'react-redux'
import store from './store/ReduxStore'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
*/

import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import store from "./store/ReduxStore"
//import { PersistGate } from "redux-persist/integration/react"
import App from "./App"
import 'normalize.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="*"  element={<App />} />
        </Routes>
      </BrowserRouter>
  </Provider>,
)
  


/*
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'normalize.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
*/
