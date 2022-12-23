import React, { Component } from 'react'
import NewsCard from './NewsCard'

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      articles: [],
      totalResults: 0,
      page: 1
    }
  }

  async getApiData() {
    
    var response = ""
    if(this.props.search === ""){
      response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&language=${this.props.language}&pageSize=${this.props.pageSize}&apiKey=2f28c2393d114e53aaf114a4d69de9f0`)
    }
      else{
      response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.search}&language=${this.props.language}&pageSize=${this.props.pageSize}&apiKey=2f28c2393d114e53aaf114a4d69de9f0`)
    }
      var result = await response.json()


    this.setState({
      articles: result.articles,
      totalResults: result.totalResults
    })
  }

  

  componentDidMount() {
    this.getApiData()
  }
  componentDidUpdate(old) {
    if(this.props.q !== old.q || this.props.language !== old.language || this.props.pageSize !== old.pageSize || this.props.search !== old.serach) {
      this.getApiData()
    }
  }
  render() {
    return (
      <>
        <div className="container bg-web text-white ">
          <h5 className='text-center py-3 mb-2'>{this.props.q}</h5>
        </div>
        <div className="container">
         
            <div className="row">
              {
                this.state.articles.map((item, index) => {
                  return <NewsCard
                    key={index}
                    img={item.urlToImage}
                    title={item.title.slice(0, 35) + "..."}
                    discription={item.description.slice(0, 100) + "..."}
                    date={item.publishedAt}
                    source={item.source.name}
                    url={item.url}
                  />
                })
              }
            </div>
         
        </div>
      </>
    )
  }
}
