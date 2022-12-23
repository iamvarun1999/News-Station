import React, { Component } from 'react'
import '../Assets/css/style.css'
import logo from '../Assets/logos/Logo_Main.png'
import { Link } from 'react-router-dom'
import '../Assets/css/style.css'

export default class Navbar extends Component {
  constructor(){
    super()
    this.state={
      search: ""
    }
  }
  getSearch(e){
     this.setState({search:e.target.value})
  }

  postSearch(e){
    e.preventDefault()
    this.props.changeSearch(this.state.search)
    this.setState({search:""})
 }
  render() {
    return (
      <>
      <nav className="navbar navbar-expand-lg bg-light sticky-top">
  <div className="container-fluid">
    <Link className="navbar-brand " to="/" ><img className="logo" src={logo} alt="" /></Link>
    <button className="navbar-toggler text-web" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i className="bi bi-list text-web fs-1"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/" onClick={()=>this.props.changeSearch("")}>Home</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/World" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            World
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/India"  onClick={()=>this.props.changeSearch("")}>India</Link></li>
            <li><Link className="dropdown-item" to="/Pakistan"  onClick={()=>this.props.changeSearch("")}>Pakistan</Link></li>
            <li><Link className="dropdown-item" to="/China"  onClick={()=>this.props.changeSearch("")}>China</Link></li>
            <li><Link className="dropdown-item" to="/Japan"  onClick={()=>this.props.changeSearch("")}>Japan</Link></li>
            <li><Link className="dropdown-item" to="/USA"  onClick={()=>this.props.changeSearch("")}>USA</Link></li>
            <li><Link className="dropdown-item" to="/Afganistan"  onClick={()=>this.props.changeSearch("")}>Afganistan</Link></li>
            <li><Link className="dropdown-item" to="/Russia"  onClick={()=>this.props.changeSearch("")}>Russia</Link></li>
            <li><Link className="dropdown-item" to="/Ukrain"  onClick={()=>this.props.changeSearch("")}>Ukrain</Link></li>
            
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categoryes
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/Education" onClick={()=>this.props.changeSearch("")}>Education</Link></li>
            <li><Link className="dropdown-item" to="/Technology" onClick={()=>this.props.changeSearch("")}>Technology</Link></li>
            <li><Link className="dropdown-item" to="/Politics" onClick={()=>this.props.changeSearch("")}>Politics</Link></li>
            <li><Link className="dropdown-item" to="/Bussiness" onClick={()=>this.props.changeSearch("")}>Bussiness</Link></li>
            <li><Link className="dropdown-item" to="/Science" onClick={()=>this.props.changeSearch("")}>Science</Link></li>
            <li><Link className="dropdown-item" to="/Bollywood" onClick={()=>this.props.changeSearch("")}>Bollywood</Link></li>
            <li><Link className="dropdown-item" to="/Hollywood" onClick={()=>this.props.changeSearch("")}>Hollywood</Link></li>
            <li><Link className="dropdown-item" to="/Nature" onClick={()=>this.props.changeSearch("")}>Nature</Link></li>
            <li><Link className="dropdown-item" to="/Jokes" onClick={()=>this.props.changeSearch("")}>Jokes</Link></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Select Language
          </Link>
          <ul className="dropdown-menu">
            <li><button className="dropdown-item" onClick={()=>this.props.changeLanguage('en')}>English</button></li>
            <li><button className="dropdown-item" onClick={()=>this.props.changeLanguage('hi')}>Hindi</button></li>
            
          </ul>
        </li>

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Article size
          </Link>
          <ul className="dropdown-menu">
            <li><button className="dropdown-item" onClick={()=>this.props.changeSize(8)}>8</button></li>
            <li><button className="dropdown-item" onClick={()=>this.props.changeSize(12)}>12</button></li>
            <li><button className="dropdown-item" onClick={()=>this.props.changeSize(16)}>16</button></li>
            
          </ul>
        </li>
        
      </ul>
      <form className="d-flex" role="search" onSubmit={(e)=>this.postSearch(e)}>
        <input className="form-control me-2" type="search" name ='search' onChange={(e)=>this.getSearch(e)} placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-web" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      </>
    )
  }
}
