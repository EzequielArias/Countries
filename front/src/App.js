import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import Home from './pages/Home/Home'
import Detail from './pages/Detail/Detail'
import CreateForm from './pages/CreateForm/CreateForm'
import React from 'react'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Switch>
        <Route path='/home/create' component={CreateForm}/>
        <Route path='/home/:id' component={Detail}/>
        <Route path='/home' component={Home}/>
        <Route path='/' component={Landing}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
