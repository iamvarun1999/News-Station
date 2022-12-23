import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import Footer from './Components/Footer'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      language: 'en',
      pageSize: 48,
      search: ""
    }
  }

  changeLanguage = (data)=>{
    this.setState({language:data})
  }

  changeSize = (data)=>{
    this.setState({pageSize:data})
    
  }

  changeSearch = (data)=>{
    this.setState({search:data})
    
  }

  render() {
    return ( 
      <>
      <BrowserRouter>
      <Navbar changeLanguage = {this.changeLanguage} changeSize = {this.changeSize} changeSearch = {this.changeSearch}/>
      <Routes>
      <Route path='/' element={<Home pageSize={this.state.pageSize} language={this.state.language} search={this.state.search} q='All'/>}/>
        <Route path='/India' element={<Home pageSize={this.state.pageSize} language={this.state.language} search={this.state.search} q='India'/>}/>
        <Route path='/Pakistan' element={<Home pageSize={this.state.pageSize} language={this.state.language} search={this.state.search} q='Pakistan'/>}/>
        <Route path='/China' element={<Home pageSize={this.state.pageSize} language={this.state.language} search={this.state.search} q='China'/>}/>
        <Route path='/Japan' element={<Home pageSize={this.state.pageSize} language={this.state.language} search={this.state.search} q='Japan'/>}/>
        <Route path='/USA' element={<Home pageSize={this.state.pageSize} language={this.state.language} search={this.state.search} q='USA'/>}/>
        <Route path='/Afganistan' element={<Home pageSize={this.state.pageSize} language={this.state.language} search={this.state.search} q='Afganistan'/>}/>
        <Route path='/Russia' element={<Home pageSize={this.state.pageSize} language={this.state.language} search={this.state.search} q='Russia'/>}/>
        <Route path='/Ukrain' element={<Home pageSize={this.state.pageSize} language={this.state.language} search={this.state.search} q='Ukrain'/>}/>
        <Route path='/Education' element={<Home pageSize={this.state.pageSize} language={this.state.language} search={this.state.search} q='Education'/>}/>
        <Route path='/Technology' element={<Home pageSize={this.state.pageSize} language={this.state.language} search={this.state.search} q='Technology'/>}/>
        <Route path='/Politics' element={<Home pageSize={this.state.pageSize} language={this.state.language} search={this.state.search} q='Politics'/>}/>
        <Route path='/Bussiness' element={<Home pageSize={this.state.pageSize} language={this.state.language} search={this.state.search} q='Bussiness'/>}/>
        <Route path='/Science' element={<Home pageSize={this.state.pageSize} language={this.state.language} search={this.state.search} q='Science'/>}/>
        <Route path='/Bollywood' element={<Home pageSize={this.state.pageSize} language={this.state.language} search={this.state.search} q='Bollywood'/>}/>
        <Route path='/Hollywood' element={<Home pageSize={this.state.pageSize} language={this.state.language} search={this.state.search} q='Hollywood'/>}/>
        <Route path='/Nature' element={<Home pageSize={this.state.pageSize} language={this.state.language} search={this.state.search} q='Nature'/>}/>
        <Route path='/Jokes' element={<Home pageSize={this.state.pageSize} language={this.state.language} search={this.state.search} q='Jokes'/>}/>
        
      </Routes>
      </BrowserRouter>
      <Footer/>
      </>
    )
  }
}
